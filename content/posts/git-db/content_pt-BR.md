---
title: Git e um BD
excerpt: Usando comandos plumbing do Git para criar um BD.
---
Vamos imaginar que nós precisamos de um banco de dados que nos permita fazer uma query pedindo por todas as versões de um registro desde que ele foi criado. Por exemplo, nós temos um aplicativo de notas e queremos disponibilizar aos nossos usuários um histórico de alterações. Isso poderia ser solucionado por meio de uma tabela histórico que contenha todas as versões anteriores de um registro ou usando um SGBD que já forneça essa funcionalidade, como [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/tables/temporal-tables?view=sql-server-ver15). Entretanto, e se Git fosse usado?

Pense nisso. Git possui refs (tabelas) que apontam para commits (operações do BD), que contêm blobs (registros) e informações acerca do commit anterior (histórico). Em outras palavras, dada uma tabela, nós podemos obter a versão mais recente de um registro e usá-la para obter as versões anteriores. É exatamente isso que nós precisamos e sobre o que nós falaremos nesse post.

Primeiro, vamos revisar algumas coisas sobre o Git.

## Object database e o index
Como dito no livro [Pro Git](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain), Git é um content-addressable filesystem. Então, nós podemos armazenar um arquivo e nos referir a ele pela hash do seu conteúdo. Git tem tipos de objetos, e o tipo referente a um arquivo se chama blob. Entretanto, não há como representar o projeto todo somente por blobs. Nós também precisamos de filenames e de uma maneira de representar diretórios, e é aí que o objeto tree é usado. Um node em uma tree contém um nome, filemode (similar, porém não igual ao do Unix) e a hash de um objeto, que pode ser tanto um blob quanto outra tree.

Em um Git workflow comum, o usuário não cria blobs e trees diretamente. Ao invés disso, o usuário cria um commit, que é outro tipo de objeto. Um commit contém a hash de uma tree, um autor, um committer, uma data para cada um deles, uma mensagem opcional e a(s) hash(s) de seu(s) commit(s) pai(s), se não for o commit root. É dessa maneira que o `git log` consegue nos mostrar um histórico de commits. O comando recebe uma revision range (e.g. uma ref, um commit, um intervalo de commits) e usa-a para começar um traverse na árvore de commits.

