---
title: GraphQL with more than one graph
excerpt: A few things about my recent GraphQL project.
---
I'm a huge fan of GraphQL. I've been wanting to write a post about it for a year now, but never got the chance. Recently, I developed a React app using Apollo Client backed by a federated GraphQL API. So I thought now is as good time as any. Before talking about these things, I want to talk a little about REST APIs, showing the points about it that normally make someone shift to GraphQL.

## RESTful
A lot of APIs these days are RESTful, or something close to that. As it turns out, designing a RESTful API is not always straightforward. When we're talking about a lot of resources and the relationships among them, some REST ideas present considerable challenges.

Consider the following model:
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

In REST, `User` is a resource and have two endpoints:

* `/users`
* `/users/{userID}`

One problem with this model is the `friends` field returning `User` objects. This is a problem because some clients may not need the friends data at all, but they'd have to wait for this data nevertheless (overfetching). If the friends data is put in another endpoint, e.g. `/users/{userID}/friends`, the clients that do need the friends data would have to make more requests (underfetching). Yes, this is a problem whose solution is finding a balance between two other problems. You shouldn't create endpoints for every possible combination of fields that clients may need, as well as you shouldn't return all the data in a single endpoint.

### The example
To make things more interesting, let's suppose that users in this API can't have more than 10 friends. Because of this constraint, the `friends` field will be an object in the form `{id, link`}. Also, the `/users/{userID}/friends` endpoint doesn't exist here. That way, if the client wants to know more about the user's friends, it will make a request for each friend. Even if this example may seem like that, it's not so far-fetched.

Consider a web app that needs the name of the user with id 12 and the name of each of their friends. First, a request to `/users/12` is made, then the app traverses the `friends` list, making a request for each item. If the user 12 has 10 friends, there would be 11 requests. The default approach, in this case, would be to fire the last 10 requests at basically the same time, considering that the list is very small.

#### HTTP/1.x
If HTTP/1.x is used for these requests, 10 requests fired at the same time in the JavaScript code don't mean that the browser actually fire them at the same time. First, browsers set a limit of around 6 in the number of parallel connections to the same host, so there aren't going to have 10 parallel TCP connections. Also, new connections imply a penalty in latency with more TCP handshakes and, likely, TLS handshakes. Second, there's head of line (HOL) blocking in HTTP/1.1, which means that, in the last 10 requests, the 7th will need to wait until the response of one of the first 6 is received before it is fired by the browser.

#### HTTP/2
If HTTP/2 is used for these requests, things are considerably better. Because of HTTP/2 multiplexing, a single connection can be used for all 11 requests. Besides, because of HTTP/2 streams, the HOL blocking problem present in HTTP/1.x no longer occurs, meaning the browser doesn't have to wait for the response of the request to fire the next in the same connection. HTTP/2 is widely supported already and if you can, and you probably can, use it in your API. This will make a significant difference.

