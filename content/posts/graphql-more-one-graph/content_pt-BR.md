---
title: GraphQL com mais de um graph
excerpt: Algumas coisas sobre um projeto GraphQL recente.
---
Eu sou um grande fã de GraphQL. Eu tenho vontade de escrever sobre GraphQL há mais ou menos um ano, porém nunca tive a oportunidade. Recentemente, eu desenvolvi um app React usando Apollo Client com uma API GraphQL federada. Então, eu pensei que essa era uma ótima oportunidade para finalmente fazer o post. Antes de falar sobre essas coisas, eu quero falar um pouco sobre APIs REST, mostrando os pontos sobre elas que normalmente fazem alguém querer mudar para GraphQL.

## RESTful
Muitas APIs hoje em dia são RESTful ou algo semelhante a isso. No fim, fazer uma API RESTful não é sempre tão simples. Quando nós estamos falando sobre vários resources e as relações entre eles, algumas ideias REST trazem alguns desafios.

Considere o seguinte model:
```text
User {
  id: Int;
  name: String;
  picture: String;
  birth: Date;
  address: String;
  friends: []User;
}
```

Em REST, `User` é um resource e possui dois endpoints:

* `/users`
* `/users/{userID}`

Um problema com esse model é o campo `friends` retornando objetos `User`. Isso é um problema porque alguns clientes podem não precisar dos dados desse campo, mas teriam que esperar por eles da mesma maneira (overfetching). Se os dados desse campo forem colocados em outro endpoint, por exemplo `/users/{userID}/friends`, os clientes que precisaram desses dados teriam que fazer mais requisições (underfetching). Sim, esse é um problema cuja solução é achar uma balança entre outros dois problemas. Você não deve criar endpoints para cada combinação possível de campos que clientes podem necessitar, assim como você não deve retornar todos os dados em apenas um endpoint.

### O exemplo
A fim de tornar as coisas mais interessantes, vamos supor que os usuários nessa API não podem ter mais que 10 amigos. Devido a essa limitação, o campo `friends` será um objeto no formato `{id, link}`. O endpoint `/users/{userID}/friends` também não existirá. Dessa maneira, se o cliente quiser saber mais sobre os amigos do usuários, ele irá fazer uma requisição para cada amigo. Mesmo que esse exemplo posso parecer, ele não é tão remoto.

Considere um web app que precisa do nome do usuário com id 12 e o nome de cada um dos seus amigos. Primeiro, uma requisição para `/users/12` é feita, então o app itera sobre a lista do campo `friends`, fazendo uma requisição para cada item. Se o usuário 2 tiver 10 amigos, haveria 11 requisições. A abordagem padrão, nesse caso, seria fazer as 10 últimas requisições ao mesmo tempo, considerando que a lista é pequena.

#### HTTP/1.x
Se HTTP/1.x for usado para essas requisições, 10 requisições feitas ao mesmo tempo no código JavaScript não significam que o navegador irá, de fato, fazê-las ao mesmo tempo. Primeiro, navegadores definem um limite de aproximadamente 6 no número de conexões paralelas para o mesmo host, então não haverá 10 conexões TCP paralelas. Além disso, novas conexões implicam uma penalidade em latência com mais TCP handshakes e, provavelmente, TLS handshakes. Segundo, há head of line (HOL) blocking no HTTP/1.1, que faz com que, nas últimas 10 requisições, a sétima precise esperar que a resposta de uma das 6 primeiras seja recebida para que ela seja feita pelo navegador.

#### HTTP/2
Se HTTP/2 for usado para essas requisições, as coisas são consideravelmente melhores. Devido ao multiplexing do HTTP/2, uma única conexão pode ser usada para todas as 11 requisições. Além disso, devido às streams do HTTP/2, o HOL blocking do HTTP/1.x não ocorre mais, fazendo com que o navegador não tenha que esperar pela resposta da requisição para fazer a próxima na mesma conexão. HTTP/2 é amplamente suportado e se você pode, e provavelmente pode, use-o na sua API. Isso irá fazer uma diferença muito boa.

