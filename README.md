# <img src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" height="30"> It's a repository of jQuery Framework Development 📜🔢

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

## 📙 Lista de Eventos 🎪
<p>Funciona com quase todas as tags html, exceto: &lt;br&gt;, &lt;head&gt;, &lt;html&gt;, <script>, <style>, <title>.</p>
<table>
  <tr>
    <td><b>Evento</b></td>
    <td><b>Função do evento</b></td>
    <td><b>Compatibilidade com as tags HTML</b></td>
  </tr>
  <tr>
    <td>onclick</td>
    <td>Clique com botão esquerdo do mouse</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>ondblclick</td>
    <td>Duplo clique com botão esquerdo do mouse</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onmousedown</td>
    <td>Botão do mouse pressionado</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onmouseup</td>
    <td>Botão do mouse libertado</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onmouseover</td>
    <td>Mouse sobre o objeto</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onmousemove</td>
    <td>Mouse movido do objeto</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onmouseout</td>
    <td>Mouse saiu do objeto</td>
    <td>Todos os elementos</td>
  </tr>
   <tr>
    <td>onwheel</td>
    <td>Rolar (pra cima ou pra baixo) a roda do mouse sobre um elemento</td>
    <td>Todos os elementos</td>
  </tr> 
  <tr>
    <td>onkeydown</td>
    <td>Tecla pressionada</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onkeypress</td>
    <td>Tecla pressionada e liberada</td>
    <td>Todos os elementos</td>
  </tr>
    <tr>
    <td>onkeyup</td>
    <td>Tecla liberada</td>
    <td>Todos os elementos</td>
  </tr>
  <tr>
    <td>onload</td>
    <td>Ocorre na carga do documento</td>
    <td>&lt;body&gt;</td>
  </tr>
  <tr>
    <td>onunload</td>
    <td>Ocorre na descarga (saída) do documento</td>
    <td>&lt;body&gt;</td>
  </tr>
   <tr>
    <td>onchange</td>
    <td>Ocorre quando o objeto perde o foco e houve mudança de conteúdo</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
  <tr>
    <td>onfocus</td>
    <td>Quando um campo de entrada obtém o foco</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
  <tr>
    <td>onblur</td>
    <td>Quando um usuário sai de um campo de entrada</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
  <tr>
    <td>onsubmit</td>
    <td>Quando um usuário clica no botão de submeter</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
  <tr>
    <td>onselect</td>
    <td>Quando um input text é selecionado</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
  <td>onreset</td>
    <td>Quando o usuário clica no botão reset</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
  <tr>
    <td>onresize</td>
    <td>Quando a janela do navegador é redimensionada</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
    <tr>
    <td>onerror</td>
    <td>Quando um erro ocorre quando carrega a imagem</td>
    <td>&lt;text&gt;, &lt;select&gt; e &lt;textarea&gt;</td>
  </tr>
</table>

## Exemplo 1:
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103608061-32246000-4ef9-11eb-99c9-c64aa54ce655.jpg"/></div>

## 🏋🏾‍♂️ Exercício: Troca de images por eventos
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/103964080-51a9cb80-5139-11eb-8a2b-f03f6be7fd2e.jpg"/></div>
<hr>

<h1 align="center">📜 Desmistificando map, filter e reduce 🗺️🗾🗻</h1>
<p></p>
<hr>

<h1 align="center">📜 Como funciona o async/await 🦽🦼</h1>
<hr>

<h1 align="center">📜 Entendendo Promises de uma vez por todas 🎫</h1>
<div align="center"><a href="https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2"><img src="https://miro.medium.com/max/1366/0*qd397CiUFnmsbH2H.png" height="170" title="Read the Blog"></a></div>
<p>Promises são um conceito essencial do JavaScript. Elas estão presentes em praticamente todo o ecossistema da linguagem e possui um fluxo assíncrono.</p>

## Código Síncrono 📘📕📗📙
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108409670-47352400-7205-11eb-9c42-680936e0b426.jpg)

<p>Pensamos de forma linear e sincronamente. A maioria das linguagens de programação trabalha de forma assíncrona, pois a maioria trabalha com internet e quando fazemos requisições, e essas coisas são assíncronas.

De acordo com a imagem acima você precisa calcular o tempo, que no caso são 9s de execução. As vantagens desse fluxo é que você não usará muitos casos de uso, entre outras palavras muito fluxo de código de uma vez só.</p>

## Promises
<p>As promises são muito necessárias porque paralelalizam cada componente do site, ou seja, os arquivos HTML, CSS e JS funcionam de maneira paralela.</p>

