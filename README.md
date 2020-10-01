# It's a repository of JavaScript for the Full-Stack learning
<img src="https://miro.medium.com/max/3200/1*OF0xEMkWBv-69zvmNs6RDQ.gif" title="Full-Stack JS Development"/><br>

## Introduction - Overview about the JavaScript (JS) language
<strong>All Topics: </strong>
<ol>
  <li>The History of JavaScript (JS).</li>
  <li>What's the JavaScript language?</li>
  <li>Procedural JavaScript.</li>
  <li>JavaScript OOP.</li>
  <li>Functional JavaScript.</li>
  <li>EcmaScript 6 (ES6).</li>
  <li>jQuery Framework.</li>
  <li>Node.js.</li>
</ol>

## The History of JavaScript (JS)
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" height="200"/></div><br>
<p>In 1995, <a href="https://github.com/BrendanEich">Brendan Eich</a> that who worked at NetScape</p>

### JavaScript (JS) Timeline
<ol>
  <li>LiveScript.</li>
  <li>Mocha</li>
  <li>JavaScript.</li>
</ol>

## Hello, world! JS
<img src="https://coursework.vschool.io/content/images/size/w2000/2016/03/javascript-logo-banner.jpg"/><br>
<p>Abaixo é apresentado o comando console.log: </p>
 <pre>
  <code>console.log('Hello, World!');</code>
 </pre>

 <pre>
  <code>alert('Hello, World!');</code>
 </pre>
 
 
 <pre>
  <code>console.log('Hello, World!');</code>
 </pre>
 
## JS Conditionals
<img src="https://miro.medium.com/max/925/1*dax3Mf7KuL1rQ5-RKjN6_A.png" width="1000"/>

## JS Loops
<img src="https://www.north-47.com/wp-content/uploads/2020/06/1_JA57AArvHLn3tulDxJKzEg.jpeg" width="1000"/>

## JS Arrays
<img src="https://miro.medium.com/max/816/0*jJba103A-9xmpTYq.jpg" width="1000"/>

## JS Date
<div align="center"><img src="https://coffeeshopdeveloper.com/uploads/30-seconds-of-code.png" width="300"/></div>

## JS Dicionaries
<img src="https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1-1280x356.jpg"/>

## JS Functions
<img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15687/comprehensive-guide-javascript-design-patterns-cf0c7c0e69d51d97044a8431da9175e3.png" height="450" width="1070"/>

## JS OOP
<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/javascriptt-light_870x220.png?sfvrsn=f0bf46af_3" width="1700"/>

## EcmaScript 6 (ES6)
<img src="https://media.vlpt.us/images/sangminnn/post/3b3e7fc8-d255-46df-92fb-71e91bcf2408/real%20es6.png" width="1700"/>

## jQuery Framework 
<img src="https://cdn1.vogel.de/kaNCYI0Lx-zrDezwq8BaF3cFGI8=/fit-in/1200x630/filters:format(png):quality(90)/images.vogel.de/vogelonline/bdb/1494700/1494776/original.jpg" width="1000"/>
<p>Para ser mais preciso o jQuery é um Framework JavaScript para Front-end. Pode ser baixado no site oficial ou usado pelo <a href="">CDN</a> (<i>Content Delivery Network</i>), para isso basta copiar um dos códigos abaixo (escolha apenas uma versão) e colar no seu código HTML. Recomenda-se a versão 3 do CDN.</p>

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
 
 <h1>Simplificando...</h1>
 <h2>📜 main.js</h2>
 <code>$(function(){
  $('button').click(function(){
   $('h1').hide();
  });
 });</code>
</pre>

### Alterando o CSS
<pre>
<code>$(function() { 
$</code>
</pre>

## Node.js
<img src="https://cdn1.vogel.de/unsafe/fit-in/1000x0/images.vogel.de/vogelonline/bdb/1368100/1368165/original.jpg"/>