> **Nota:** HTTP/2 também tem um problema de head of line blocking, mas é no nível TCP e ele é [um dos focos do HTTP/3](https://http3-explained.haxx.se/en/why-quic/why-tcphol).

### Documentação e formato
APIs REST normalmente especificam o formato da resposta como JSON, mas a estrutura dos dados no body da resposta também é muito importante. Tenha em mente que a estrutura é o que permite aos clientes da API entenderem o que os dados retornados realmente significam. Isso torna a documentação da API algo muito importante. Para isso, você pode usar uma especificação, como [OpenAPI](https://www.openapis.org), e criar uma documentação a partir dela. Uma especificação OpenAPI pode ser escrita em JSON ou YAML e é amplamente reconhecida como uma maneira de especificar o que uma API pode fazer. Independentemente de OpenAPI ser usada, a documentação tem de estar atualizada, do contrário ela pode não ser tão útil aos clientes.

Há também opções para tornar o JSON retornado em algo mais significativo. JSON-LD é um ótimo exemplo disso. JSON-LD, LD significando Linked Data, existe há alguns anos e tem recebido grande adoção para SEO. JSON-LD baseia-se na ideia que cada comunicação possui um contexto. Por exemplo, um campo `nascimento` na API A pode referir a um ano, enquanto o mesmo campo na API B pode referir a uma data RFC 3339. Devido a isso, um contexto pode ser fornecido nas respostas de ambas APIs, cada uma apontando `nascimento` para uma [IRI](https://www.w3.org/2018/jsonld-cg-reports/json-ld/#iris) diferente. O objetivo de Linked Data, e portanto também de JSON-LD, é tornar os dados na web machine-readable e linked ([há uma talk sobre isso da pessoa que cunhou o termo](https://www.ted.com/talks/tim_berners_lee_the_next_web)). Também, no resource user, o campo `friends` era uma lista de links em um objeto `{id, link}`, mas poderia ser usado JSON-LD para representar tais links. Se você usar JSON-LD na sua API, você poderá tornar os dados ainda mais úteis para os seus clientes, já que eles estariam estruturados em uma maneira padrão. Você poderia fornecer dados estruturados em JSON-LD apenas para clientes que querem por um `Accept` header ou query parameter.

## GraphQL
Como [graphql.org](https://graphql.org/) diz:

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Se você comparar essas palavras com os problemas falados acima, você irá perceber que underfetching e overfetching não existem mais, i.e. um cliente pode pedir por exatamente o que ele necessita. Outro ponto sobre GraphQL, e esse é relacionado à documentação, é que clientes possuem mais autonomia ao usar a sua API. Além de poderem usá-la para seus requerimentos de dados específicos, clientes podem consultar o schema da API sem ter de ir em um site de documentação que pode estar desatualizado. Um schema é a representação de uma API GraphQL, então não há schema desatualizado. Um bom exemplo disso é o [GitHub API v4 explorer](https://developer.github.com/v4/explorer/), que utiliza GraphiQL. [GraphiQL](https://github.com/graphql/graphiql) e [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) são projetos open source que podem ser usados ao invés de um site de documentação e são normalmente inclusos em implementações GraphQL.

### O exemplo
Com relação ao exemplo do user, vamos ver como isso seria com GraphQL. O schema da API é o seguinte:

```graphql
# Models
type User {
  id: ID!
  name: String!
  picture: String!
  """
  RFC 3339 date
  """
  birth: String!
  address: String!
  friends: [User!]!
}

# Pagination
type UserPage {
  last: String
  users: [User!]!
}

# Sorting
enum OrderDirection {
  ASC
  DESC
}

enum UserSortField {
  BIRTH
  NAME
}

input UserSort {
  field: UserSortField!
  direction: OrderDirection!
}

# Adding
input AddUserInput {
  name: String!
  picture: String!
  """
  RFC 3339 date
  """
  birth: String!
  address: String!
}

type AddUserPayload {
  user: User!
}

# Updating
input UpdateUserInput {
  id: ID!
  name: String!
  picture: String!
  """
  RFC 3339 date
  """
  birth: String!
  address: String!
}

input UpdateUserPayload {
  user: User!
}

# Removing
type RemoveUserInput {
  ID: ID!
}

type RemoveUserPayload {
  ID: ID!
}

type Query {
  user(id: ID!): User
  users(sort: UserSort!, limit: Int!, after: String): UserPage!
}

type Mutation {
  addUser(input: AddUserInput!): AddUserPayload!
  updateUser(input: UpdateUserInput!): UpdateUserPayload!
  removeUser(input: RemoveUserInput!): RemoveUserPayload!
}
```

Esse schema segue vagamente a [Relay framework's GraphQL Server Specification](https://relay.dev/docs/en/graphql-server-specification), uma especificação que é opinativa sobre coisas que a [GraphQL specification](http://spec.graphql.org/) não é. Relay, um framework JavaScript para apps React que utilizam GraphQL, requer algumas coisas do servidor GraphQL com relação à identificação de objetos para fetching, paginação e mutations. O schema acima não seguiu a especificação ao pé da letra, mas coisas como mutations recebendo `<mutationName>Input` e retornando `<mutationName>Output` são padrões que eu gosto de seguir. Construir uma API que é compatível ao Relay não é mandatório, mas, se você escolher fazer isso, saiba que Relay não é o único cliente que entende uma API desse tipo, então você pode usar a especificação mais como uma maneira de fazer paginação e mutations seguirem um padrão já especificado. Falando sobre Relay, é válido mencionar outra opção para React apps que usam GraphQL: [Apollo Client](https://www.apollographql.com/docs/react/).

#### Apollo Client
No exemplo REST, o fato que o cliente precisava de 11 requisições para obter os dados necessário não era algo muito promissor. Como foi dito, uma API GraphQL permite ao cliente pedir por exatamente os dados que ele precisa em apenas uma requisição. Você pode fazer essa requisição "sozinho" ou você pode usar um cliente GraphQL no seu app. Eu usei Apollo Client recentemente em um app React e fiquei bastante impressionado com como todo o processo de data fetching e caching foi simplificado. A combinação da natureza declarativa do React com a linguagem declarativa do GraphQL é algo muito poderoso.

Apollo Client é usado como uma single source of truth para dados remotos e locais no seu app, permitindo estados locais serem obtidos usando GraphQL. Ele utiliza os tipos especificados no schema da API e um identificador de objetos para caching, permitindo uma mutation ser feita por um componente e, se essa mutation retornar o ID e os campos atualizados do objeto, Apollo Client pode usar esses dados para atualizar a sua própria store. A store faz com que os componentes que possuem requerimentos de dados de um objeto com mesmo tipo e ID sejam atualizados sem precisar falar com a API novamente.

Um componente React que utiliza Apollo Client para obter o nome do usuário e o nome de seus amigos é algo assim:

```jsx
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

interface Props {
  userID: number;
}

const GET_USER_INFO = gql`
  query getUserInfo($id: ID!) {
    user(id: $id) {
      id
      name
      friends {
        name
      }
    }
  }
`;

interface GetUserInfoRes {
  user: {
    id: number;
    name: string;
    friends: { name: string }[]
  }
}

export default function User({ userID }: Props) {
  const { data, error, loading } = useQuery<GetUserInfoRes>(
    GET_USER_INFO,
    {
      variables: {
        id: userID,
      },
    }
  )

  if (loading) {
    return (
      <div>Loading</div>
    );
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      Name: {data!.user.name}
      <h3>Friends</h3>
      <ul>
        {data!.user.friends.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### GraphQL e microsserviços
Deixando o exemplo do user de lado, vamos agora focar em GraphQL e a arquitetura de microsserviços, que é indubitavelmente importante para muitos projetos. Essa arquitetura dá mais autonomia aos times, já que agora eles podem escolher a melhor stack para o problema ao invés de terem que usar a mesma usada por outros times. Além de um serviço poliglota, essa arquitetura também melhora os ciclos de deployment e testing, especialmente quando você considera que um monolith iria requerer parar todas as partes do sistema ao fazer deploy. A arquitetura de microsserviços também apresenta desafios: como lidar com transações que necessitam de múltiplos microsserviços, comunicação entre microsserviços etc. Não é o objetivo desse post falar sobre os prós e contras dessa arquitetura, então nós iremos falar sobre essa arquitetura exposta por uma API GraphQL.

GraphQL é tão útil para clientes porque eles não precisam mais pensar qual a URL para obter dados específicos. Está tudo na mesma URL e você pode pedir pelo que quiser. Isso funciona perfeitamente com um monolith porque tudo já está no mesmo lugar. Ao usar microsserviços, entretanto, você tem que achar uma maneira de expor um único graph e, dado uma query/mutation, decidir quais microsserviços usar. Se você já tem uma API REST baseada em microsserviços e quer prover uma API GraphQL aos seus usuários, talvez a melhor maneira seja criar um microsserviço que irá expor uma API GraphQL, servindo como um gateway para os clientes. Esse gateway terá um schema que combina as operações disponíveis em todos os microsserviços que o cliente pode usar. Então, os resolvers irão conversar com os microsserviços adequadamente. Um contra dessa abordagem é que, se você adicionar/remover um campo na API de algum microsserviço, você precisará atualizar o gateway. É como o problema de documentação falado acima, mas talvez também seja a sua melhor solução se você precisa de uma API GraphQL e não pode reescrever os seus microsserviços.

> **Nota:** resolvers são funções mapeadas para campos no schema. Uma função resolver é chamada se o seu campo estiver na query do cliente. De maneira análoga, eles são os handlers de uma API REST.

#### Apollo Federation
Por outro lado, se você está começando o seu projeto do zero e planeja usar microsserviços e GraphQL, você pode usar [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/). Com Apollo Federation, cada microsserviço expõe seu próprio graph, e um gateway combina todos eles em um único graph que é exposto aos clientes. Além disso, microsserviços podem estender tipos que foram definidos em outro graph. Para fazer tudo isso funcionar, APIs GraphQL que serão usadas como part do graph final devem seguir a [Apollo Federation specification](https://www.apollographql.com/docs/apollo-server/federation/federation-spec/). Aqui tem um exemplo de dois graphs que seguem essa especificação:

Serviço author:
```graphql
type Author @key(fields: "id") {
  id: ID!
  name: String!
  website: String!
  address: String!
}

extend type Query {
  author(id: ID!): Author
}
```

Serviço book:
```graphql
type Book @key(fields: "id") {
  id: ID!
  title: String!
  author: Author!
}

extend type Author @key(fields: "id") {
  id: ID! @external
  books: [Book!]!
}

extend type Query {
  book(id: ID!): Book
}
```

A diretiva `@key` é usada para especificar o identificador de um tipo e é o que faz de um tipo uma entidade. Entidades são os tipos que podem ser estendidos, e eles são estendidos utilizando a keyword `extend`. Ao extender um tipo, o serviço precisa criar um stub dele contendo os dados que o serviço necessita. Por exemplo, no serviço book, a entidade `Author` é estendida com um campo `books`, fazendo com o tipo `Author` tenha apenas dois campos nesse serviço. Para explicar melhor como queries que utilizam mais de um serviço funcionam em Apollo Federation, considere a seguinte query como um exemplo:

```graphql
query {
  book(id: "20") {
    title
    author {
      id
      name
    }
  }
}
```

Primeiro, o gateway descobre qual serviço especifica o campo `book` no tipo `Query`. Então, ele pede ao serviço book pelos campos `book.title` e `book.author.id`. Agora, tendo o `author.id`, o gateway pede pelo `author.name` ao serviço author. Por último, o gateway usa os dados retornados por ambos serviços para fazer a resposta da query e então enviá-la ao cliente.

Como dito, uma API GraphQL tem de seguir uma especificação para ser parte do graph final. Mais do que isso, você também precisa do gateway que combina todos os graphs. Para isso, Apollo Federation tem implementações em JavaScript para tanto [a API](https://www.npmjs.com/package/@apollo/federation) quanto [o gateway](https://www.npmjs.com/package/@apollo/gateway). Por ora, até onde eu sei, só há a implementação do gateway em JavaScript. Com relação à API, [há implementações third-party](https://www.apollographql.com/docs/apollo-server/federation/other-servers/), incluindo uma em Go que eu irei falar sobre em seguida, mas antes vamos focar no gateway.

##### O gateway
```typescript
import { ApolloServer } from "apollo-server";
import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: "author",
      url: "http://author/query"
    },
    {
      name: "book",
      url: "http://book/query"
    },
  ],
});

const server = new ApolloServer({ gateway });

server.listen(8080);
```

Esse é o código de um gateway que se conecta aos serviços author e book criados acima. Um problema que eu tive com esse package é que, se qualquer um dos serviços especificados não estiver rodando, o servidor ainda sim irá iniciar. Isso é problemático porque você não pode se basear somente no serviço do gateway retornando um exit code diferente de zero quando algo não funciona. Uma solução para isso é usar o `setInterval` do JavaScript para tentar conectar aos serviços especificados e apenas iniciar o servidor do gateway quando todos estiverem rodando. Além disso, combinar todos os graphs em apenas um serviço é algo que acontece somente antes do servidor iniciar. Não há polling para mudanças de schema. Isso também é um problema porque, sempre que o deploy de um microsserviço com mudanças no seu graph é feito, o servidor do gateway precisa ser reiniciado. Ambos problemas possuem [uma issue no GitHub](https://github.com/apollographql/apollo-server/issues/3540) caso você queira acompanhá-los.

##### Serviço em Go
Eu usei o [package gqlgen](https://github.com/99designs/gqlgen) ao desenvolver um serviço para ser usado com Apollo Federation. Esse package é schema-first e generate-based, que significa que você escrever o schema do seu serviço em um arquivo GraphQL e usa esse schema para gerar as assinaturas dos resolvers, os models e o código do servidor. Você também pode prover um ou mais models, pode criar seus próprios scalar types, pode fazer com que alguns campos de um model tenham um resolver explícito etc. Minha experiência com ele foi muito boa e provavelmente usarei esse package novamente no meu próximo projeto Go+GraphQL.

## Conclusão
Bem, esses foram alguns pensamentos sobre um projeto recente.