Então, se o usuário não cria blobs e trees diretamente, de onde vem a tree usado pelo próximo commit? A resposta para essa pergunta é outra estrutura de dados gerenciada pelo Git: o index. O index fica localizado em `.git/index` e contém uma representação da árvore usada pelo próximo commit. Quando `git commit` é chamado, uma tree é criada a partir do index, depois essa tree é usada para criar um commit. O formato do arquivo é especificado em [index-format.txt](https://github.com/git/git/blob/master/Documentation/technical/index-format.txt), e foge do escopo desse post discutir tal formato.

O último tipo de objeto é a tag. Tags em Git são usadas para se referir a um objeto por um nome diferente. Há dois tipos de tags: lightweight e annotated. A primeira é apenas uma ref apontando para um commit e não cria um objeto, enquanto a segunda é um objeto contendo quando a tag foi criada, quem a criou e uma mensagem. Uma tag annotated também cria uma ref do mesmo jeito que uma lightweight.

## Refs
Git possui uma object database cujos itens podem ser acessados a partir da hash de seu conteúdo, mas ainda há algo faltando. Como você pode saber a hash do último commit ou como o Git pode saber qual commit usar como pai do seu próximo commit? Para isso existem refs. Refs são arquivos que armazenam a hash de um commit ou o nome de outra ref (symbolic ref) e, com exceção de algumas, estão localizadas em `.git/refs`.

Há algumas refs especiais, incluindo:

* `refs/heads/*`: branches.
* `refs/remotes/*`: remote-tracking branches.
* `refs/tags/*`: refs de tags.
* `HEAD`: ref que ou aponta para uma branch, tornando-a a branch atual/ativa, ou para um commit, fazendo com que o repositório fique em [detached HEAD state](https://git-scm.com/docs/git-checkout#_detached_head).

## Repositórios bare
Até agora nós consideramos os arquivos do Git como arquivos localizados no diretório `.git`, e isso é o que geralmente acontece, mas nós também podemos criar um repositório em que o diretório `.git` e aquele em que a working tree está são os mesmos. A working tree é o estado atual do diretório do seu projeto, mas às vezes ela não é necessária. Às vezes você não precisa poder editar os arquivos e apenas quer usar o repositório como um remote. É para isso que um repositório bare serve.

Um repositório bare é criado ao rodar `git init --bare`, e você só pode interagir com ele ao usá-lo como remote ou ao usar comandos plumbing.

## Plumbing e porcelain
Você normalmente interage com um repositório por meio de comandos como `commit`, `branch`, `checkout` etc. Esses comandos são chamados de porcelain e abstraem algumas operações feitas pelo Git, a fim de torná-lo mais fácil de usar. O outro tipo de comandos é chamado plumbing, e cada um desses comandos é mais focado em realizar uma operação específica no filesystem. Por exemplo:

### Usando comandos porcelain
```bash
# Cria o arquivo
echo foo > bar

# Cria um objeto do conteúdo do arquivo bar.
# Adiciona o novo objeto ao index.
git add bar

# Cria uma tree do index atual.
# Cria um objeto commit da nova tree cujo pai é o commit apontado
# por HEAD após dereferencing, se houver um.
# Atualiza a branch apontada por HEAD para apontar para o novo commit.
git commit -m "Add bar"
```

> **Note**: Dereferencing é o processo de, a partir de uma referência, chegar em seu respectivo valor concreto. É a mesma ideia de, dado um ponteiro, chegar até o byte armazenado no endereço referenciado.

### Usando comandos plumbing
> **Nota**: Se você rodar os comandos abaixo, as hashes retornadas por `git commit-tree` não serão as mesmas. Lembre-se, a hash de um commit é baseada no seu conteúdo.

```bash
# Cria o arquivo
echo foo > bar

# Cria um objeto do conteúdo do arquivo bar.
git hash-object -w -- bar # 257cc5642cb1a054f08cc83f2d943e56fd3ebe99

# Adiciona o novo objeto ao index.
git update-index --add \
  --cacheinfo 100644,257cc5642cb1a054f08cc83f2d943e56fd3ebe99,bar

# Cria uma tree do index atual.
git write-tree # efbc17e61e746dad5c834bcb94869ba66b6264f9

# Cria um objeto commit da nova tree cujo pai é o commit apontado
# por HEAD após dereferencing, se houver um.
if [ "$(git show-ref --head -s HEAD)" ]; then
  git commit-tree efbc17e61e746dad5c834bcb94869ba66b6264f9 \
    -m "Add bar" \
    -p "$(git show-ref --head -s HEAD)"
  # ca541533f0062a19e4dfc21663c1c9d8eebba127
else
  git commit-tree efbc17e61e746dad5c834bcb94869ba66b6264f9 \
    -m "Add bar"
  # ca541533f0062a19e4dfc21663c1c9d8eebba127
fi

# Atualiza a branch apontada por HEAD para apontar para o novo commit.
git update-ref HEAD ca541533f0062a19e4dfc21663c1c9d8eebba127
```

> **Nota**: O `100644` passado ao `git commit-tree` é referente ao mode da index entry, como especificado em [index-format.txt](https://github.com/git/git/blob/master/Documentation/technical/index-format.txt#L38).

Eu acredito que essa revisão de alguns conceitos do Git é o suficiente para nós podermos começar com o BD. Note que há muito mais conceitos sobre o Git que esses apresentados acima, então dê uma olhada na [referência do Git](https://git-scm.com/docs) ou no livro [Pro Git](https://git-scm.com/book) se quiser saber mais.

## O DB
Vamos começar criando o próprio DB:

```shell
git init --bare
```

É um repositório bare porque não faz sentido haver duas versões dos dados. Nós precisamos somente da versão armazenada na object database. Falando nisso, vamos criar nosso primeiro registro:

```shell
echo '{"name": "Foo"}' | git hash-object -w --stdin
# 11a78487c8c5924f7d05f05ee223898fc6608cf4
```

Nós podemos usar o comando `cat-file` para checar se um registro foi salvo corretamente:

```shell
git cat-file -p 11a78487c8c5924f7d05f05ee223898fc6608cf4
# {"name": "Foo"}
```

O comando `cat-file` provê informações acerca dos objetos armazenados, como tipo, tamanho e conteúdo. A flag `-p` pede para que conteúdo do objeto seja mostrado baseando-se no seu tipo, e.g. mostrar uma lista de nós quando for uma tree ou mostrar o conteúdo raw quando for um blob.

Não vamos nos esquecer que nós armazenamos o conteúdo do registro, mas não o seu nome. Para isso nós precisamos de uma tree, e a maneira mais direta de fazer isso é criando uma a partir do index. Então, vamos adicionar o nosso novo objeto ao index:

```shell
git update-index --add \
  --cacheinfo 100644,11a78487c8c5924f7d05f05ee223898fc6608cf4,data
```

Foi brevemente falado anteriormente, mas vamos agora descobrir de onde vem o número `100644`, que é o mode da index entry. O mode de uma index entry é um número de 32 bits que começa com os seguintes bits:

* 4 bits para o tipo do objeto.
* 3 bits que não são usados.
* 9 bits para as permissões Unix (apenas `0000`, `0755` e `0644` são aceitos).

O número `100644` está em octal e é `1000000110100100` em binário. Isso significa:

* `1000`: tipo de objeto que representa um arquivo comum.
* `000`: três bits que não são usados.
* `110100100`: um arquivo que pode ser lido e escrito pelo owner e apenas lido pelo group e outros usuários (`0644` em octal).

Após adicionar o arquivo ao index, nós criamos uma tree a partir dele:

```shell
git write-tree
# f1db34daa05612f5e50f855715065cf26c929b19
```

Agora nós fazemos nosso primeiro commit. Nós não precisamos verificar a existência de um commit apontado por HEAD após dereferencing já que sabemos que esse é o primeiro commit. Se nós precisássemos, nós usaríamos a versão com um `if` apresentada quando estávamos falando sobre comandos plumbing.

```shell
echo -n | GIT_AUTHOR_NAME="Foo" \
  GIT_AUTHOR_EMAIL="foo@bar.com" \
  GIT_AUTHOR_DATE="2020-06-16T13:00:00Z" \
  GIT_COMMITTER_NAME="Foo" \
  GIT_COMMITTER_EMAIL="foo@bar.com" \
  GIT_COMMITTER_DATE="2020-06-16T13:00:00Z" \
  git commit-tree f1db34daa05612f5e50f855715065cf26c929b19
# 383f6fb5445bd2dd84b5c2b52d80565b8973d111
```

Dessa vez utilizamos `commit-tree` com variáveis de ambiente. Tais variáveis são usadas para dizer ao `commit-tree` não usar os valores padrões ao construir o commit, fazendo com que a hash resultante seja a mesma independentemente de onde ou de quando o comando é executado. Ao invés de passar uma mensagem usando `-m`, nós passamos uma mensagem a partir da stdin ao fazer um pipe entre o output de `echo -n` e o input de `commit-tree`. Além disso, nós não estamos passando um argumento ao `echo` para que esse commit tenha uma mensagem vazia, e `-n` diz ao comando para não acrescentar um caractere `\n` ao output. Para ter certeza, vamos checar se o commit tem, de fato, uma mensagem vazia ao realizar um `hexdump` do arquivo do commit:

```shell
pigz -c -z -d objects/38/3f6fb5445bd2dd84b5c2b52d80565b8973d111 | hexdump -C

# 00000000  63 6f 6d 6d 69 74 20 31  33 34 00 74 72 65 65 20  |commit 134.tree |
# 00000010  66 31 64 62 33 34 64 61  61 30 35 36 31 32 66 35  |f1db34daa05612f5|
# 00000020  65 35 30 66 38 35 35 37  31 35 30 36 35 63 66 32  |e50f855715065cf2|
# 00000030  36 63 39 32 39 62 31 39  0a 61 75 74 68 6f 72 20  |6c929b19.author |
# 00000040  46 6f 6f 20 3c 66 6f 6f  40 62 61 72 2e 63 6f 6d  |Foo <foo@bar.com|
# 00000050  3e 20 31 35 39 32 33 31  32 34 30 30 20 2b 30 30  |> 1592312400 +00|
# 00000060  30 30 0a 63 6f 6d 6d 69  74 74 65 72 20 46 6f 6f  |00.committer Foo|
# 00000070  20 3c 66 6f 6f 40 62 61  72 2e 63 6f 6d 3e 20 31  | <foo@bar.com> 1|
# 00000080  35 39 32 33 31 32 34 30  30 20 2b 30 30 30 30 0a  |592312400 +0000.|
# 00000090  0a                                                |.|
# 00000091
```

Qualquer arquivo de objeto em Git começa com um cabeçalho contendo o tipo do objeto (`commit`), um espaço, o tamanho do objeto em bytes (`134`) e um caractere `NUL` (o `.` após `134`). A concatenação do cabeçalho com o conteúdo do objeto é comprimida pelo zlib e é o que acaba sendo armazenado no arquivo e o porquê de haver um pipe entre `pigz` e `hexdump`. Após a data do committer, há dois caracteres `.` (ponto). Se você olhar para a tabela hex, você verá que ambos os pontos são referentes ao mesmo número hexadecimal, `0x0a`, que representa o caractere `\n` (new line, line feed). A mensagem do commit é colocada após esses dois line feeds e, como você pode ver, não há nada após eles no novo commit.

O último passo é criar a ref:

```shell
git update-ref refs/note1 383f6fb5445bd2dd84b5c2b52d80565b8973d111
```

E é isso o necessário para o DB. Se nós fôssemos criar uma nova versão de `note1`, nós faríamos os mesmos passos, mas também passaríamos um commit pai ao executar `commit-tree`.

## Sobre libgit2
Nesse post, não foi falado sobre como integrar o BD com o aplicativo de notas. Isso é porque nós não usaríamos comandos do Git para isso, mas sim uma implementação do Git, como [libgit2](https://libgit2.org/). Usar comandos seria algo muito propenso a erros por, dentre outras coisas, ter que fazer o parsing do retorno de um comando como `git log`. Eu iniciei um projeto que usa [git2go](https://github.com/libgit2/git2go), um Go package que fornece bindings para libgit2, e esse será o assunto do próximo post.