## Código Assíncrono 📚
- Requests HTTP
- Leitura de arquivos
- Acesso a serviço externo
- I/O

![Sem Título-1](https://user-images.githubusercontent.com/61624336/108413280-967d5380-7209-11eb-8b64-3dbf1f3f79c5.jpg)

<p>No código assíncrono, ao invés de ter o fluxo seguindo um de cada vez, teremos na verdade todas as quatro requisições que fizemos ao mesmo tempo e o tempo total será da maior Promise, que é o tempo que demorou a maior requisição acontecer. Então, isso reduz drasticamente o tempo de execução do seu código e isso também ajuda você poder otimizar o tempo que você está tendo na hora de fazer alguma requisição de dados.</p>

## 🎫 Promises no Node.js 🟩
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108413712-1b686d00-720a-11eb-8656-f5d9e6d3fe46.jpg)

<p>Fez uma requisição e ela não vai terminar agora, vai demorar um pouco para essa requisição ser concluída. Ao realizar a requisição ela vai ser redirecionada ao Event Loop seu posicionamento principal e a Função de Callback. Logo em seguida vai registrar essa função de Callback em uma fila, essa função ficará registrada. 
  
Quando a sua operação principal acabar, ela vai chamar a sua função de Callback, enquanto isso ela vai ficar tudo rodando na sua aplicação. Em casos de ler arquivos mais pesados, como de 2GB por exemplo, você não precisa parar o processamento inteiro para ler o arquivo inteiro e depois voltar, portanto isso é uma das grandes vantagens.</p>

## 📜 Exemplo 1: Requisição com Promises (Asynchronous Reading) 🎫📖
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108542870-0c91c100-72c3-11eb-8cac-2552152dab53.jpg)

## Exemplo 2: Ler estrofes de cada vez
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108577334-70d27600-72ff-11eb-908b-5dc638abf445.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108577995-a166df80-7300-11eb-8559-20182c3e916a.jpg)

## Exemplo 3: funções síncronas e função assíncrona
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108634904-bfe0ee00-745a-11eb-8112-c1d9d6434303.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108634949-1a7a4a00-745b-11eb-8270-733a2a529a63.jpg)

## Exemplo 4: Função de Callback Assíncrona
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108637266-a777d000-7468-11eb-8d11-c0257fea5ab4.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/108637403-3684e800-7469-11eb-91ba-dc91bb88b202.jpg)

<hr>

<h1 align="center">📜 Browser Object Model (BOM) 🧙‍♀️</h1>
<div align="center"><img src="https://cdn.splessons.com/wp-content/uploads/2016/03/javascript-bom-01-splessons-1.png"/></div>
<p>Anteriormente, no capítulo 15 foi apresentado a <a href="https://github.com/IsaacAlves7/javascript-programming/blob/master/README.md#-hierarquia-de-objetos-">hierarquia de objetos</a>, porém sem uma explicação bem aprofundada somente uma introdução rasa para informar mais sobre a ordem de objetos. Portanto, nesse capítulo e no 18 serão apresentados o <b>BOM</b> e o <b>DOM</b> que estão por trás da hierarquia de objetos. 
  
Quando abrimos o navegador e carregamos uma página automaticamente é criado um objeto. Do mesmo modo como representa o gráfico acima. Agora vamos nos aprofundar mais nos objetos do BOM:</p>

## 🧙‍♀️ [BOM] Window 🪟
<p>O objeto <code>window</code> está no topo do gráfico de árvore, pois contém propriedades que se aplicam em toda janela (<code>document</code>, <code>screen</code>, <code>navigator</code>, <code>history</code>, <code>location</code>, <code>frames[]</code>, <code>event</code>, <code>packages</code>). Serve para manipular e relatar informações da janela, entre outras palavras, mesmo ele sendo omitido, ele manipula toda a interface!</b>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103841269-eba64100-5071-11eb-8e5c-6e1ac669edb7.jpg)

### Exemplo 2:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/103841323-0b3d6980-5072-11eb-8e2f-e1c6d19d208b.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103841618-c108b800-5072-11eb-8667-b1491e68cec8.jpg)

## 🧙‍♀️ [BOM] Screen 📺
<p>O objeto <code>screen</code> serve para relatar e manipular informações sobre a tela ou resoluções.</p>
  
### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103902455-5179e380-50d9-11eb-8984-b99af8bde485.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103915472-04ead400-50ea-11eb-9830-c5f2159b0f2f.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103959439-72205880-512e-11eb-86db-bff3dffb3dfe.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103959630-fd015300-512e-11eb-95af-734809579b88.jpg)