> **Note:** HTTP/2 also has a problem of head of line blocking, but it's in the TCP level and it's [one of the focus of HTTP/3](https://http3-explained.haxx.se/en/why-quic/why-tcphol).

### Documentation and format

REST APIs generally specify the response's format as JSON, but the structure of the data in the response's body is also very important. Bear in mind that the structure is what allows the clients of the API understand what the returned data actually means. This makes API documentation a very important thing. For that, you can use a specification, such as [OpenAPI](https://www.openapis.org), and create a documentation from it. An OpenAPI specification can be written in JSON or YAML and is widely recognized as a way to specify what an API can do. Whether OpenAPI is used or not, the documentation has to be up to date, otherwise it can bring more harm than good.

There are also some options that turn the returned JSON into something more meaningful. JSON-LD is a good example of that. JSON-LD, LD standing for Linked Data, has been around for some years now and has received a lot of adoption for SEO. JSON-LD works around the idea that every communication has a context. For instance, a `birth` field in API A can refer to a year, while the same field in API B can refer to an RFC 3339 date. Because of that, a context can be provided in both API's responses, each pointing `year` to a different [IRI](https://www.w3.org/2018/jsonld-cg-reports/json-ld/#iris). The goal of Linked Data, and therefore also of JSON-LD, is make the data on the web machine-readable and linked ([there's a talk about it from the person who coined the term](https://www.ted.com/talks/tim_berners_lee_the_next_web)). Also, in the user resource, the `friends` field was a list of links in an `{id, link}` object, but it could instead use JSON-LD to represent these links. If you use JSON-LD in your API, you could make your data even more useful to your clients, since it would be structured in a standard way. You could also provide JSON-LD-structured data only to clients that want it, such as through an `Accept` header or query parameter.

## GraphQL

As [graphql.org](https://graphql.org/) says:

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

If you compare these statements to the problems stated above, you'll notice that underfetching and overfetching no longer exist, i.e. a client can ask for exactly what they need. Another point of GraphQL, and this goes along the lines of documentation, is that clients have more autonomy when using your API. Besides being able to use it for their specific data needs, clients can consult the API schema without having to go through a documentation website that could be outdated. A schema is the very representation of a GraphQL API, so there's no outdated schema. A good example of that is the [GitHub API v4 explorer](https://developer.github.com/v4/explorer/), which uses GraphiQL. [GraphiQL](https://github.com/graphql/graphiql) and [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) are open source projects that can be used instead of a documentation website and are normally included in GraphQL implementations.

### The example
In regards to the user example, let's see how that would like with GraphQL. The API schema is as follows:

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

This schema loosely follow the [Relay framework's GraphQL Server Specification](https://relay.dev/docs/en/graphql-server-specification), a specification that is opinionated about things that the [GraphQL specification](http://spec.graphql.org/) isn't. Relay, a JavaScript framework for React apps that use GraphQL, requires some things from the GraphQL server regarding identification of objects for fetching, pagination and mutations. The schema above didn't follow the specification to the letter, but things such as mutations receiving `<mutationName>Input` and returning `<mutationName>Output` are patterns that I like to follow. Building a Relay-compliant API is not mandatory, but if you choose do so, know that Relay is not the only client that understands it, so you can use the specification more as a way to make pagination and mutations follow an already-specified standard. Speaking of Relay, it's worth mentioning another option when it comes to developing React apps backed by a GraphQL API: [Apollo Client](https://www.apollographql.com/docs/react/).

#### Apollo Client
In the REST example, the fact that the client needed 11 requests to get the necessary data was not so promising. As said, a GraphQL API allows the client to ask for exactly the data that they need in a single request. You could make this request "by yourself" or you could use a GraphQL client in your app. I recently used Apollo Client in a React app and was really impressed by how the whole process of data fetching and caching was simplified. The combination of React's declarative nature with GraphQL's declarative language for specifying data is really powerful.

Apollo Client is used as the single source of truth for remote and local data in your application, meaning local state can also be queried using GraphQL. It uses the types specified in the API schema and an object identifier for caching, which allows a mutation to be fired from a component and, if this mutation returns the ID and the updated fields of the object, Apollo Client can use this data to update its own store. The store allows components that have data requirements of an object of the same type and ID to be updated with no need to talking to the API again.

A React component using Apollo Client to get the name of the user and the name of each of their friends is something like this:

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

### GraphQL and microservices
Putting the user example aside, let's now focus on GraphQL and the microservices architecture, which is undoubtedly important for a lot of projects. This architecture gives teams more autonomy, since they are now able to choose the best stack for the problem instead of having to stick to the same stack used by other teams. A polyglot service is not the only selling point of microservices, though. Easier testing and deployment cycles are also very important, specially when you consider that a monolith would require bringing every part of the system down when deploying. The microservices architecture also presents challenges: how to handle a transaction that spans multiple services, inter-service communication etc. It's not the subject of this post talking about the challenges and pros of this architecture, so we'll now shift to this architecture exposed by a GraphQL API.

GraphQL is so useful to clients because they don't have to reason about what is the URL to get a specific piece of data. It's all in the same URL and you can ask for what you want. This works perfectly well with a monolith because everything is in the same place already. When using microservices, however, you have to find a way to expose a single graph and, given a query/mutation, decide what microservices to use to perform it. If you already have a microservices-based REST API and want to provide a GraphQL API to your users, perhaps the best way is to create a microservice that will expose a GraphQL API, serving as a gateway to clients. This gateway will have a schema combining the available operations in all microservices that the client can use. Then, the resolvers will talk to each microservice accordingly. One downside of this approach is that, if you add/remove a field in some microservice's API, you'll need to also update the gateway. It's like the documentation problem stated above, but may also be your best solution if you need a GraphQL API and can't afford to rewrite your microservices.

> **Note**: resolvers are functions mapped to fields in the schema. A resolver function is called if its field is in the client-provided query. Analogously, they are the handlers in a REST API.

#### Apollo Federation
On the other hand, if you're starting your project from scratch and plan to use microservices and GraphQL, you can use [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/). In Apollo Federation, each microservice exposes its own graph, and a gateway service combines all of them into a single graph that is exposed to clients. Besides, microservices are allowed to extend types that were defined in another graph. To make all of this work, GraphQL APIs that are to be used as part of the federated graph have to follow the [Apollo Federation specification](https://www.apollographql.com/docs/apollo-server/federation/federation-spec/). Here's an example of two graphs that follow the specification:

Author service:
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

Book service:
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

The `@key` directive is used to specify the identifier of a type and it's what makes a type an entity. Entities are the types that can be extended, and they are so by using the `extend` keyword. When extending a type, a service needs to create a stub of it containing the data that the service needs. For instance, in the book service, the `Author` entity is extended with a `books` field, making the `Author` type have only two fields in this service. To better explain how inter-service queries work in Apollo Federation, take the following query as an example:

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

First, the gateway finds the service that specifies the `book` field in the `Query` type. Then, it asks the book's title and the book's author's id to the book service. Now, having the author's id, the gateway can ask the author's name to the author service. Lastly, the gateway uses the data returned from both services to make the query's response and then send it to the client.

As said, a GraphQL API has to follow a specification to be a part of the federated graph. Besides that, you also need a gateway that can combine all the graphs. For that, Apollo Federation has official implementations in JavaScript for both [the API](https://www.npmjs.com/package/@apollo/federation) and [the gateway](https://www.npmjs.com/package/@apollo/gateway). For now, as far as I know, there's only a gateway implementation in JavaScript. For the API, [there are third-party implementations](https://www.apollographql.com/docs/apollo-server/federation/other-servers/), including one written in Go that I'll talk about below, but first let's focus on the gateway.

##### The gateway
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

This is the code for a gateway that connects to the author and book services created above. One issue that I had with this package is that, if any of the specified services is down, the server will still bind to the port. This is problematic because you can't solely rely on the gateway service returning a non-zero exit code when something doesn't work. One workaround is using JavaScript's `setInterval` to keep trying to reach the specified services and only bind to the port when all of them are up and running. Also, combining all graphs into a single one is something that happens only before the server starts. There's no polling for schema changes. This is also a problem because, anytime a microservice with graph changes is redeployed, the federation server needs to be restarted. Both of these problems have [a GitHub issue](https://github.com/apollographql/apollo-server/issues/3540) if you want to keep track of them.

##### Service in Go
I used the [gqlgen package](https://github.com/99designs/gqlgen) when building a service to be used in a federated graph in Go. This package is schema-first and generate-based, which means that you write your service's schema in a GraphQL file and use this schema to generate the signatures of the resolvers, the models and the server code. You can also choose to provide one or more models, can create your own scalar types, can make some fields of a model have explicit resolvers etc. My experience with it was really good and will probably use it again in my next Go+GraphQL project.

## Conclusion
Well, these were a few thoughts about a recent project.
