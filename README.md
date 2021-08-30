# <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" height="30"> It's a repository of ECMAScript (ES) 📜🔢
<img src="https://cdn.acodez.in/wp-content/uploads/2020/01/banner-2.jpg">

<hr>

# 📜 ECMAScript (ES) 📒
<div align="center"><img src="https://raw.githubusercontent.com/wingsuitist/ecmascript-logo/master/es-ecmascript-logo.png" height="177"/></div><br \>

<p>Outro nome muito conhecido entre os desenvolvedores é o <b>ECMAScript (ES)</b>, derivado dos anos de 1996 e 1997 quando a organização European Computer Manufactures Association (ECMA) padronizou a linguagem, surgindo assim às versões de ECMAScript.

Essa padronização define a estrutura da linguagem, seus comandos, como ela deve se comportar, etc. Baseando-se nessas especificações, os desenvolvedores dos navegadores sabem o que um interpretador de JavaScript deve ter e como deve responder aos comandos.
Baseando-se nessas especificações, outras linguagens também surgiram, como o JScript, ActionScript e TypeScript.</p>
<blockquote>👍 <b>Dica:</b> O nome JavaScript e ECMAScript definem a mesma linguagem, então podem ser usados livremente como sinônimos.</blockquote>

# ES6
<div align="center"><img src="https://devmaster.edu.vn/uploads/images/2019/10/devmaster-ES6-review.png" height="277"/></div><br \>

# ES7 
<div align="center"><img src="https://miro.medium.com/max/1838/1*JhDw7yiwv5YOJIncUhCXQg.png" height="277"/></div><br \>

# ES8
<div align="center"><img src="https://cdn-media-1.freecodecamp.org/images/k4f95BDjIaGWgQO0FeQoIBfur1su20MEMBNk" height="277"/></div><br \>

## 📜 A presença do JavaScript atualmente ⚛️
<div align="center"><img src="https://blog.vulpi.com.br/wp-content/uploads/2018/03/JavaScript.png" width="370"/>&nbsp;&nbsp;<img src="https://ionicframework.com/img/homepage/frameworks-1x.png" height="293"/></div>
<p>Hoje em dia, quando você visita uma página e vê elementos interagindo com você, seja uma modal aparecendo, uma janelinha abrindo, uma resposta ao clique do mouse, etc, pode ter certeza que há um código JavaScript sendo executado ali.
  
O JavaScript ainda era um pouco complicado de se usar antigamente. Então, no início dos anos 2000, várias bibliotecas com o intuito de facilitar o uso do JavaScript surgiram, como <b>jQuery</b> e <b>Prototype</b>.
  

## 📜 O que são dados? 🎲
<p>Tudo o que existe no mundo dos computadores são <b>dados</b>. Os dados podem ser criados, modificados e apagados.

Os dados são armazenados no que conhecemos como <b>bits</b>. Cada bit pode ter um valor 0 ou 1, que podemos imaginar como um interruptor que pode estar ligado ou desligado. Por ter 2 possíveis valores, chamamos isso de <b>sistema binário</b>.

Essa sequência de zeros e uns fazem o computador conseguir armazenar e interpretar valores. Esses valores serão usados para algum cálculo.

Sim, computadores são grandes e caras calculadoras. Tudo o que fazem são cálculos. Quando você está assistindo um vídeo ou escutando uma música, tudo está armazenado em vários zeros e uns, e para reproduzir isso em forma de imagens e sons, cálculos são feitos.

Mas se tudo é feito por 0 e 1, como outros valores são formados?

Bom, abaixo temos um exemplo simples.</p>

