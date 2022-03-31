# <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" height="30"> It's a repository of Vanilla JS programming 🍦🏵️📜

<blockquote>I created this repository for my Vanilla JavaScript (Imperative paradigm) learning.</blockquote>

<a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://lauthieb.github.io/assets/img/vanillajs.png" title="Full-Stack JS Development"/></a><br>

<blockquote><b>⚠️ WARNING</b>: It's very important to install each one of components shown and to execute the codes on your own machine. Besides that, please note that repository is only focused in JavaScript development, if you want to learn about HTML5, CSS3 or JS Frameworks i recommend to access another repositories, click on links bellow!</blockquote>

<hr>

# 📜 Vanilla JavaScript 🍦
<div align="center"><a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://i.etsystatic.com/13517909/r/il/e028cc/1802571151/il_fullxfull.1802571151_kie1.jpg" title="Full-Stack JS Development" width="100%"></a></div>

O termo "Vanilla", traduzido como "baunilha", nada mais é do que um sarcasmo para o **JavaScript puro**. Ou seja, muitos podem achar que se trata de uma biblioteca, pacote, módulo ou framework, mas não...é o bom e velho JavaScript.

E como estamos envolvendo o JavaScript puro, por que não utilizar esse branch pra se tratar do paradigma imperativo/ procedural da linguagem? Embora, ela ainda seja orientada a objetos e tudo dentro dela é considerado um objeto.

# 📜 Paradigmas de programação 🍦🏵️

<div align="center"><a href="https://github.com/IsaacAlves7/javascript-programming"><img src="https://user-images.githubusercontent.com/61624336/131275306-bf9c13fa-c430-4e42-8140-304659aafeec.png" width="1700"/></a></div><br>

Com o paradigma imperativo iremos aprender sobre tipos de valores e dados, variáveis, arrays, matrizes, estruturas condicionais, loops e funções.

# 🍦 Paradigmas Imperativo/ Procedural 🍦
<div align="center"><img src="https://javadesde0.com/wp-content/uploads/vanilla-js.png" width="1700"></div>

## ECMAScript

# 🍦 Paradigma Orientado a Objetos 🍦
<div align="center"><img src="https://island-babygirl.netlify.app/static/vanilla-javascript-2020-12-21-a8fed159636cfdc69d52747b36274843.png" height="277"></div>

## BOM/ DOM

# 🍦 Paradigma Funcional 🍦
<div align="center"><img src="https://www.webdesignemfoco.com/img/files/original/375024-curso-de-javascript-vanilla-l.jpg"></div>

## Lambda

# 🍦
<div align="center"><img src=""></div>

<hr>

Iremos construir um mapa totalmente interativo utilizando a fantástica biblioteca do Leaflet.

Cada ponto no mapa será gerenciado através de um CMS na cloud chamado GraphCMS e iremos utilizar o NextJS para criar a melhor experiência para o usuário e também para você, desenvolvedor!

Para fazer tudo isso, nós iremos ensinar todos os fundamentos das ferramentas da teoria à prática, sem deixar nenhum detalhe para trás.



# 📜 Primeiros comandos com JavaScript 🖥️
<img src="https://coursework.vschool.io/content/images/size/w2000/2016/03/javascript-logo-banner.jpg"/>
<p>Trabalhar com JavaScript é simples, não será necessário nenhuma ferramenta mirabolante ou difícil de conseguir. Basicamente iremos precisar de um editor de texto e de um navegador. Apesar de poder rodar JavaScript em outros locais, até mesmo no console, optaremos por utilizar o <a href="https://code.visualstudio.com/download">VSCode</a>, por ser um ambiente onde a maioria dos desenvolvedores já está familiarizado, seja por utilizar outras linguagens ou simplesmente por abrir um localhost no navegar na web (preview), e também por ser ter muitas ferramento para o desenvolvimento JavaScript.</p>
<blockquote>👍 <b>Dica:</b> Caso já tenha familiaridade com editores de texto ou IDE’s mais robustas, sinta-se à vontade para utilizá-los, pois o JavaScript é independente do editor. Somente certifique-se de que o navegador utilizado lhe dará o devido suporte.</blockquote>

## 🖥️ Hello, World! 🔡
<p>Primeiramente, crie um documento HTML, nomeie-o como “index.html”.</p>

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/102241134-64810580-3ed7-11eb-9686-6ec2dde4c61a.jpg)

<p>Agora, existem duas maneiras de criar um documento JS:</p>

### 📜 No body 🥼
[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/102247838-3dc6cd00-3edf-11eb-8302-f77de2b3348d.jpg)

### 📜 No head 🥽
[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/102253843-a2d1f100-3ee6-11eb-9d1b-016921aae815.jpg)