## 🧙‍♀️ [BOM] Navigator 🌐
<p>O objeto <code>navigator</code> serve para relatar e manipular informações sobre o navegador.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103959950-d7287e00-512f-11eb-8f0a-6a701a08f070.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103960056-1ce54680-5130-11eb-8a19-935547e7da48.jpg)

### Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103961126-954d0700-5132-11eb-95c2-50717b59faef.jpg)

### Exemplo 4:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103961260-e0671a00-5132-11eb-8ad4-77f07a7817c0.jpg)

## 🧙‍♀️ [BOM] Location 🏘️
<p>O objeto <code>location</code> serve para manipular e relatar informações sobre localizações de arquivos, endereços e entre outros.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103961996-86ffea80-5134-11eb-910b-13257c01eae9.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103962672-45703f00-5136-11eb-8fac-9e1311340704.jpg)

### Exemplo 3: Redirecionamento de endereços
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103963054-1e663d00-5137-11eb-985a-8f804862788f.jpg)

## 🧙‍♀️ [BOM] History 🏛️
<p>O objeto <code>history</code> serve para manipular e relatar informações sobre o histórico de modificações, páginas anteriores ou páginas posteriores e entre outros.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103965701-16a99700-513d-11eb-8ed8-efeeae80456f.jpg)

### Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103965538-aac72e80-513c-11eb-8a43-26870473f84c.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/103966281-56bd4980-513e-11eb-96be-c7d111c1947b.jpg)

## 🧙‍♀️ [BOM] Document [DOM] 🧙‍♂️
<p>O objeto <code>document</code> serve para manipular qualquer tipo de documento exibido na janela, tais como o seu conteúdo, título, cores, etc. Esse objeto faz parte do BOM e do DOM.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104108400-162b1080-52a3-11eb-817e-dea483ffeb6e.jpg)

## 🧙‍♀️ BOM + DOM 🧙‍♂️
<p>Já sabemos que BOM e DOM andam juntos para revelar, manipular ou invocar um determinado elemento através dos seus objetos. Vejamos um exemplo dessa união:</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104027984-e991ce80-51a6-11eb-9f1e-5d6169402e77.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104028100-134af580-51a7-11eb-9ccb-492b54770e3e.jpg)

<p>Vamos entender como funciona esse exemplo da união do DOM com o BOM. Nosso objetivo é exibir a largura da janela por 3 formas, pelo console, pela janela de alerta e pela janela do navegador!</p>

<p>Primeiro passo, é criado o elemento <code>&lt;div&gt;</code> no index.html, com o atributo <code>id=""</code> nomeado <b>largura</b> (&lt;div id="largura"&gt;&lt;/div&gt;), o elemento está completamente vazio, sem a existência de outros elementos dentro dele.</p>

<p>Segundo passo, é criado os comandos <code>console.log();</code> e inserido o objeto do BOM <code>screen.width</code> (console.log(screen.width);).</p>

<p>Terceiro passo, é criado o comando <code>alert();</code> e inserido o objeto do BOM, novamente, <code>screen.width</code> (alert(screen.width);).</p>

<p>Quarto passo, é criado o comando BOM/DOM <code>document</code>, em seguida, o método <code>getElementById()</code> esse objeto do DOM serve para pegar a referência do id selecionado no documento html, no caso "largura".</p>

<p>Logo, <code>document.getElementById("largura")</code>, em seguida, adicionamos o atributo <code>innerHTML</code> que permite a inserção de qualquer elemento e tag html no documento HTML.</p> 
  
<p>Dessa forma, <code>document.getElementById("largura").innerHTML</code>, mas ainda nosso comando não está finalizado, falta o conteúdo que iremos inserir, o mesmo que inserimos no console e na janela de alerta, só que nesse atributo é um pouco diferente dos demais, ele precisa do operador de atribuição de valor <code>=</code>.</p>

<p>E assim finalizamos, <code>document.getElementById("largura").innerHTML = screen.width;</code></p>

<p>O último passo é abrir o documento no navegador.</p>
<hr>

<h1 align="center">Cap 18: 📜 Document Object Model (DOM) 🧙‍♂️</h1>
<img src="https://miro.medium.com/max/3392/1*mMmuOhNytgqP7lrU9HPTpw.jpeg"/>

<p>Essa é a estrutura do DOM (Document Object Model) que chamamos de "árvore DOM" pela semelhança com o formato da árvore ou raízes da árvore. O DOM também é um objeto do BOM e serve para manipular os elementos de uma página html, como links, divs, imagens, textos etc.</p>

<div align="center"><img src="https://miro.medium.com/max/740/1*Uedjd1Z-EMdhPgqYLlAjow.png"/></div>