![image](https://user-images.githubusercontent.com/61624336/102372658-2f8bb600-3f9e-11eb-9593-e147e8367efe.png)

<p>Veja a linha de baixo, a qual tem valores 128, 64, 32, etc. Tudo é lido da direita para a esquerda. Lembra que Bits podem ter valor 1 ou 0? Então temos dois valores possíveis, o que nos faz ter um número de base 2.
  
Na computação, todas as contagens começam no 0, e não no 1.</p>
<ul>
  <li>2 elevado a 0 é igual a 1;</li>
  <li>2 elevado a 1 é igual a 2;</li>
  <li>2 elevado a 2 é igual a 4;</li>
  <li>etc...</li>
</ul>
<p>E com isso nós vamos obtendo os valores da linha de baixo, de 1 a 128.
  
Lembra que esses bits podem ter o valor 1 e 0 como se fosse um interruptor de liga e desliga? Repare então na linha de cima, onde temos apenas 0 e 1. Os 0 são o "desligado", e o 1, "ligado".

Então temos os valores 1, 4 e 8 ligados, certo? 1+4+8 = 13.

Isso significa que a sequência 00001101 equivale ao valor 13 em binário. É dessa maneira que dados são armazenados e interpretados pelas máquinas.

Mas isso é só uma curiosidade. Com JavaScript e outras linguagens modernas você não precisará se preocupar com o sistema binário.
As linguagens hoje em dia nos fornecem várias funcionalidades que, com um simples comando, fazem operações mais complexas.</p>

<blockquote><b>👍 Dica:</b> Curiosidade: 128+64+32+16+8+4+2+1 = 255. E se tivermos todos os campos "desligados", teremos o valor 0, o que nos dá um total de 256 possíveis valores. Você já deve ter visto esse número por aí no mundo da informática, não é mesmo? Como os antigos pendrives de 256MB, 512MB e 1024MB que é igual a 1GB.</blockquote>

<blockquote><b>👍 Dica:</b> Veja que nessa cadeia há 8 números. 1 Byte é igual a 8 bits. Então temos aí 8 bits, que resultam em 1 Byte.</blockquote>

<h2>📜 STDIN e STDOUT 🤸‍♂️</h2>
<p>Todas as entradas e saída dos algoritmos são utilizados o <strong>STDIN</strong> e <strong>STDOUT</strong> de cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e STDOUT de cada linguagem.
  
### JavaScript

Em JavaScript as funções de STDIN e STDOUT respectivamente são <code>gets()</code> e <code>console.log</code>, a função gets é implementada internamente para auxiliar a entrada dos dados.

#### Exemplo:
  
```javascript
let line = gets(); // Retorna a próxima linha de entrada
console.log(line); // Imprime o dado
```

### Java

Em Java existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <code>BufferedReader</code> para o STDIN e o <code>System.out.println</code> para o STDOUT.

#### Exemplo:
  
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
int a = Integer.parseInt(st.nextToken());
System.out.println(a); // Imprime o dado
```

### Python

Em Python existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar <code>sys.stdin.readline</code> para o STDIN e o <code>print</code> para o STDOUT.

#### Exemplo:
  
```python
import sys
a = int(sys.stdin.readline()) // Lê a linha de entrada
print(a); // Imprime o dado
```

## Estilizando a saída dos dados com %c
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107866199-d381c880-6e4c-11eb-99a5-5294cb232106.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/107866364-d978a900-6e4e-11eb-9f38-48fe97352ec1.jpg)

<hr>

<h1 align="center">Cap 03: 📜 Tipos Primitivos 🐵</h1>
<p>Como vimos anteriormente, os computadores armazenam e entendem dados na forma binária (0 e 1).
  
As linguagens de programação possuem vários tipos de dados diferente do binário, os quais facilitam com que a gente trabalhe com diferentes tipos de dados. Um exemplo bem simples são números e textos. São tipos de dados diferentes.

Com números podemos fazer cálculos, e com textos podemos guardar um texto e fazer uma pesquisa por uma palavra do seu interesse.
Os tipos mais simples que uma linguagem possui são chamados de <b>Tipos Primitivos</b>.

O <b>JavaScript</b> possui 6 tipos primitivos no momento, os quais veremos com mais detalhes depois. São eles:</p>
<ul>
  <li><b>Boolean</b> - possuem apenas dois valores: verdadeiro ou falso;</li>
  <li><b>Undefined</b> - indica que não foi definido um valor;</li>
  <li><b>Null</b> - indica que um valor é nulo;</li>
  <li><b>Number</b> - armazena valores numéricos;</li>
  <li><b>String</b> - armazena textos;</li>
  <li><b>Symbol</b> - armazena símbolos.</li>
</ul>
</p>

## ✔️ Boolean ❌
<p><b>Boolean</b> (também chamado em português como tipo Booleano ou a sigla "bool") é o tipo mais básico existente nas linguagens de programação.

Assim como os bits, eles também só armazenam 2 possíveis valores: <b>true</b> ou <b>false</b> (verdadeiro ou falso).

Esse tipo é muito importante, pois ele tem um valor lógico para que a gente faça o computador tomar decisões.</p>

## ❓ Undefined e Null 🕳️
<p>Há dois tipos especiais de valores, <b>undefined</b> e <b>null</b>. Eles indicam a ausência de valor.
  
Imagine que você tenha um formulário que pergunta a idade de uma pessoa, e ela não respondeu ainda. Não podemos dizer que a idade dessa pessoa é 0. O melhor seria indicar que um valor não foi dado, e nesse caso, usaríamos undefined ou null.

Há uma diferença bem pequena entre undefined e null. Na verdade a existência de ambos para definir um valor inexistente foi devido a um acidente no projeto do desenvolvimento do JavaScript. Em outras linguagens de programação, normalmente existe apenas o Null.

Resumidamente, <code>null</code> ainda é um valor e <code>undefined</code> é quando o JavaScript não sabe qual o tipo de dado.

## 🔢 Number 🔟
<p>O tipo number é usado para armazenar valores numéricos.
  
Podemos ter números inteiros (sem casas decimais) e números flutuantes (com casas decimais, a qual é indicada por um ponto). As linguagens de programação normalmente têm vários tipos de valores numéricos, mas <b>no JavaScript tudo é Number</b>.
<ul>
  <li>Número inteiro (int): 5</li>
<li>Número flutuante (float): 5.3157</li>
<li>Para números muito grandes, podemos usar a notação científica, adicionando um "e" seguido pelo expoente do número.
  2.998e8</li>
  <li>Isso é o mesmo que 2,998 x 10^8, que é igual a 299.800.000</li>
</ul>
</p>

## ♾️ Números Especiais ♾️
<p>Também temos três valores especiais no JavaScript que são considerados do tipo Number, mas não são números comuns.

Os dois primeiros são o <b>Infinity</b> e <b>-Infinity</b>, que indicam valores infinitos positivos e negativos.

O último é o <b>NaN</b> (not a number). Esse valor do tipo Number indica que um valor não é um número. Por exemplo, se você tentar multiplicar a letra "a" pelo número 5, o resultado não pode ser um número, então resultará em NaN.
</p>

## 🔠 Strings 🔣
<p>As Strings são usadas para representar textos. Sempre que quisermos um texto teremos que incluir aspas entre o texto, duplas ou simples.
<ul>
  <li>"Olá, sou uma string"</li>
  <li>'Eu também sou'</li>
</ul>
As aspas servem para definir onde um texto começa e onde ele termina. Em JavaScript, para manter um padrão de código, é recomendado usar as aspas simples.

Porém, se você precisar usar aspas simples em um texto, é mais fácil criar a String com aspas duplas, ou sua String será fechada:
<ul>
  <li><code>"Mc Donald's"</code> A aspa simples pôde ser usada normalmente dentro desta String;</li>
  <li><code>'Mc Donald's'</code> Após o "d", a aspa simples fechou a string, deixando o "s" e a outra aspa soltos. Isso irá resultar em um erro.</li>
</ul>
Hoje em dia também temos um novo tipo de string, que usa o acento grave (crase) ao invés de aspas. Mais para frente veremos melhor sobre como trabalhar com Strings e a importância desse novo tipo de String.
</br >
</p>
<p>Para descobrir o tamanho de uma string é usado a propriedade <b>length</b>:</p>

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102538561-30e6dc80-408b-11eb-8bae-1a59295efe0e.jpg)

## 👤 Escape de Caracteres 🔣
<p>Como as strings são descritas entre aspas, o JavaScript não entenderá a string de fora delas.</p>

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102540262-87edb100-408d-11eb-9018-ff3681325d89.jpg)

<p>A solução para resolver esse problema é com o uso de caractere de escape de barra invertida.

O caractere de escape de barra invertida “\” torna caracteres especiais em caracteres de string:</p>

### \’ aspas simples
[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102550356-78299900-409c-11eb-975c-9b1b491afdd8.jpg)

<h3>\" aspas duplas</h3>

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/102550361-79f35c80-409c-11eb-8b3d-b2864b43aa49.jpg)

<h3>\\ barras invertidas</h3>

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102549993-d6a24780-409b-11eb-9814-fffb47e86f0f.jpg)

<p>Outras seis sequências escapes são válidas em JavaScript:</p>
<table>
  <tr>
    <td>\b</td>
    <td>Retrocesso</td>
  </tr>
  <tr>
    <td>\f</td>
    <td>Formulário voluntário</td>
  </tr>
    <tr>
    <td>\n</td>
    <td>Nova linha</td>
  </tr>
    <tr>
    <td>\r</td>
    <td>Retorno de transporte</td>
  </tr>
    <tr>
    <td>\t</td>
    <td>Tabulador horizontal</td>
  </tr>
    <tr>
    <td>\v</td>
    <td>Tabulador vertical</td>
  </tr>
</table>

### 🔣 Symbols 🔣
<p>O <b>Symbol</b> é um novo tipo primitivo do JavaScript. Ele é um tipo de dado que é único e imutável. Podemos usá-los como identificadores de propriedades de objetos, que conheceremos melhor mais para frente.</p>

## ✔️ Valores verdadeiros e falsos ❌
<p>Outros valores no JavaScript possuem valores equivalentes ao true e false.
  
Um exemplo é o número 0. Ele representa tanto o número zero quanto o valor false. Isso significa que fazer uma comparação com ele seria o equivalente a fazer uma comparação com false.

Os seguintes valores são considerados falsos no JavaScript:</p>
<ul>
  <li>0;</li>
  <li>-0;</li>
  <li>null;</li>  
  <li>false;</li>
  <li>NaN;</li>
  <li>undefined;</li>
  <li>"" (string vazia).</li>
</ul>
<p>Qualquer outro valor é considerado true, até mesmo a String "false" e "0", pois não são Strings vazias.</p>

## 🐵 Informando o tipo do valor primitivo na operação 🔢
<hr>

<h1 align="center">Cap 04: 📜 O que são operadores? ➗</h1>
<p>Até agora só vimos valores soltos que não fazem nada.
Para fazermos alguma operação com esses valores, usamos os chamados "operadores".
  
Um exemplo bem simples:
7 + 10

O sinal "+" é um operador, o qual podemos usar para somar dois valores numéricos.

Há vários tipos de operadores para as mais diversas operações. Nos próximos capítulos nós veremos vários grupos com seus operadores mais comuns e suas respectivas funções.</p>

## Operadores Lógicos (&&,||)
<p>Chamamos de Operadores Lógicos aqueles que nos ajudam a trabalhar com o tipo Boolean (verdadeiro ou falso).

O "&&" indica uma condição "e", e o "||" indica uma condição "ou". Basicamente servem para juntar dois valores do tipo Boolean e ver se o resultado é algo verdadeiro ou falso.

Exemplo: Copo azul</p>

### Operador && (E)
<p>Se tivermos duas verdades, o resultado só pode ser verdadeiro, correto?
  
Se eu disser que esse objeto é um <code>copo E é azul</code>, são duas verdades, o que resulta em <b>true</b>.

E se tivermos duas mentiras, o resultado só pode ser <b>falso</b>.

Se eu disser que esse objeto é um <code>garfo E é vermelho</code>, são duas mentiras, o que resulta em <b>false</b>.

Agora, se eu disser algo falso e algo verdadeiro (ou verdadeiro e falso, não importa a ordem), isso fará com que minha frase seja <b>falsa</b>.

Se eu disser que é um <code>copo E é laranja</code>, uma simples parte falsa torna a frase inteira <b>falsa</b>.
</p>
<blockquote><b>👍 Dica:</b> Resumindo, o resultado do operador <b>&&</b> só será verdadeiro se tudo na operação também for verdadeira. Basta apenas um elemento ser falso que o resultado se tornará falso.</blockquote>

### Operador || (OU)
<p>Vamos usar o mesmo copo azul para explicar o operador OU. Se eu disser duas verdades, o resultado só pode ser verdadeiro.
  
Se eu disser que o objeto é um <code>copo OU é azul</code>, são duas verdades, o que resulta em <b>true</b>.

Se eu disser duas mentiras, o resultado só pode ser falso.

Se eu disser é um <code>garfo OU é vermelho</code>, são duas mentiras, o que resulta em <b>false</b>.

Agora aqui é diferente do &&. Em uma comparação ||, se houver uma verdade, o resultado será verdadeiro.

Se eu disser que o objeto é um <code>copo OU é verde</code> (a ordem não importa), eu não estou mentindo. O resultado aqui será <b>true</b>.</p>
<blockquote><b>👍 Dica:</b> Resumindo, o resultado do operador || só será falso se tudo na operação também for falso. Basta apenas um elemento ser verdadeiro que o resultado se tornará verdadeiro.</blockquote>

## Operadores Aritméticos (+, -, *, /, %, ++, --, **)
<p>Os Operadores Aritméticos são bem simples de se entender. Eles são usados com números para que possamos fazer cálculos.</p>
<ul>
  <li><b>+</b> (adição)</li>
  <li><b>-</b> (subtração)</li>
  <li><b>*</b> (multiplicação)</li>
  <li><b>/</b> (divisão)</li>
  <li><b>%</b> (módulo) = resto da divisão</li>
  <li><b>**</b> (potenciação)</li>
</ul>
<p>Também temos os operadores de incremento <b>(++)</b> e decremento <b>(--)</b>.
  
  O operador <b>++</b> aumenta o valor em 1 unidade, ou seja, se colocarmos com o valor 2, seu valor se tornará 3.
  
  O operador <b>--</b> diminui o valor em 1 unidade, ou seja, se colocarmos com o valor 3, seu valor se tornará 2. Veremos melhor sobre esses operadores mais para frente.</p>

## Operadores de Igualdade (==, ===, !=, !==)
<div align="center">

![Meme do JavaScript sobre tipos primitivos](https://user-images.githubusercontent.com/61624336/102435082-c4210300-3ff4-11eb-8250-14947f241915.png)

</div>
<p>Os operadores de Igualdade servem para compararmos se dois valores são iguais ou diferentes. A operação da comparação retornará um valor true ou false.</p>
<ul>
  <li>"==": serve para verificarmos se dois valores são <b>iguais</b>.</li>
  <li>"!=": serve para verificarmos se dois valores são <b>diferentes</b>.</li>
</ul>
<blockquote><b>Obs:</b> O operador "<b>=</b>" é somente usado para atribuir um valor e não para verificar os dois valores como os operadores "==" ou "!=". Ele é muito usado em <strong>variáveis</strong>, que veremos mais pra frente!</blockquote>
<blockquote><b>👍 Dica:</b> "!" é um operador que indica negação. Então "!=" seria o equivalente que dizer que algo é "não igual".</blockquote>
<p>Usar esses comparadores pode causar alguns problemas, pois eles vão pelo valor, ignorando o tipo do valor. Vamos entender melhor:</p>
<p>Lembra que foi dito que o <b>0</b> tem valor <b>false</b>? Então se compararmos <code>0 == false</code> será retornado <b>true</b>.</p>
<p>Se tivermos um número 3 e uma String "3", ambos são diferentes, certo? Pois o primeiro é um número e o segundo é um texto.</p>
<p>Porém, se fizermos a comparação <code>3 == "3"</code>, a String será convertida automaticamente para o tipo Number, e a comparação retornará true.</p>
<p>Isso pode causar algumas inconsistências em certos casos. Por isso que é muito recomendado sempre fazer comparações com valores do mesmo tipo. Para garantir que estamos fazendo comparações com valores e tipos iguais, acrescentamos um "=" a mais na comparação.</p>
<p>Isso significa que a comparação <code>3 == "3"</code> retorna true, mas a comparação <code>3 === "3"</code> retorna false, pois "<b>===</b>" também leva em consideração o tipo do valor.</p>
<blockquote><b>👍 Dica:</b> "===" é um operador que é usado para extrema igualdade.</blockquote>
<p>Para ter certeza que algo é diferente, incluindo o tipo, temos o operador "!==".</p>
<blockquote><b>👍 Dica:</b> "!==" é um operador que é usado para extrema diferença.</blockquote>

## Operadores Relacionais &lt;=, &gt;=,  &lt;, &gt;
<p>Os Operadores Relacionais servem para compararmos valores, verificando se algo é maior ou menor.</p>
<p>São mais usados com valores numéricos, mas também podem ser usados com Strings. Eles sempre retornam um valor true ou false.</p>
<ul>
  <li><b>&lt;=</b> verifica se um valor é menor ou igual;</li>
  <li><b>&gt;=</b> verifica se um valor é maior ou igual;</li>
  <li><b>&lt;</b> verifica se um valor é menor;</li>
  <li><b>&gt;</b> verifica se um valor é maior;</li>
</ul>
<p>Além de valores numéricos, podemos também comparar Strings, como:</b>

```javascript
"a" < "z".
```

## Concatenação de Strings (+)
<p>O Operador "+" também tem outra função além de somar números: ele concatena Strings.</p>
<p>Isso significa que podemos usá-lo para juntar duas ou mais Strings em uma só:</p>

```
"Olá" + "" + "João";
"Minha idade é" + 20;
```

<p>No exemplo acima nós juntamos uma String com um cumprimento, uma String com um espaço vazio e uma String com um nome.</p>
<p>Isso pode ser muito útil quando você possui um texto padrão para exibir e deve inserir dados do seu usuário, como o nome, no meio do texto.</p>

## Operadores Unários (-, !, typeof, etc)
<p>Até agora vimos operadores que precisam de dois elementos para funcionar, como é o caso da soma (5 + 3), onde passamos dois números. Esses operadores são chamados de <b>Operadores Binários</b>.</p>
<p>Também temos os <b>Operadores Unários</b>, que são aqueles que só recebem um valor para funcionar.</p>

### Operador "-"
<p>O primeiro é o "-". Além de ser usado como operador de subtração, ele pode ser usado para inverter o sinal de um número. Então um número positivo se torna negativo e um negativo se torna positivo.</p>
<pre>-3</pre>

### Operador "!"
<p>Como vimos antes, esse operador serve para negação. Ele inverte os valores do tipo Boolean. Então um valor true se torna false e um false se torna true.</p>
<pre>!true</pre>

### Operador "typeof"
<p>Nem todos os operadores são símbolos. Um exemplo deles é o "typeof". Ele nos ajuda a descobrir o tipo de algum valor, se é String, Number, etc.</p>
<pre>typeof 3</pre>

## Operador Ternário (? :)
<p>Vimos os operadores binários e unários. Vamos ver agora o <b>Operador Ternário Condicional</b>.</p>
<p>Ele recebe três valores e serve para verificarmos uma condição.</p>
<pre>3 > 1 ? 'É maior' : 'É menor' // retorna a String "É maior"</pre>
<p>Podemos dividir então em três partes:</p>
<pre>(3 > 1) ? ('É maior') : ('É menor')</pre>
<p>A primeira parte é uma condição, a qual deve ter um valor true ou false. Nós comparamos se 3 é maior que 1. Veja que é como se perguntássemos "3 é maior que 1?"</p>
<p>Caso a resposta seja verdadeira, o segundo elemento que passamos será retornado, no caso, a String "É maior".</p>
<p>Se a resposta for falsa, o terceiro elemento que passamos será retornado, no caso, a String "É menor".</p>
<pre>3 > 8 ? 'É maior' : 'É menor' // retorna a String "É menor"</pre>

## 🔄 Conversão automática de tipos 🔄
<p>No mundo da programação temos o chamado "Conversão de Tipos". Isso porque muitas vezes estamos trabalhando com um valor que é de um tipo, mas precisamos fazer alguma operação com ele como se ele fosse de um outro tipo.</p>
<p>Um exemplo clássico é quando perguntamos a idade de um usuário. Nada impede que o usuário tecle "ABC". Mesmo que ele escreva apenas números, receberemos uma String, como "21".</p>
<p>Porém, para trabalharmos com isso, precisamos que este valor seja do tipo Number. Então precisaremos converter a String em Number.</p>
<p>Ou caso a gente faça um cálculo e queira exibir uma mensagem com o resultado. Precisaremos converter esse número para String para podermos concatená-lo com nosso texto.</p>
<p>Em muitas linguagens de programação, essa conversão deve ser feita manualmente. O JavaScript faz conversões automaticamente. Isso pode deixá-lo mais dinâmico, mas se não for usado com cuidado pode causar muitos problemas e falhas de lógica, causando resultados inesperados.</p>
<pre>"5" – 1</pre>
<p>Estamos subtraindo 1 de uma String. O JavaScript automaticamente tenta converter a String para o tipo Number para fazer a operação de subtração, resultando em 4.</p>
<pre>"5" + 1</pre>
<p>Aqui ele verá a operação como uma concatenação de Strings. Então o 1 será convertido para String, resultando em "51".</p>
<p>Por isso é importante conhecer bem o comportamento da linguagem, para não ter surpresas com o que ocorre automaticamente.</p>

## ➕ O que são expressões? 🔟
<p>Vimos até agora alguns comandos simples com os operadores. Vimos que eles produzem um valor quando executados, como é o caso de "5 + 3" que produz o valor "8".</p>
<p>Até mesmo quando simplesmente digitamos 8 estamos gerando o valor 8. Todo fragmento de código que produz um valor é chamado de "expressão".</p>
<p>Podemos aninhar expressões para gerar códigos mais complexos, assim como podemos juntar várias palavras e frases para formar grandes textos para passar ideias para outras pessoas.</p>
<p>Um programa é feito de linhas de códigos cheios de comandos, que em outras palavras, é uma lista de expressões.</p>
<hr>

<h1 align="center">Cap 05: 📜 O que são variáveis? 📥</h1>
<img src="https://miro.medium.com/max/1152/1*SntGwD7Wfd2v0S7aPybdzg.png"/>

Até agora só escrevemos simples códigos que não servem para nada. Simplesmente escrevemos um valor e no máximo fizemos algumas operações com os valores que digitamos.

Como você deve imaginar, um programa não fica pedindo dados toda hora para o usuário. Ele armazena esses dados e pode fazer várias operações com esse valor.

Mas se escrevermos um valor, como acessá-lo novamente em outro lugar? Se escrevemos um valor "5" no comando, como alterá-lo depois ou gerar novos valores?

É aí que entram em cena as chamadas <b>variáveis</b>.

Imagine as variáveis como caixinhas onde podemos armazenar um valor e depois ir lá modificar ou apagar. Também damos um nome para essa "caixinha", para podermos acessar o nosso valor por um nome.

Em muitas linguagens de programação, como Java e C#, precisamos indicar qual o tipo que a variável irá armazenar, como Boolean ou String. Dizemos que a linguagem possui "Tipagem Estática".

O JavaScript possui o que chamamos de "Inferência de Tipo". Nós não precisamos declarar o tipo da variável. Se passarmos um número para uma variável, o JavaScript já saberá que aquela variável será do tipo Number. Isso também ocorre em linguagens como PHP, Python, Ruby e C# (sim, o C# também aceita inferência de tipos). Nesse caso, dizemos que a linguagem possui uma "Tipagem Dinâmica". Além disso, as variáveis do JS se organizam de cima para baixo.

## 📥 Declarando e nomeando variáveis 🔤
[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102696091-8ac1e080-420a-11eb-9553-477915979001.jpg)

<blockquote><b>Obs:</b> O JS é <em>Case Sensitive</em>, ou seja, as letras maiúsculas e minúsculas fazem diferença na declaração de variáveis. Ademais, as variáveis no JS são declaradas no topo do código para baixo, por isso o valor é definido corretamente. Além disso, as variáveis não podem conter acentos ou espaços, para caracteres especiais somento o "$" e o "_", mas não são muito recomendados. Ademais, números são permitidos desde que sejam precedidos de uma ou mais letras.</blockquote>

<blockquote><b>👍 Dica:</b> É opcional, mas se possível crie variáveis em inglês para deixar o seu código mais uniforme, facilitará muito mais no entendimento.</blockquote>

### Exemplo:
<blockquote><b>👍 Dica:</b> O nome da variável <b>Idade</b> substitua para <b>Old</b> ou <b>yearOld</b>.</blockquote>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/102696882-6b2db680-4210-11eb-80b8-7dc0048c8f15.jpg)

<blockquote>Bem uniforme e fácil de compreensão para todos!</blockquote>

## 📥 Declarando variáveis com operadores de atribuição 📤
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102698306-28bda700-421b-11eb-9430-c432e875cf0b.jpg)
<blockquote><b>Obs:</b> Também funciona com a concatenação.</blockquote>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/102699060-a7691300-4220-11eb-8543-6e7593c01795.jpg)

## ➕➕ Incremento e decremento de valores ➖➖
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102937044-0bd9db80-4488-11eb-9861-500df9186e5e.jpg)

## 📥 Variáveis locais e globais 🌎
<p>As variáveis podem ser classificadas em duas categorias:</p>
<ul>
  <li><b>Variáveis locais</b> são as variáveis que estão dentro do escopo de um programa / função / procedimento.</li>
  <li><b>Variáveis globais</b> são as variáveis que estão no escopo para o tempo de execução do programa. Elas podem ser recuperadas por qualquer parte do programa.</li>
</ul>

### 📥 let vs const vs var 📥
<div align="center"><img src="https://miro.medium.com/max/320/0*2Iz9vcaOtPNivfen.png" height="270"/><img src="https://miro.medium.com/max/2000/1*kZXDtoVrpI8Ynwjo2jtKSA.png" height="270"/></div>
<p>A diferença entre eles é algo bastante notório no escopo:</p>
<ul>
  <li><b>var</b> funciona em qualquer lugar do programa independente de onde foi declarado. Além disso, pode ser alterada e renovada.
  
  ![Sem Título-1](https://user-images.githubusercontent.com/61624336/102960938-dbaf2e80-44c1-11eb-95eb-5e87dee0f451.jpg)

  </li>
  <li><b>let</b> funciona em apenas um determinado bloco do programa. Não permite que use a mesma variável de novo.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/102961936-6d1fa000-44c4-11eb-82d5-4475c3d79687.jpg)

</li>
  <li><b>const</b> não deixa você alterar o dado atribuído. Só trabalha com valores fixos!

  ![Sem Título-1](https://user-images.githubusercontent.com/61624336/103446794-561a4400-4c62-11eb-8be2-7840e633ae6b.jpg)

</li>
</ul>
<blockquote><b>Obs:</b> const e let só funcionam dentro do escopo do bloco <b>{ }</b>.</blockquote>

### 📥 Alguns tipos de variáveis globais 🌎
<p>Existe mais de um tipo de variável global, como:</p>
<ul>
  <li><p>Não é muito recomendado, pois pode gerar conflitos com outras variáveis dependendo do escopo.</p><img src="https://user-images.githubusercontent.com/61624336/103024474-ad1b6d00-452e-11eb-9110-9ae03ebaada0.jpg"/></li>
  <li><p>variável local e global, muito recomendada para ambos os escopos!</p><img src="https://user-images.githubusercontent.com/61624336/103024858-68dc9c80-452f-11eb-823b-29b790892a67.jpg"/></li>
  <li><p>Esse tipo de variável está dizendo explicitamente que a variável é global na janela</p><img src="https://user-images.githubusercontent.com/61624336/103025149-f4eec400-452f-11eb-8e4f-cc9df377fe09.jpg"/></li>
</ul>

### 📞 Outra forma de chamar uma variável 📥
<p>Usando as crases e o cifrão com as chaves, esse placeholder concatena a frase com a variável sem a realização dos operadores aritméticos.</p>

#### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103025789-4e0b2780-4531-11eb-8448-7eb9415164d8.jpg)

### 💬 Perguntar e recolher dados de uma variável 📥
<p>O método <code>prompt()</code> exibe a mensagem para o usuário e recolhe o valor para aplicar na variável.</p>

#### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103028368-603b9480-4536-11eb-99dc-0219aeead300.jpg)

<p>O segundo passo é chamar o script no documento HTML, somente assim exibe a janela no navegador!</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103028814-43539100-4537-11eb-96ec-beaf6610f93b.jpg)

<p>Executando o documento percebe-se que há um textbox que dá pra inserir o valor.</p>

![Sem Título-2](https://user-images.githubusercontent.com/61624336/103035031-160ddf80-4545-11eb-8ce5-2470fe943edc.jpg)

<blockquote>Logo, a variável receberá o seu valor.</blockquote>
<hr>

<h1 align="center">Cap 06: 📜 Escopo 🏠🗾🌏</h1>
<div align="center"><img src="https://www.stevethedev.com/storage/app/uploads/public/5aa/d54/a47/5aad54a47d2e0123286333.png" width="500"/><img src="https://cdn-media-1.freecodecamp.org/images/1*YWPubaj-_gMWS4jEDVBUfA.png" width="500"/></div></br>

<p>É definido pela região ao qual variáveis e outros dados são visíveis (código). Existem três tipos de escopos:</p>

## Escopo Global 🌏
<p>Uma variável declarada fora de uma função, torna-se global e todos os scripts e funções em uma página da Web podem acessá-la.</p>

### Exemplo:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103448064-b0bb9c00-4c72-11eb-897f-ab8a697318ad.jpg)

## Escopo de Função 🗾
<p>Uma variável declarada dentro de uma função, torna-se parte somente da função que a página da Web pode acessá-la.</p>

### Exemplo:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103448597-8b329080-4c7a-11eb-9a9c-9240128b8a5b.jpg)

## Escopo Local 🏠
<p>Variáveis declaradas dentro de um local cercado por <code>{ }</code>.</p>

### Exemplo:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103448946-7efd0200-4c7f-11eb-8cc7-c35fbbfa77b8.jpg)

<hr>

<h1 align="center">Cap 07: 📜 Estrutura condicional 👍👎</h1>
<img src="https://p5.ssl.qhimg.com/t019058f235d658586e.jpg" width="1000"/>

## 👍 O que são condições? 👎
<p><b>Condições</b> são expressões que retornam um valor true ou false. Podem ser usadas como previsões para algum valor ou evento acionado.

O valor true ou false é usado para que a máquina escolha se uma expressão deve ou não ser executada. Chamamos isso de Execução Condicional.
Um exemplo é o Operador Ternário Condicional que vimos anteriormente.
</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103034640-18bc0500-4544-11eb-8c4d-f3914652f0d4.jpg)

<blockquote>retorna a String "É menor"</blockquote>

<p>Ele escolhe o que irá retornar. Porém, tudo na mesma linha não é muito legível. O Operador Ternário é recomendado apenas para operações simples e curtas. Para a maioria dos casos, usaremos o comando <code>if</code>. 
  
Caso precise de uma segunda decisão oposta da primeira (if) utilize o <code>else</code>. Se precisar de mais decisões utilize o <code>else if</code> que é mais indicado do que somente <code>if</code> e o <code>else</code> no escopo, pois eles podem gerar conflito no código!</p>

### Exemplo 1:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103043802-f2569380-455c-11eb-86b6-36e46cb25496.jpg)

### Exemplo 2:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103038271-cfbc7e80-454c-11eb-9d5a-bd6a4bf9af67.jpg)

### Exemplo 3:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103040686-f978a400-4552-11eb-8781-42c3f58802d3.jpg)


## 👍👎 Comparando valores com o switch 🎛️🎚️
<p>Para um grande número de condições é necessário um comando mais especializado do que somente o <code>if</code>, <code>else</code> ou <code>else if</code>, o comando <code>switch</code> é ideal para essa proposta. Observe a imagem abaixo:</p>

### Exemplo 1:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103044820-e10f8600-4560-11eb-8151-4bf9cccd3e48.jpg)

<blockquote><b>Obs:</b> O <code>break</code> serve para pausar a execução por cada <code>case</code>, pois senão ele executa todas de uma só vez.</blockquote>
<hr>

<h1 align="center">Cap 08: 📜 Laços de Repetição 🔁</h1>
<img src="https://i.ytimg.com/vi/Kn06785pkJg/maxresdefault.jpg" width="1000"/>

## 🔁 O que são laços de repetição 🔂
<p>Uma das vantagens das máquinas sobre as pessoas é que elas podem executar várias tarefas repetitivas sem se cansar e de maneira muito mais rápida.

Após a tomada de decisões, outra parte básica no aprendizado da programação é a execução de repetição de comandos, os quais chamamos de Laços de Repetição.

Imagine que você queira imprimir na tela a soma de todos os números de 1 a 100. Daria muito trabalho digitar tudo.

E se precisássemos alterar esse 100 para 1.000? Ou 1.000.000? Com um simples comando podemos fazer essa conta em um piscar de olhos com os <b>laços de repetição</b>.</p>

# 📜 For loop 🔂
<p>Executa X vezes uma ação seguindo a forma como foi definido para ele faze-la. A instrução do laço <code>for</code> é separada por ponto e vírgula em três partes.</p>
<ol type="I">
  <li>Normalmente é a criação de uma variável de controle.</li>
  <li>A condição para encerrar o <code>for</code>. Neste caso, ele executará enquanto <b>i</b> for menor do que <b>10</b>, ou seja todos os números antecessores de 10 até 0. Caso essa condição nunca se torne “false”, teremos um loop infinito. Tenha bastante cuidado com loops infinitos, podem sobrecarregar seu navegador ou sua máquina!</li>
  <li>Final de cada repetição. Normalmente é o incremento ou decremento de 1 da variável.</li>
</ol>

## Sintaxe:
<pre><b>for</b> (declaração 1; declaração 2; declaração 3) {
  // code block to be executed
}</pre>

### Exemplo 1:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103056307-59834080-457b-11eb-9c50-ad2ce0646148.jpg)

<blockquote><b>Utilidade:</b> O <code>for</code> é ótimo para ler vetores. Não se preocupe, aprenderemos o que são vetores mais pra frente.</blockquote>

### Exemplo 2:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103058289-8a19a900-4580-11eb-82a4-396c2fa3f9d8.jpg)

<blockquote><b>Utilidade:</b> Podemos ler ou modificar todos os itens de um vetor.</blockquote>

### Exemplo 3:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103059359-a5d27e80-4583-11eb-81eb-45260edda8a9.jpg)

## 📜 For in 🔁
<p>Este loop serve para percorrer pelas propriedades de um objeto.</p>
<pre><b>for</b> (variável <b>in</b> interável) {
  // bloco de código a ser executado
}</pre>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103426737-59e29380-4b9a-11eb-9a15-8226eabdb357.jpg)
<blockquote><b>Output:</b> John Doe 25</blockquote>

## 📜 For of 🔁
<p>Este loop é específico para <b>iterar</b> entre os elementos de uma lista. Você pode ler ele como “Para cada item de uma lista”. No exemplo abaixo, o dia começará sendo com o valor “segunda” e o último loop será “sexta”. Ele é muito importante para percorrer a lista em ordem crescente. No entanto, caso você precise trabalhar com índices ou múltiplas posições da lista, talvez seja melhor usar o <code>for</code> normal.</p>

### Sintaxe:
<pre><b>for</b> (variável <b>of</b> interável) {
  // bloco de código a ser executado 
}</pre>

### Exemplo 1:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103060468-f39cb600-4586-11eb-8827-fb3508208e56.jpg)

### Exemplo 2:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103060597-758cdf00-4587-11eb-87e4-28aacbe5468a.jpg)

# 📜 While loop 🔁
<p>Laços de repetição podem executar um bloco de código longo se a condição específica for verdadeira.</p>
<p>O laço de repetição <code>while</code> repete através de um bloco de código enquanto uma condição específica é verdadeira.</p>

## Sintaxe:
<pre>
<b>while</b> (condição) {
  // Bloco de código a ser executado
  incremento++ / decremento--
}
</pre>

### Exemplo 1:
<p>Seguindo o exemplo, o código no laço de repetição vai rodar, os números de 0 a 9, enquanto (i) é menor do que 10:</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103141057-c60e5480-46cd-11eb-84e4-31a79e7d1e84.jpg)

## 📜 Do while 🔁
<p>Esse loop é um variante do <code>while</code>. Esse loop vai executar o bloco de código uma vez, antes verificando se a condição é verdadeira, então vai repetir o loop, enquanto a condição for verdadeira.</p>

### Sintaxe:
<pre><b>do</b> {
  // bloco de código a ser executado
}
<b>while</b> (condição);</pre>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103446306-db025f00-4c5c-11eb-91a3-7522d3c1510b.jpg)

## 📜 Continue x break 🔁↪️
<p>Servem para loops e condições, porém a diferença entre eles é na sua funcionalidade, o <code>break</code> quebra no final da execução e assim o compilador executa outra etapa do código, já o <code>continue</code> continua até finalizar a execução.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103481609-d0f67280-4dba-11eb-99c4-be7be4bff65f.jpg)

<hr>

<h1 align="center">Cap 09: 📜 Arrays [Vetores] 🛒</h1>
<img src="https://miro.medium.com/max/816/0*jJba103A-9xmpTYq.jpg" width="1070"/>
<p>É uma lista ou coleção de dados que pode ser acessada por índice. Para criar um vetor vazio basta criar uma variável e atribuir <code>[ ]</code> a ela.</p>

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103464102-20cc2f80-4d10-11eb-9a28-77e5bf085cb3.jpg)

## <b>Atribuindo valores:</b> Você pode criar um vetor com seus valores separados por vírgula.

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103465773-91c61400-4d1d-11eb-941f-73130512b208.jpg)

### Exemplo 2:
<p>Você pode adicionar valores de qualquer tipo no vetor.</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103465854-2df01b00-4d1e-11eb-9699-48ca48bba14f.jpg)

## <b>Acessando valores:</b> Os valores podem ser acessados através de seu índice.

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103466103-79a3c400-4d20-11eb-96fd-c7cb2ae02329.jpg)

<p>Observe que o índice começa no 0. Então o primeiro item está na posição 0, o segundo na posição 1 e assim por diante.</p>

## Alterando e atribuindo valores pelo índice: Com o índice, você pode:
<ol type="a">
  <li>Alterar um valor existente;</li>
  <li>Inserir um novo valor em uma posição específica.</li>
</ol>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103466456-2764a200-4d24-11eb-8021-fd5f974265c0.jpg)

<p><b>Null</b>: O <code>null</code> é um tipo de dado especial, ele representa a falta de valor de qualquer outro tipo de dado.</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467110-6990e200-4d2a-11eb-9fbb-68f39ed8d249.jpg)

<p><b>Undefined</b>: Este tipo de dado aparece quando criamos uma variável e tentamos acessar seu valor antes de ter atribuído algo a ela.</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467297-8b8b6400-4d2c-11eb-852b-93ad43fe1136.jpg)

<p><b>Undefined !== Null</b>: <code>undefined</code> e <code>null</code> são diferentes.</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467504-64359680-4d2e-11eb-833d-6dca7fe3531b.jpg)

Resumidamente, isto ocorre pois null ainda é um valor e undefined é quando o JavaScript não sabe qual o tipo de dado.

<b>Objeto</b>: é um tipo de dado composto pelos outros tipos. Com ele, podemos organizar informações relacionadas em uma variável. Os dados do objeto são acessados pelas propriedades desses objetos.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467659-030ec280-4d30-11eb-9ab5-9fe4ab065691.jpg)

<b>Criação</b>: Um objeto vazio é bem simples de criar.

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103467820-c9d75200-4d31-11eb-9676-04e0a7b7f2f9.jpg)

No caso de um objeto com propriedades (variáveis), fazemos assim:

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103469613-dd8cb380-4d45-11eb-833c-7eee28591f69.jpg)

<p>Caso você já tenha criado o objeto e queira adicionar um novo, você pode fazer de duas formas:</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103469652-47a55880-4d46-11eb-973f-07edec2c5571.jpg)

<p>Note que se você usar a segunda opção, precisa ter uma String dentro dos <code>[ ]</code>.</p>

<p>A alteração de dados funciona da mesma forma.</p>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/103469746-77089500-4d47-11eb-87b7-8e5f07697e0d.jpg)

## 🛒 Outra forma de inserir um array "separadamente" [🍎] [🍐] [🍊] [🍇]
![Sem Título-1](https://user-images.githubusercontent.com/61624336/106766196-63876d00-6618-11eb-8536-9e362e887874.jpg)

## 🛒 Array Mod [🍎, 🍐, 🍊, 🍇]
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103718412-6fdec280-4fa5-11eb-94c2-98a815ef78b4.jpg)

<p>Existem alguns métodos e argumentos que mudam a funcionalidade de um array, tais como:</p>

### .("🍎","🍐") Tabela de métodos de Arrays .("🍊","🍇")
![JavaScript-Array-Methods](https://user-images.githubusercontent.com/61624336/112920823-1be50500-90e0-11eb-8adc-7d57c467aab7.jpg)

<table>
  <tr>
    <td><b>Método</b></td>
    <td><b>Função do método</b></td>
  </tr>
  <tr>
    <td>push("value")</td>
    <td>Adiciona elemento</td>
  </tr>
  <tr>
    <td>pop("array value")</td>
    <td>Retira elemento</td>
  </tr>
  <tr>
    <td>length</td>
    <td>Retorna o tamanho da lista ou n° de elementos</td>
  </tr>
  <tr>
    <td>filter(function(currentValue, index, arr), thisValue)</td>
    <td>Cria um array preenchida com todos os elementos do array que passam em um teste (fornecido como uma função)</td>
  </tr>
  <tr>
    <td>toString(Array)</td>
    <td>Mostra todos os itens da lista</td>
  </tr>
   <tr>
    <td>join()</td>
    <td>Substitui elementos que separam a string</td>
  </tr>
  <tr>
    <td>reverse()</td>
    <td>Reverte</td>
  </tr>
  <tr>
    <td>shift("array value")</td>
    <td>Remove o item</td>
  </tr>
</table>
<hr>

<h1 align="center">Cap 10: 📜 Valores em JS 💛</h1>
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103469784-031abc80-4d48-11eb-972d-a6d3aac2dd88.png"/></div>
<p>Já vimos como alterar o valor de uma variável ou de um item no array no JavaScript, mas posso mudar o nome de uma String no JS? 
  
Como faço para mudar o nome de uma string no JavaScript? 
  
A resposta para essa pergunta é com uma série de métodos que alteram os valores das variáveis, veja o exemplo abaixo:</p>

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103482135-ba054f80-4dbd-11eb-9ca3-d78279efb6a9.jpg)

### 🟨 Tabela de métodos para os valores em JS 💛
<table>
    <tr>
      <td><b>Método</b></td>
      <td><b>Função do método</b></td>
  </tr>
  <tr>
  <td>replace("", "")</td>
  <td>muda a String selecionada por outra string informada</td>
  </tr>
  <tr>
    <td>toUpperCase()</td>
    <td>Todas as letras maiúsculas da String</td>
  </tr>
  <tr>
    <td>toLowerCase()</td>
    <td>Todas as letras minúsculas da String</td>
  </tr>
</table>
<hr>

<h1 align="center">📜 Data e horário em JS 🕒📅</h1>
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103482623-9bed1e80-4dc0-11eb-857a-2c188babf60d.png"/></div>
<p>Toda linguagem de programação moderna possui contadores de tempo. Com o JavaScript não é diferente.</p>

## Sintaxe:
<pre>variável data = new Date();
console.log(data.getTime());</pre>

<p>O JS é ótimo para manipular o tempo através de seus métodos, os métodos adiante definem o tempo no JavaScript:</p>

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103485348-66eac700-4dd4-11eb-86a3-f9999105e40f.jpg)

## 🕒 Tabela de métodos que definem o tempo no JS: 📅
<table>
  <tr>
    <td><b>Método</b></td>
    <td><b>Função do método</b></td>
  </tr>
    <tr>
    <td>getDate()</td>
    <td>Define a data atual</td>
  </tr>
    <tr>
    <td>getFullYear()</td>
    <td>Define o ano atual e completo</td>
  </tr>
  <tr>
    <td>getYear()</td>
    <td>Define o ano e incompleto</td>
  </tr>
  <tr>
    <td>getMonth()</td>
    <td>Define os meses</td>
  </tr>
  <tr>
    <td>getDay()</td>
    <td>Define o dia</td>
  </tr>
  <tr>
    <td>getHours()</td>
    <td>Define as horas</td>
  </tr>
  <tr>
    <td>getMinutes()</td>
    <td>Define os minutos</td>
  </tr>
  <tr>
    <td>getMilliseconds()</td>
    <td>Define os milisegundos</td>
  </tr>
    <tr>
    <td>getSeconds()</td>
    <td>Define os segundos</td>
  </tr>
</table>
<hr>

<h1 align="center">📜 Dicionários em JS 📖</h1>
<img src="https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1-1280x356.jpg"/>
<p>Existe outra forma de inserir variáveis de uma só vez e chamar elas de uma vez, com os dicionários do JS que envolvem as variáveis entre <code>{ }</code>, veja o exemplo abaixo:</p>

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103489687-eab4ab80-4df4-11eb-8fd9-ca7e330d5c21.jpg)

<p>Também funcionam com arrays, dessa forma <code>[{ }]</code>:</p>

## Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103489857-53505800-4df6-11eb-9a02-ef2c6d90a396.jpg)

<hr>

<h1 align="center">📜 Funções em JS 🤹</h1>
<div align="center"><img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15687/comprehensive-guide-javascript-design-patterns-cf0c7c0e69d51d97044a8431da9175e3.png"/></div>
<p>São utilizadas para criarmos uma sequência de operações para serem executadas. As funções no JavaScript são de Primeira Classe, ou seja, elas podem servir de parâmetros para outras funções.</p>

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103491028-d9709c80-4dfe-11eb-9e25-7c50dd69fca2.jpg)

<p>Note que para fazer a função executar, você precisa chama-la com os parênteses. Também é possível passar valores para a função acessar.</p>

## Exemplo 2:
![ewr33r](https://user-images.githubusercontent.com/61624336/104746887-9f709600-572e-11eb-8b9d-ec08b0df6957.jpg)

## Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103491193-6405cb80-4e00-11eb-997a-a3d22e75d47a.jpg)

<p>O <code>return</code> devolve um valor para a função.</p>

## Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103491947-56534480-4e06-11eb-9dfe-2bd57a0a8524.jpg)

<blockquote><b>Curiosidade:</b> Caso você não coloque o <code>return</code>, por padrão as funções devolvem <code>undefined</code>.</blockquote>

## Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103492431-91a34280-4e09-11eb-88b2-35e526530318.jpg)

## Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103492479-ec3c9e80-4e09-11eb-92e6-638585d008f5.jpg)

## Exemplo 7:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107418551-91c3eb80-6af5-11eb-9635-fbebf2f958b0.jpg)

## 🏹 Arrow Function 🤹
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103492529-5d7c5180-4e0a-11eb-8426-cda942129822.png"/></div>
<p>Agora vamos conhecer outras maneiras de inserir funções no JavaScript. Com o <b>arrow function</b> a função possui uma forma bem mais enxuta de ser inserida com os arrows. Elas são funções anônimas, ou seja, você só pode utiliza-las atribuindo a uma variável ou passando para outra função.</p>

### Sintaxe (Function):
```javascript
function funcao() {
   código;
}
```

### Sintaxe (Arrow Function)
```javascript
funcao = () => {
  código;
}
```

### Sintaxe (auto-exec function with Arrow Function)
```javascript
((x, y) => {
 console.log(x + y);
})(10, 5);
```

## Sintaxe (Immediatly invoked function expression with Arrow Function)
<pre>(() => {
  console.log('Hello, world!');
})();</pre>

### Sintaxe (Anonymous Function)
<pre>
var log = function(value){
  console.log(value);
}

log('test');
</pre>

### Sintaxe (Anonymous Function) - segundo tipo
<pre>
(function() {
  return 'Hello World';
})()
</pre>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103493496-78ea5b00-4e10-11eb-9e44-00e8e9648549.jpg)

### Exemplo 2: com parâmetros (return implícito)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103493750-daf79000-4e11-11eb-981d-ac100ffc9b0e.jpg)

### Exemplo 3: retornando ao valor por padrão
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103493854-89033a00-4e12-11eb-9142-16e75a3a45f3.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107413609-b1581580-6aef-11eb-83eb-d0132956f567.jpg)

### Exemplo 5: Sem parênteses e um argumento
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107415115-bae27d00-6af1-11eb-9295-594dcfd942c9.jpg)

<blockquote><b>OBS:</b> Se for mais de um argumento, é obrigatório o uso de parênteses!</blockquote>
<hr>

<h1 align="center">📜 Procedural JavaScript 📜</h1>
<div align="center"><img src="https://miro.medium.com/max/700/1*g_md6pY90xurj3j_ApaaLA.jpeg" width="1070"/></div>
<p>Já que aprendemos todos os conceitos, funcionalidades e valores primordiais do JavaScript, está na hora de apresentar o primeiro paradigma da linguagem, a <b>procedural</b>. O JavaScript procedural funciona com todas as funcionalidades que já vimos de maneira organizada para a execução de um programa, vejamos o exemplo:
  
## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103537648-8a188380-4e73-11eb-8d72-7291abf3f473.jpg)

<hr>

<h1 align="center">📜 JavaScript OOP ⚽</h1>
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103486053-b5e72b00-4dd9-11eb-86bc-a7fca5cf664f.png"/></div>
<p>Diferente da linguagem HTML, a linguagem JavaScript corresponde à programação orientada a objetos (OOP), isto significa que todos os elementos de uma página da Web são
tratados como objetos. Estes objetos são agrupados de acordo com seu tipo ou finalidade.</p>

## 📜 Hierarquia de Objetos ⚽🏈
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103469686-b2569400-4d46-11eb-88fb-d615916b17c2.png"/></div>
<p>Seguindo a hierarquia de objetos da linguagem JavaScript, são criados os seguintes objetos ao ser carregada uma página:</p>
<ol>
  <li><code><b>window</b></code>: O objeto mais acima na hierarquia, contém propriedades que se aplicam a toda a janela. Há também um objeto desta classe para todas as "sub-janelas" de um documento com frames.</li>
  <li><code><b>location</b></code>: Contém as propriedades da URL atual.</li>
  <li><code><b>history</b></code>: Contém as propriedades das URLs visitadas anteriormente.</li>
  <li><code><b>document</b></code>: Contém as propriedades do documento contido na janela, tais como o seu conteúdo, título, cores, etc.</li>
</ol>
<img src="https://webdesignemfoco.com/img/files/ckfinder/images/dom_full2.png"/>
<p>Cada objeto existente na manipulação do JavaScript possuem <b>propriedades</b> (características/ atributos). Exemplo, sabemos que um documento HTML possuem título e corpo, estas características do documento podemos chamar de propriedades que existem neste documento.

A utilização de propriedades se dá acompanhada de seu objeto sendo separados por um ponto <code>.</code> apenas. Abaixo, a sintaxe de utilização de propriedades:</p>
<pre>nomeObjeto<b>.</b>propriedade</pre>
<p>Além das propriedades, os objetos podem conter <b>métodos</b> (ações/ verbos), que são funções prédefinidas pela linguagem JavaScript que irão executar determinada operação.</p>
<pre>nomeObjeto.método(argumento/ parâmetro)</pre>
<p>Na sintaxe apresentada, <code>nomeObjeto</code> faz referência ao objeto a ser utilizado e o qual sofrerá uma ação do método, já método é o nome de identificação do método usado e entre parênteses (argumento/ parâmetro) é a expressão ou valor opcional que será usada para alterar sobre o objeto.</p>

## 📜 Onde escrever um JavaScript? ✍️
<p>Já aprendemos algumas formas de escrever o JavaScript anteriormente. No entanto, há uma outra forma para controlar bem os objetos da linguagem!</p>

### 1° Solução: 📜 Embutido na página HTML 📙
<ol>
  <li>Como evento de um elemento (IMG, A, INPUT etc);</li>
  <li>Como elemento &lt;script&gt; dentro de &lt;body&gt;;</li>
  <li>Como função, dentro de &lt;head&gt;</li>
</ol>

### 2° Solução: 📜 Num arquivo a ser importado 📒

## 📜 Prototype 🧰
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/104110669-acb5fc80-52b8-11eb-9b30-f8c820758751.jpg"/></div>
<p>Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado <b>prototype</b>. O prototype é baseado em protótipos e possui uma variável que é armazenada na referencial o <code>__proto__</code>, além de utilizar uma cadeia de objetos, como o objeto <b>constructor</b>. O prototype pode ser acessado no console do navegador, assim como a cadeia de protótipos.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104111592-6bc2e580-52c2-11eb-84e4-3d6b3d841a61.jpg)

### 🧰 Cadeia de protótipos (Prototype chain) ⛓️
<div align="center"><img src="https://www.sdlclabs.com/images/services/PrototypeJs.png"/><img src="https://user-images.githubusercontent.com/61624336/104111183-e0dfec00-52bd-11eb-8602-60813a7a3b18.png"/></div>
<p>Nota-se que o <code>Object.prototype</code> é o único que não tem duas conexões, pois ele faz uma lista dos objetos inseridos. Esse objeto prototype também tem um atributo prototype, e assim por diante até o que o valor <code>null</code> seja encontrado como sendo o seu prototype <code>null</code> que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).</p>

<p>Aprenderemos mais sobre os eventos no próximo capítulo.</p>

<p>Veremos melhor como funciona essa hierarquia de objetos e como utiliza-las em uma página, nos próximos capítulos.</p>
<hr>

<h1 align="center">Cap: 📜 [Advanced ES6] Funções Hoisting 🏗️🤹</h1>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107423823-9be8e880-6afb-11eb-9c6c-dc9d04fd916f.jpg)

### Exemplo 2: Tratando objetos
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107432551-e6bc2d80-6b06-11eb-9273-6dad2973c0e1.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107449299-16c4fa00-6b22-11eb-825b-8c35f2ae3a0b.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107449573-8fc45180-6b22-11eb-8ab9-0a000a939de2.jpg)

### Exemplo 4: 📜 Função setTimeout (Função do Browser) 🤹⏰
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107451157-796bc500-6b25-11eb-8eeb-beb543ff7cae.jpg)

### Exemplo 5: Outra forma "mais poluída" 📜🤢
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107456784-9d340880-6b2f-11eb-9dc2-53450ef09b21.jpg)

### Exemplo 6: 📜 Arrow function 🤹🏹
Não podemos criar funções construtoras usando arrow functions.
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107457270-8346f580-6b30-11eb-8795-301951a6c659.jpg)

<hr>

<h1 align="center">Cap: 📜 [Advanced ES6] Default Function Arguments 🛌🤹</h1>
<p>Quando não atribuimos o segundo valor para a variável, atribuimos ele dentro da função, observe abaixo!</p>

## Exemplo 1:
![12](https://user-images.githubusercontent.com/61624336/107806090-19ec0000-6d45-11eb-8b81-ef25ee970c74.jpg)
![12](https://user-images.githubusercontent.com/61624336/107806363-85ce6880-6d45-11eb-9a3f-2b8c3d7b2022.jpg)

## Exemplo 2: Validação de Tipo (com operador ternário)
![12](https://user-images.githubusercontent.com/61624336/107807013-55d39500-6d46-11eb-8d3d-3a9af3f8f521.jpg)

## Exemplo 3: Inserindo o valor no parâmetro da função
![12](https://user-images.githubusercontent.com/61624336/107807785-6cc6b700-6d47-11eb-987e-d45d04ad392f.jpg)
![12](https://user-images.githubusercontent.com/61624336/107808428-553bfe00-6d48-11eb-805d-986b36f5f2a1.jpg)
![12](https://user-images.githubusercontent.com/61624336/107808122-da72e300-6d47-11eb-9998-fe7f41d73d9a.jpg)
![12](https://user-images.githubusercontent.com/61624336/107809428-d6e05b80-6d49-11eb-803a-7faa4f1e5d5c.jpg)

## Exemplo 4: Poder de atribuição
![12](https://user-images.githubusercontent.com/61624336/107809900-97663f00-6d4a-11eb-93af-d9efb1690588.jpg)

<blockquote><strong>OBS:</strong> A ordem dos argumentos importa na função, qualquer alteração no sentido da ordem pode ocasionar um erro na execução do código.</blockquote>

## Exemplo 5: Lazy evaluation
A característica que permite podermos utilizar funções para definir valores de um argumento e a mesma só será invocada quando o argumento for indefinido.

![12](https://user-images.githubusercontent.com/61624336/107815875-b8329280-6d52-11eb-9b29-7865fbcd28f4.jpg)

## Exemplo 6:
![12](https://user-images.githubusercontent.com/61624336/107820477-9d175100-6d59-11eb-8403-1f78814ec417.jpg)

<hr>

<h1 align="center">Cap: 📜 [Advanced ES6] Enhanced Object Literals 🚪</h1>
<p>A maneira clássica de escrever objetos literais é como o exemplo abaixo:</p>

### Exemplo 1:
![12](https://user-images.githubusercontent.com/61624336/107830786-592d4780-6d6b-11eb-8c24-e0e94809995b.jpg)

### Exemplo 2:
![12](https://user-images.githubusercontent.com/61624336/107836537-4cfdb600-6d7c-11eb-918d-737ba9c555a9.jpg)

### Exemplo 3:
![12](https://user-images.githubusercontent.com/61624336/107836713-da410a80-6d7c-11eb-8d41-3e8bf5816bcb.jpg)

## Exemplo 4:
![12](https://user-images.githubusercontent.com/61624336/107837290-f80f6f00-6d7e-11eb-8d69-3f6dc03a453f.jpg)

## Exemplo 5:
![12](https://user-images.githubusercontent.com/61624336/107837462-ad422700-6d7f-11eb-9162-b1b192f6e493.jpg)

## Exemplo 6:
![12](https://user-images.githubusercontent.com/61624336/107837659-d0210b00-6d80-11eb-97b7-4af6ee7bebd8.jpg)

## Exemplo 7:
![12](https://user-images.githubusercontent.com/61624336/107838209-838aff00-6d83-11eb-8ba5-d870e63bbb4f.jpg)

<hr>

<h1 align="center">Cap: 📜 [Advanced ES6] Rest, Spread Operator e destructing 🧵</h1>
<p>Observe a função abaixo:</p>

### Exemplo 1: Função normal
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860456-2a23de00-6e1e-11eb-855e-32fda75ca282.jpg)

### Exemplo 2: Função com vários argumentos (método antigo do ES6)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860550-956db000-6e1e-11eb-8b96-8860230d10d3.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860612-e67da400-6e1e-11eb-88ad-5ca7851216a3.jpg)

### Exemplo 3: Suponhamos que precisamos fazer uma soma com muitos algarismos em um índice.
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107860767-f2b63100-6e1f-11eb-87f2-1b868dc34e52.jpg)

## Rest Operator
<p>Escreve com <code>...</code> antes do parâmetro e ele traz métodos de array para manipular os seus argumentos. Quando o rest operator é utilizado nos argumentos de uma função, além da lista de argumentos, ele também traz os métodos e propriedades de array por ser uma instância de um array.
</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107861077-0f536880-6e22-11eb-97fd-8c6aeeb3c604.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107861989-58a6b680-6e28-11eb-9887-03679ec3d5ca.jpg)

### Exemplo 3: Ele pega parâmetros restantes na função transformando o Rest em um array
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107862224-2b5b0800-6e2a-11eb-94ec-fed4235adfe9.jpg)

### Exemplo 4:
<pre>
  function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,5,2,3));
</pre>

### Exemplo 5: Integrar uma função com a outra
<pre>
const multiply = (...args) => args.reduce((acc, value)) => acc * value, 1)

const sum = (...rest) => {
   return multiply.apply(undefined, rest); // método apply serve para integrar uma função com a outra
};

console.log(sum(5,5,5,2,3));
</pre>

## Spread Operator
<p>Escreve-se da mesma forma que o Rest Operator, porém seu funcionamento é diferente do Rest Operator. No sentido de que o Rest Operator pega todos os parâmetros da função e transforma em um array, no caso do Spread Operator ele pega todos os itens do array e transforma em parâmetro na segunda função. 
  
Ele pode ser usado em Strings, Arrays, Objetos Literais e Objetos Iteráveis. Só pode usar o Spread em objetos literais não iteráveis. Que no caso é para construir novos objetos. Além disso, a ordem de cada objeto importa durante a execução! Ao construir um objeto literal a partir de outro, utilizando o spread operator, a ordem é importante pois a ordem define quais valores das chaves com o mesmo nome irão prevalecer.

A forma de combinar dois arrays utilizando spread operator: <code>[...arr1, ...arr2];</code></p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107887976-9f5be580-6ee8-11eb-9cf6-3ce4ac782fcb.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107888274-ff9f5700-6ee9-11eb-85f0-c80852a5a6e4.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107889507-d1257a00-6ef1-11eb-8e2a-907b708eb0df.jpg)

### Exemplo 4:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/107890402-b524d700-6ef7-11eb-8e02-0a2dfccc1244.jpg)

### Exemplo 5: Shallow Clone
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890742-421c6000-6ef9-11eb-842b-503c672612b6.jpg)

### Exemplo 6: Shallow Clone - um Subobjeto gerando um Spread 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107890903-3715ff80-6efa-11eb-96aa-9729858c47a4.jpg)

## Destructuring
<p>Ao trabalhar com JavaScript, em vários cenários a gente acaba pegando partes de variáveis e atribuindo a outras variáveis. No entanto, quando alteramos a variável não alteramos o objeto diretamente. O destructuring pode ser usado em <b>nested objects</b> (objetos aninhados).</p>

### Exemplo 1: Destructuring Assignment
Como fazer um destructuring assignement em um array (arr), atribuindo o valor do seu primeiro índice para uma constante teste? <code>const [ teste ] = arr;</code>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/107895032-954ddd00-6f10-11eb-9d33-0baeb7699fc8.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107977872-9deaf580-6f9a-11eb-8095-1b8a6ec3f13f.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107981757-7a777900-6fa1-11eb-8dc2-dd87a46f9dbf.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107983661-0343e400-6fa5-11eb-8f17-d8f317f5e668.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107987656-2d010900-6fad-11eb-9eb4-8285fb45b2d8.jpg)

### Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107988292-730a9c80-6fae-11eb-8097-b1f5f4676e9c.jpg)

### Exemplo 7:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992677-f381cb00-6fb7-11eb-9165-17e912895dab.jpg)

### Exemplo 8:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107992876-65f2ab00-6fb8-11eb-8e5b-25a5d4833225.jpg)

### Exemplo 9:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993011-b8cc6280-6fb8-11eb-90c1-855402953cad.jpg)

### Exemplo 10:
É possível combinar default function arguments com destructuring? Sim, sempre que necessário podemos utilizar os dois, respeitando as regras de ambos.
 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/107993918-58d6bb80-6fba-11eb-95db-6ccf6906bc8d.jpg)
<hr>

<h1 align="center">Cap: 📜 [Advanced ES6] Generators ⚗️</h1>

## Symbols
<p>Possui uma maneira de gerar um identificador único e a forma de gerar esse identificador é invocando o Symbol.</p>

### Exemplo 1:
O valor do Symbol não é texto, uma String, não é um número e etc. Ele é único, sem ser desenhado ou descrito e ele passa metapropriedades aos seus objetos!

![Sem Título-1](https://user-images.githubusercontent.com/61624336/108003495-c17d6280-6fd1-11eb-8588-e5f4734f9e73.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108004884-eb388880-6fd5-11eb-8f8a-1e0e22e1aeef.jpg)

### Exemplo 3: Comparando identificação
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108005058-613cef80-6fd6-11eb-82fd-572cfe36ccca.jpg)

### Exemplo 4: Gerando propriedade privada
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108078963-085c6e00-704d-11eb-8725-bd9ca4f9e0e1.jpg)

## Propriedades do Symbols
<p>Você pode modificar o symbols com as suas propriedades.</p>

### Exemplo 1: Well known Symbols
<pre>Symbol.</pre>

### Exemplo 2: Symbol.iterator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110433-01942200-7072-11eb-82fc-0cb89d4bd139.jpg)

### Exemplo 3: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108110892-b29abc80-7072-11eb-8427-90d9d5a19aba.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128558-acfda080-708b-11eb-8d36-6620acb0795e.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108128879-30b78d00-708c-11eb-96e1-21293b9dbda9.jpg)

<hr>

<h1 align="center">Cap: 📜 [Advanced ES6] Aprenda sobre Generators e onde utilizá-los ⚗️📖</h1>
<p>Generators são funções com pausa e elas despausam valores através da interface de iteração.</p>

### Exemplo 1: Função normal
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108135713-5f873080-7097-11eb-952d-d8b58cbf49e6.jpg)

### Exemplo 2: Função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108136352-ac1f3b80-7098-11eb-8bbc-f27b8b0d1fb7.jpg)

### Exemplo 3: Ordenando a função Generator
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108256890-cf032b80-713c-11eb-923d-9198cf0917d3.jpg)

### Exemplo 4: 
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108260107-abda7b00-7140-11eb-9ae2-6225c4d1139d.jpg)

### Exemplo 5:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108264459-51441d80-7146-11eb-829c-89dfc1ed4288.jpg)

### Exemplo 6:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108269391-ac790e80-714c-11eb-8f4c-bb0d9b840eed.jpg)

<hr>

<img src="https://devsamurai.com.br/wp-content/uploads/2019/08/you-dont-know-js.png">