<blockquote><b>Obs:</b> Carrega o script primeiro antes do body, o que é mais ideal!</blockquote>

### 📜 Opcional (No arquivo) 📜
<p> Outra maneira válida é criar um documento com a extensão <b>.js</b>, é separando ele e linkar-lo no documento HTML. A fonte do link pode ser chamada tanto no &lt;head&gt; como no &lt;body&gt;.</p>

[![HTML5](https://img.shields.io/badge/-index.html-000000?style=social&logo=HTML5&logoColor=orangered)](#)
![Sem Título-3](https://user-images.githubusercontent.com/61624336/102267944-5e038580-3ef9-11eb-89bb-4191481918f6.jpg)

<p>o comando <code>alert();</code> exibe uma janela pop-up no navegador que revela o conteúdo inserido dentro do parêntese, pode ser uma variável ou um texto (entre aspas).</p>

[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-5](https://user-images.githubusercontent.com/61624336/102268266-dec28180-3ef9-11eb-9183-e3654f1f982b.jpg)

<p>Dessa forma, é possível diminuir a quantidade de linhas de código no seu arquivo HTML, porém deixa o seu website mais pesado com a quantidade de scripts. 
  
Próximo passo, execute o documento index.html. Resultado:</p>

[![Brave](https://img.shields.io/badge/-Console-fff?style=social&logo=Brave&logoColor=orangered)](#)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/102268834-8cce2b80-3efa-11eb-9e41-71f1ac458d69.jpg)

<blockquote>O script funcionou perfeitamente!</blockquote>

<p>Para acessar o console, pressione a tecla <b>F12</b> do seu teclado, você será redirecionado as ferramentas de desenvolvedor do seu navegador, vá até console, lá você poderá fazer alterações ou até programar.

Nesse caso, para exibir resultados ou mensagens no console do navegador utilize o comando <code>console.log()</code>, ele possui uma função semelhante ao <code>alert</code>, porém somente exibe no console, enquanto o <code>alert</code> exibe ao usuário.</p>

[![Brave](https://img.shields.io/badge/-Console-fff?style=social&logo=Brave&logoColor=orangered)](#)

<div align="center">

![Sem Título-2](https://user-images.githubusercontent.com/61624336/102270246-8ccf2b00-3efc-11eb-8654-99d6a6171eeb.jpg)

</div>
<p>Outros comandos para serem executados em janela:</p>
<ul>
  <li><code>window.alert()</code> janela ok;</li>
  <li><code>window.confirm()</code> janela ok e cancel;</li>
  <li><code>window.prompt()</code> janela com textbox e ok.</li>
</ul>

## 📜 Comentários 🗒️
[![JavaScript](https://img.shields.io/badge/-main.js-000000?style=social&logo=JavaScript&logoColor=yellow)](#)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/102369729-0ae20f00-3f9b-11eb-94c3-d33c143605b9.jpg)

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

<h1 align="center">📜 Eventos 📙🎪</h1>
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103578048-a852a380-4eb4-11eb-9d65-5fb88a47469a.jpg"/></div>
<p>São fatos que ocorrem durante a execução do sistema, a partir dos quais o programador pode definir ações a serem realizadas pelo programa.</p>
<p>Um evento é gerado como resultado de uma ação: Um clique, um movimento do mouse, uma seleção de texto, o abandono da página etc. A <b>associação</b> é realizada em HTML nos
  elementos que suportam eventos do tipo Event através dos <b>atributos onEvent</b>.</p>

## Exemplo 1: Executando um evento
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103590963-92051180-4ecd-11eb-8db0-e7a8cdce8a9f.jpg)

## Exemplo 2: Chamada de função por evento
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103591717-a9dd9500-4ecf-11eb-855a-fb88ffcd7f4b.jpg)
![Sem Título-12e2](https://user-images.githubusercontent.com/61624336/103591719-aa762b80-4ecf-11eb-822f-fcd9114180c2.jpg)

<hr>

# 📜 Dia do Programador 🎂
![js](https://user-images.githubusercontent.com/61624336/112912839-edaaf980-90ce-11eb-9d72-9578fbfffbbf.jpg)

<hr>

## JS Modulos
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s---6YkRB3I--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6nvkj71v011m7yr9xog1.png">

## 📜 Web Dev Stacks 🔋
Iremos utilizar todos! Mais pra frente.

![36ed3e0f-5344-4a7e-b807-e6104c6d63be](https://user-images.githubusercontent.com/61624336/117226732-ad384d00-adeb-11eb-8d91-e3ea47b6050b.jpg)

<hr>












<!--  

-->