## Exemplo 1:

<hr>
<h1 align="center">Cap 19: 📜 [DOM] getElementById | getElementsByClassName 🧙‍♂️🔮</h1> 

## 🧙‍♂️ [DOM] getElementById 🔮
<p>O método <code>getElementById</code> permite a inserção do id para a execução de outros comandos.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104048649-59fa1900-51c2-11eb-85ac-8d21e1a836d1.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104048991-ead0f480-51c2-11eb-8ae4-b39bdc2a70d1.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104049223-5f0b9800-51c3-11eb-9ebd-4562da09740f.jpg)

## 🧙‍♂️ [DOM] getElementsByClassName 🔮🔮
<p>O método <code>getElementsByClassName</code> diferente do <code>getElementById</code> nos permite a inserção de mais elementos pelo, atributo HTML, class.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104052254-3043f080-51c8-11eb-818b-bc891d6fdf9e.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104052466-89138900-51c8-11eb-9efb-0d3b8aaf9dec.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104052363-5f5a6200-51c8-11eb-9588-78bf5543d1f5.jpg)

### Exemplo 2: HTMLCOLLECTION [Ordem de índices]
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104053726-85810180-51ca-11eb-8762-3ad0c06046cc.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104054013-0b04b180-51cb-11eb-8532-e3bb91892c55.jpg)

<hr>

<h1 align="center">Cap 20: 📜 [DOM] getElementByTagName | querySelector 🧙‍♂️✨</h1> 

## 🧙‍♂️ [DOM] getElementsByTagName ✨✨
<p>O método <code>getElementsByTagName</code> permite a inserção de mais elementos pelas tags do HTML. Esse método é similar ao <code>getElementsByClassName</code>.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104055781-14dbe400-51ce-11eb-842c-9d3c3203376e.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104058100-f841ab00-51d1-11eb-9d17-de158e5edd3f.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104060690-0abde380-51d6-11eb-8f22-bfc7129c4ae1.jpg)

## 🧙‍♂️ [DOM] querySelector ✨
<p>o método <code>querySelector</code> retorna sempre o primeiro elemento que ele encontrar, ou seja, ele pode inserir pela tag, id e  class. No entanto, ele não retorna o <i>HtmlCollection</i>, ele serve somente para um elemento.</p> 

### Exemplo 1:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104083683-6f516080-521f-11eb-9ce3-97ba7fd6fadc.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104083690-72e4e780-521f-11eb-9eab-34cc69bef689.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104083764-0f0eee80-5220-11eb-9c3c-45cd963f6625.jpg)

<hr>

<h1 align="center">Cap 21: 📜 [DOM] querySelectorAll 🧙‍♂️🎇</h1>
<p>O método <code>querySelectorAll</code> retorna uma lista de elementos presentes no documento (<i>NodeList</i>).</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104094356-4062db00-526f-11eb-9183-4f62ee35746e.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104094358-422c9e80-526f-11eb-81c4-82774a9dbb62.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104095612-91c29880-5276-11eb-9a4d-ca1452410d1a.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104100745-f92f1700-527b-11eb-90d7-e3e144458cab.jpg)

<hr>

<h1 align="center">Cap 22: 📜 [DOM] innerHTML, Style e Atributos 🧙‍♂️🌬️</h1>

## 🧙‍♂️ [DOM] innerHTML 🌬️
<p>O atributo <code>innerHTML</code> permite a inserção de qualquer elemento e tag html no documento HTML.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104109399-37dcc580-52ac-11eb-90b9-6bde6562c39c.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104108874-2349fe80-52a7-11eb-8e3d-6f34be76d884.jpg)

### Exemplo 2:
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104108934-8e93d080-52a7-11eb-8783-d8db0a19534a.jpg)

## 🧙‍♂️ [DOM] Atributo style 📘
<p>O atributo <code>style</code> permite a inserção de estilo CSS do tipo inline.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104109399-37dcc580-52ac-11eb-90b9-6bde6562c39c.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104109190-38745c80-52aa-11eb-86c2-17016550646d.jpg)

## Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104109257-d9631780-52aa-11eb-91f0-1c03d70783b5.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104110698-f3a3f200-52b8-11eb-912b-c23c25eaf0d5.jpg)

## Exemplo 3:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104111009-3a471b80-52bc-11eb-9e28-7d4ed975b4dd.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104111033-7f6b4d80-52bc-11eb-9c4b-c1f94730a8fb.jpg)

## Exemplo 4: Imagens
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104132661-8bf3b280-535d-11eb-831a-3a46b91d5302.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104132659-8c8c4900-535d-11eb-94df-2d39416baef7.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104132743-0e7c7200-535e-11eb-97ad-033fb39611cd.jpg)

