---
title: ANSI escape codes
excerpt: Exibindo strings personalizadas no seu terminal.
---
Você já imaginou como algumas CLIs exibem um texto personalizado no seu terminal? Com personalizado eu quero dizer: itálico, negrito, com cor de texto e/ou cor de de fundo diferentes das padrões etc. O segredo, digamos assim, é algo chamado ANSI escape codes.

## O que eles são
Basicamente, ANSI escape codes são sequências de caracteres que começam com `ESC` e são interpretadas como comandos ao invés de somente caracteres. Elas foram criadas porque, quando terminais de verdade eram usados, havia a necessidade de padronizar a maneira como fabricantes poderiam exibir caracteres ao usuário usando esses dispositivos. Havia essa necessidade porque as fabricantes estavam criando suas próprias versões de escape codes para serem usadas em seus próprios dispositivos. Isso, [assim como o que aconteceu com character encodings antes do Unicode](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/), criou problemas de compatibilidade.

Hoje em dia, algumas décadas depois, terminais não são mais usados, mas ANSI escape codes ainda estão por aí. Dessa vez, sendo usados em nossos emuladores de terminal (terminal emulators). Só para esclarecer as coisas, apesar de não significarem exatamente a mesma coisa, eu uso terminal e emulador de terminal de maneira intercambiável nesse post.

## Atributos
Quando se trata de ANSI escape codes, atributos são definidos através de códigos. Uma sequência de atributos é definida entre `ESC[` e `m`, separando-os com um `;`. Por exemplo, uma string sublinhada com uma cor de fundo verde (4 bits) seria

```bash
echo -e "\x1b[4;42mTexto"
```

Note que a string começa com `\x1b[`, que é `ESC[`, porém com o caractere `ESC` em sua representação ASCII hexadecimal, já que ele não faz parte da categoria de caracteres que podem ser exibidos (printable characters). `1` é o código para o atributo itálico, enquanto `42` é o código para atributo que define uma cor de fundo verde. O `m` antes de `Texto` indica o fim da sequência de atributos, fazendo com que `Texto` seja a parte que é de fato exibida ao usuário com ambos atributos aplicados.

### Cores
Com relação às cores, há três grupos: cores 4 bits, cores 8 bits e cores 24 bits.

#### Cores 4 bits
Cores 4 bits são compostas por vermelho, verde, azul, preto, branco, ciano, magenta, amarelo e uma versão brighter para cada uma dessas cores. Dessa maneira, há 16 cores para serem usadas como cor de texto e/ou cor de fundo.

Os intervalos 30-37 e 90-97 compreendem as cores de texto, enquanto os intervalos 40-47 e 100-107 compreendem as cores de fundo.

Vamos imaginar que nós estamos construindo uma CLI que servirá como uma ferramenta para testes. Nessa CLI, nós queremos que testes que não passaram sejam representandos com uma string de cor de texto branca e cor de fundo vermelha. Para fazer isso, nós usaríamos algo como

```bash
echo -e "\x1b[37;41mFAIL"
```

#### Cores 8 bits
16 cores são legais, mas e 256? Nesse segundo grupo, há 4 intervalos de cores. O primeiro, 0-7, é o mesmo que o intervalo 30-37 das cores 4 bits, enquanto o segundo, 8-15, é o mesmo que o intervalo 90-97. Os dois últimos intervalos são 16-231, que representa as novas cores com relação às cores 4 bits, e 232-255, que é uma escala de preto para branco.

Ao contrário do grupo anterior, o código da cor não muda dependendo de onde ela é usada (cor de texto ou cor de fundo). Se é uma cor de texto, a sequência começa com `38;5`. Se é uma cor de fundo, a sequência começa com `48;5`.

Uma cor de texto cinza seria representada da seguinte maneira:

```bash
echo -e "\x1b[38;5;240mTexto"
```

#### Cores 24 bits
Com cores 24 bits nós aumentamos o número de cores possíveis em alguns bits. Nesse grupo, há mais de 16 milhões de cores possíveis. Esse grupo, chamado de true color, é como as cores usadas em HTML e CSS em que nós podemos representar vermelho, verde e azul com dois dígitos hexadecimais (1 byte) cada.

A sintaxe de uma cor 24 bits é

```bash
echo -e "\x1b[38;2;VERMELHO;VERDE;AZULm" # Cor de texto
echo -e "\x1b[48;2;VERMELHO;VERDE;AZULm" # Cor de fundo
```

Assim como a função `rgb()` em CSS, `VERMELHO`, `VERDE` e `AZUL` são números no intervalo 0-255.

Caso queira ver quantas cores o seu terminal suporta, tem essa [pergunta no Stack Exchange](https://unix.stackexchange.com/q/23763) e [esse gist](https://gist.github.com/XVilka/8346728) que podem ajudar.

### Outros atributos
Não há apenas cores nos atributos usados em ANSI escape codes. Como eu disse no começo, há como fazer outras coisas como deixar uma string em negrito ou itálico.

```bash
echo -e "\x1b[1mText" # Negrito
echo -e "\x1b[3mText" # Itálico
echo -e "\x1b[4mText" # Sublinhado
echo -e "\x1b[9mText" # Tachado
```

### Combinando-os
Nenhum dos atributos mencionados acima é exclusivo. Sim, isso significa que há como deixar, por exemplo, uma string com uma cor de texto amarela e cor de fundo azul em negrito e itálico, sublinhá-la e tachá-la.

```bash
echo -e "\x1b[1;3;4;9;33;44mTexto"
```

### Redefinindo tudo
E se nós quisermos exibir outra string na mesma linha que o texto personalizado acima, mas sem atributos? Nós poderíamos usar o atributo de código `0`, que é usado para redefinir todos os atributos. Então, ficaria algo assim

```bash
echo -e "\x1b[1;3;4;9;33;44mTexto\x1b[0mOutroTexto"
```

Enquanto todos os atributos especificados seriam aplicados em `Texto`, `OutroTexto` teria os atributos padrões do seu terminal.

## customo
customo é um package que eu escrevi em go para ajudar na criação de strings personalizadas usando ANSI escape codes. [O projeto está disponível no GitHub](https://github.com/efreitasn/customo) e suporta todos atributos mencionados nesse post. Ele também coloca um `\x1b[0m` no fim da string personalizada automaticamente, evitando um *vazamento de atributos*. Por exemplo,

```go
package main

import (
	"fmt"

	"github.com/efreitasn/customo"
)

func main() {
	str := customo.Format(
		"Texto",
		customo.AttrBold,
		customo.AttrUnderline,
		customo.AttrFgColor24Bits(255, 255, 255),
		customo.AttrBgColor24Bits(0, 0, 255),
	)

	fmt.Println(str)
}
```

é equivalente a

```bash
echo -e "\x1b[1;4;38;2;255;255;255;48;2;0;0;255mTexto\x1b[0m"
```

que é uma string em negrito com uma cor de texto branca 24 bits e uma cor de fundo azul 24 bits.

## Conclusão
Eu deixei alguns códigos de fora. Por exemplo, eu nem mencionei os códigos relacionados à posição do cursor ou coloquei uma tabela mostrando todas as possíveis combinações de cores. Se está procurando por uma tabela como essa ou pela lista completa de códigos, você pode dar uma olhada [nessa página da Wikipédia](https://en.wikipedia.org/wiki/ANSI_escape_code).