## 🧙‍♂️ [DOM] Atributo write ✍️
<p>O atributo <code>write</code> serve para escrever um novo elemento no documento HTML.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104043730-ff10f380-51ba-11eb-9877-f0d4e1d751b2.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104043736-00dab700-51bb-11eb-8190-97dd471764d6.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104044235-caea0280-51bb-11eb-9c69-4f67bfbc2a7b.jpg)

## 🧙‍♂️ [DOM] Atributo lastModified 🕵️
<p>O atributo <code>lastModified</code> serve para mostrar o período da última modificação do elemento.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104048044-68940080-51c1-11eb-9837-91bea05f8547.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104048338-d5a79600-51c1-11eb-92d8-61fed89e89ca.jpg)

<hr>

<h1 align="center">Cap 23: 📜 [DOM] createElement 🧙‍♂️🥚</h1>
<p>O método <code>createElement</code> serve para criar elementos HTML.</p>

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104133591-476b1580-5363-11eb-8fb7-d7fb43b826ea.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104133809-aa10e100-5364-11eb-9ded-84021adf720f.jpg)

## Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104134740-5acdaf00-536a-11eb-8604-a5682cb6221f.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104134738-599c8200-536a-11eb-88bb-9e72c03c8145.jpg)

<hr>

<h1 align="center">Cap 24: 📜 [DOM] appendChild | removeChild 🧙‍♂️🐲💥</h1>

## 📜 [DOM] appendChild 🧙‍♂️🐲
<p>O método <code>appendChild</code> serve para revelar a criação do elemento filho, <code>createElement</code>.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104142226-65ec0380-5399-11eb-82f2-97c11635e4cb.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104142228-671d3080-5399-11eb-8895-7508b834df15.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104142390-2d98f500-539a-11eb-8732-975f5dfc47a7.jpg)

## 📜 [DOM] removeChild 🧙‍♂️💥
<p>O método <code>removeChild</code> serve para remover a criação do elemento filho, <code>createElement</code>.</p>

### Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104189577-9fecf200-53f9-11eb-8e34-15623fc41861.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104189852-02de8900-53fa-11eb-96dd-2f0c570d0bd4.jpg)

<hr>

<h1 align="center">Cap 25: 📜 [DOM] childNodes 🧙‍♂️👨‍👦‍👦</h1>
<div align="center"><img src="https://www.w3schools.com/js/pic_navigate.gif"/></div>
<p>Como vimos anteriormente, o DOM possui uma grande árvore com todos os elementos de uma página HTML, então, é interessante relacionar essa mesma árvore com uma árvore geneológica na qual o DOM é o pai e todos os elementos que descendem do <code>document</code> são filhos do DOM! No entanto, assim como na vida real, o DOM também tem primogênito e filho caçula.

## Exemplo 1:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104216904-6deb8800-5419-11eb-918c-10bc4fa68563.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104216893-6cba5b00-5419-11eb-9265-2001df78546b.jpg)

## Exemplo 2:
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104216904-6deb8800-5419-11eb-918c-10bc4fa68563.jpg)
![Sem Título-1](https://user-images.githubusercontent.com/61624336/104220046-b3aa4f80-541d-11eb-91ae-e7c89597d029.jpg)

<h2>Exemplo 3: Filhos do body (<i>NodeList</i>)</h2>

![Sem Título-1](https://user-images.githubusercontent.com/61624336/104220289-0ab02480-541e-11eb-8ee1-a914f987e0ba.jpg)
![Sem Título-2](https://user-images.githubusercontent.com/61624336/104220284-097ef780-541e-11eb-9fb3-2e7cf58d0ae3.jpg)

<blockquote><b>Obs:</b> Quando o <i>NodeList</i> retornar <code>#text</code> saiba que são os caracteres indefinidos como espaços ou comentários!</blockquote>
<hr>

<h1 align="center">Cap 26: 📜 [DOM] nodeName, nodeType, nodeValue 🧙‍♂️🩸</h1>
<p>Já aprendemos sobre o atributo <code>childNodes</code> e o <em>NodeList</em>, portanto agora iremos aprender como pegar o nome, tipo e valor de um item pertencente ao <em>NodeList</em>.</p>

## 🧙‍♂️ [DOM] nodeName 🩸
<p>O atributo <code>nodeName</code> pega o nome do item pertencente ao <em>NodeList</em>.</p>

### Exemplo 1:
![js](https://user-images.githubusercontent.com/61624336/104258122-af9e2200-545d-11eb-8b25-236825250ff7.jpg)

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

<h1 align="center">Cap: 📜 Aplicando conceitos Promises e Fetch 🎫🎟️</h1>
<p></p>

# 📜 Dia do Programador 🎂
![js](https://user-images.githubusercontent.com/61624336/112912839-edaaf980-90ce-11eb-9d72-9578fbfffbbf.jpg)

<hr>

<h1 align="center"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" height="27"> Desenvolvimento back-end com Node.js 🟩</h1>
<div align="center"><a href="https://nodejs.org/en/"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" height="270" title="Site do Node.js"/></a></div>

O **Node.js** é uma ferramenta para a execução de uma variedade de ambientes com JavaScript (JS). JavaScript had humble beginnings as a language that lived only in web browsers, but the Node.js project has expanded its reach and helped make it the most popular programming language in the world. Node.js extends the creative potential of people with web development experience, enabling a new generation of developers to create servers, command-line tools, desktop apps, and even robots.


## NPM Save
![1_h-dSq3-RIeA_UT1UbXBc7Q](https://user-images.githubusercontent.com/61624336/113332204-3e9d3680-92f7-11eb-884f-60aa13222aca.png)




## 📜 Web Dev Stacks 🔋
Iremos utilizar todos! Mais pra frente.

![36ed3e0f-5344-4a7e-b807-e6104c6d63be](https://user-images.githubusercontent.com/61624336/117226732-ad384d00-adeb-11eb-8d91-e3ea47b6050b.jpg)

<hr>












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































<!--
![JS Functional Programming](https://user-images.githubusercontent.com/61624336/103607708-52075400-4ef8-11eb-9f07-39ee85636a67.jpg)
![Hierarquia de Objetos JS](https://user-images.githubusercontent.com/61624336/103469686-b2569400-4d46-11eb-88fb-d615916b17c2.png)
https://miro.medium.com/max/1436/0*ILZZpnli_R1FU3p4.gif
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
 https://lh3.googleusercontent.com/proxy/j0oeG2ZkrtKivG2T_lS5nTTacmzZuMrkM4uYHQpSZjAIAfutP62Ua3RS6H7GFDp7t0OGD9HRTpRt4oEA2l7PXPYKb4bmlTQlEeHtjAbeVDsYv6IvHvR_i6gEyO9gYGxhQPAHV0rZGuNhZHPaud0EGan3xDfPYwRP_hpgAO
<img src="https://miro.medium.com/max/925/1*dax3Mf7KuL1rQ5-RKjN6_A.png" width="1000"/>
<img src="https://www.north-47.com/wp-content/uploads/2020/06/1_JA57AArvHLn3tulDxJKzEg.jpeg" width="1000"/>
<img src="https://miro.medium.com/max/816/0*jJba103A-9xmpTYq.jpg" width="1000"/>
<img src="https://www.ateamindia.com/wp-content/uploads/2018/10/JavaScript-1.jpg" height="450" width="1070"/>
<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/javascriptt-light_870x220.png?sfvrsn=f0bf46af_3" width="1700"/>
![image](https://user-images.githubusercontent.com/61624336/103486053-b5e72b00-4dd9-11eb-86bc-a7fca5cf664f.png)
<img src="https://www.islamzatary.com/wp-content/uploads/2017/09/advanced_js.jpg" width="1070"/>
<img src="https://cdn-media-1.freecodecamp.org/images/1*tBXQMulrsKL21K66SVQ5jA.png" width="1070"/>
<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/javascriptt2-light_1200x303.png?sfvrsn=cc305226_2" width="1070"/>
<img src="https://becode.com.br/wp-content/uploads/2018/04/frameworks-js2-1.png" width="1070"/>
<img src="https://miro.medium.com/max/2732/1*BPSx-c--z6r7tY29L19ukQ.png" width="1070"/>
<img src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/08/teste-de-performance-javascript.png" width="1070"/>
<img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/seleccionar-elementos-con-queryselector-t1.png" width="1070"/>
<img src="https://www.desarrollolibre.net/public/images/example/javascript/portapapeles_javascript.png" width="1070"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtTR_qc3VZrY4xPzLStpmYDXLT66ZdqLPkYw&usqp=CAU" width="1070"/>
<img src="https://cutewallpaper.org/21/javascript-wallpaper/JavaScript-Promises-JS.MD.png" width="1070"/>
<img src="https://bloggeek.me/wp-content/uploads/2017/09/201709-javascript-king.jpg" width="1070"/>
<img src="https://miro.medium.com/max/600/0*fPG6D58K9s_2l3kK.png" width="1070"/>
https://miro.medium.com/max/921/1*T8OsgpwsHL8Lj6gGlyTOtw.png
https://miro.medium.com/max/610/1*eSi3NuB9LTgO64VhWphnnw.png
https://cdn-media-1.freecodecamp.org/images/1*ReeHV0eEsfmMskVUk1vVog.png
https://es6.io/images/es6-sticker.png
<img src="https://techonria.files.wordpress.com/2016/07/arrow.png?w=785" width="1070"/>
<div align="center"><img src="https://onsen.io/blog/content/images/2015/Nov/es6-webcomponents.png"/></div>
<img src="https://media.vlpt.us/images/sangminnn/post/3b3e7fc8-d255-46df-92fb-71e91bcf2408/real%20es6.png" width="1700"/>
<img src="https://learnworthy.net/wp-content/uploads/2019/08/How-To-Learn-JavaScript-Quickly.jpg" width="1700"/>
<a href="https://jquery.com/"><img src="https://cdn1.vogel.de/kaNCYI0Lx-zrDezwq8BaF3cFGI8=/fit-in/1200x630/filters:format(png):quality(90)/images.vogel.de/vogelonline/bdb/1494700/1494776/original.jpg" width="1000"/></a>
https://blog.jscrambler.com/content/images/2016/12/iot_js-min.png
https://www.20i.com/blog/wp-content/uploads/2020/10/I-love-JavaScript-1920x500.png
https://www.loginradius.com/blog/async/static/bfdcec92226d9dd465af598836dd28a4/701ee/callback.jpg
https://media.proglib.io/wp-uploads/2018/11/1_hLSiwh3HW9Pqw0M3gLEMOg.png
https://miro.medium.com/max/653/1*wMZnVAEei1xbY1v6sAbYxQ.png
https://d23cpcfk0ihnyh.cloudfront.net/blog/posts/1-20-2018-async-await/async-await.png
https://twilio-cms-prod.s3.amazonaws.com/images/asyncawait.width-808.png
https://miro.medium.com/max/1570/1*TWVs8hNCI7B7t2Y4tA-u1A.png
https://images.idgesg.net/images/article/2018/04/iwan_05-100755063-orig.jpg
https://miro.medium.com/max/1117/0*X7Z0k20cwHHi8UOI.png
https://lh3.googleusercontent.com/proxy/jyBQYND60pqwD9ly0Halj3B8Xj0o86fZWi_PTpd2e3MGkM6YmH6_fuj4GoBZn83gARwttM3Be3z0ekcYr_BBL3-KGrwzhxsl12YsHs7P3MDGMvOKM2LOuUW1CIVZ1nFqpoCWjox7DPx_1g
https://www.sevenstarwebsolutions.com/wp-content/uploads/2018/02/nodejs.jpg
https://www.mobiloitte.com/images/node-js-banner.png
https://skeps.com/api/blog/content/uploads/2019/10/Node-JS-Banner.png
https://www.sevenstarwebsolutions.com/wp-content/uploads/2019/06/node-js-banner.png
https://viitorcloud.com/blog/wp-content/uploads/2018/06/Node-JS-App-Development-for-Business-cover.jpg
https://www.anques.com/wp-content/uploads/2019/07/node_js.png
https://daynilgroup.com/resources/images/nodejs_banner.png
https://miro.medium.com/max/2732/1*LyZcwuLWv2FArOumCxobpA.png
https://i.ytimg.com/vi/sCAR8ZPM6ew/maxresdefault.jpg
https://i.ytimg.com/vi/PyKZMY-_TI8/hqdefault.jpg
https://res.cloudinary.com/practicaldev/image/fetch/s--SnVNfIdj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/etfxkw4syies3pt35tny.png
https://ian-says.com/articles/functional-javascript/thumbnail.png
<p>Para ser mais preciso o jQuery é um Framework JavaScript para Front-end com uma grande facilidade de manipular o DOM e de código simples, muito usado para criar animações, eventos, chamadas AJAX e ainda cria plugins. Pode ser baixado no site oficial ou usado pelo <a href="">CDN</a> (<i>Content Delivery Network</i>), para isso basta copiar um dos códigos abaixo (escolha apenas uma versão) e colar no seu código HTML. Recomenda-se a versão 3 do CDN.</p>

### Modo de uso:
<p>Pode-se usar os scripts tanto no &lt;head&gt; como no &lt;body&gt;.</p>

<pre>
<h2>📝 index.html</h2>
<code>&lt;!Doctype html&gt;</code>
<code>&lt;html&gt;</code>
<code>&lt;head&gt;</code>
  <code>&lt;meta charset="utf-8"&gt;</code>
  <code>&lt;script src="jquery.js"&gt;&lt;/script&gt;</code>
  <code>&lt;title&gt;jQuery&lt;/title&gt;</code>
<code>&lt;/head&gt;</code>
<code>&lt;body&gt;</code>
   <code>&lt;script src="main.js"&gt;&lt;/script&gt;</code>
<code>&lt;/body&gt;</code>
<code>&lt;/html&gt;</code>
</pre>

### Preparando arquivos:
<p>Começando pelo "index.html" para processar a página. O script "jquery.js" é a biblioteca, já o arquivo "main.js" é o script que iremos desenvolver a partir da biblioteca adicionada no projeto.</p>
<pre>
  <code>📝 index.html</span></code>
  <code>📜 jquery.js</span></code>
  <code>📜 main.js</code>
</pre>

## Primeiros Passos com o jQuery:

### Esconder mensagem
<p>Veja como é fácil desenvolver com o Framework jQuery, pois foram utilizadas poucas linhas de código para esconder o título.</p>

<pre>
<h2>📝 index.html</h2>
<code>&lt;!Doctype html&gt;</code>
<code>&lt;html&gt;</code>
<code>&lt;head&gt;</code>
  <code>&lt;meta charset="utf-8"&gt;</code>
  <code>&lt;script src="jquery.js"&gt;&lt;/script&gt;</code>
  <code>&lt;title&gt;Esconder mensagem&lt;/title&gt;</code>
<code>&lt;/head&gt;</code>
<code>&lt;body&gt;</code>
   <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code>
   <code>&lt;button&gt;Esconder o título&lt;/button&gt;</code>
   <code>&lt;script src="main.js"&gt;&lt;/script&gt;</code>
<code>&lt;/body&gt;</code>
<code>&lt;/html&gt;</code>
</pre>

<pre>
 <h2>📜 main.js</h2>
 <code>$(document).ready(function(){
  $('button').click(function(){
   $('h1').hide();
  });
 });</code>
 
 <h3>Simplificando...</h3>
 <h2>📜 main.js</h2>
 <code>$(function(){
  $('button').click(function(){
   $('h1').hide();
  });
 });</code>
</pre>

### Alterando o CSS
<p>Da pra alterar o estilo do elemento.</p>

<pre>
<h2>📜 main.js</h2>
<code>$(function() { 
 $('button'.click(function(){
  $('h1').css("color","red");
   });
  });</code>
</pre>

### Mudando a cor individual
<pre>
<h2>📝 index.html</h2>
<code>&lt;!Doctype html&gt;</code>
<code>&lt;html&gt;</code>
<code>&lt;head&gt;</code>
  <code>&lt;meta charset="utf-8"&gt;</code>
  <code>&lt;script src="jquery.js"&gt;&lt;/script&gt;</code>
  <code>&lt;title&gt;Esconder mensagem&lt;/title&gt;</code>
<code>&lt;/head&gt;</code>
<code>&lt;body&gt;</code>
   <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code>
   <code>&lt;h1 id="new_h1"&gt;Hello, World! Again!&lt;/h1&gt;</code>
   <code>&lt;button&gt;Esconder o título&lt;/button&gt;</code>
   <code>&lt;script src="main.js"&gt;&lt;/script&gt;</code>
<code>&lt;/body&gt;</code>
<code>&lt;/html&gt;</code>
</pre>

<pre>
<h2>📜 main.js</h2>
<code>$(function() { 
 $('button'.click(function(){
  $('#new_h1').css("color","red");
   });
  });</code>
</pre>

### Efeito Fade (methods)
<p></p>
<pre><code>$('').fadeOut();</code></pre>
<p></p>
<pre><code>$('').delay(1000);</code></pre>
<p></p>
<pre><code>$('').fadeIn();</code></pre>

### Gravando mensagens (methods)
<p></p>
<pre><code>$('mensagem').text("texto");</code></pre>

### Declarações multiplas do CSS (methods)
<p></p>
<pre><code>.css({color:'red', border:'1px solid red', backgroundColor:'red'});</code></pre>

### Adicionando e removendo Classes (methods)
<p>Insira a classe no css e chame pelo js.</p>
<pre><code>.addClass('.classe');</code></pre>
<pre><code>.removeClass('.classe');</code></pre>

## Node.js
<img src="https://cdn1.vogel.de/unsafe/fit-in/1000x0/images.vogel.de/vogelonline/bdb/1368100/1368165/original.jpg"/>

# Vanilla JS 📜🍦
https://d399irh3pgqnz3.cloudfront.net/prod/imagine/course_video_poster_large/uploads/screencast/javascript/javascript-677.png
-->
