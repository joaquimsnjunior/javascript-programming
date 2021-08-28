# <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" height="27"> It's a repository of React Native Development ⚛️📲
<blockquote>It's a repository of React Native programming using Expo and React Native CLI.</blockquote>

![pasted image 0](https://user-images.githubusercontent.com/61624336/114338867-53b16b00-9b2a-11eb-8303-c2ef83d2eaf9.png)

<blockquote><b>Obs:</b> It's important to install each one of components shown and to execute the codes on your own machine. Besides that, please note that repository is only focused in React.js Framework development, if you want to learn about HTML5, CSS3 or other JS Frameworks i recommend to access another repositories, click on links bellow!</blockquote>

<h2>Pré-requisitos:</h2>
<ol>
  <li>Lógica de Programação;</li>
  <li>HTML e CSS avançado;</li>
  <li>JavaScript intermediário;</li>
  <li>Node.js e npm;</li>
  <li>Usar os S.Os: Mac OS ou Windows, mais recomendado o Mac Os pelo emulador IOS do Xcode;</li>
  <li>Emulador Android ou IOS;</li>
  <li>Instaladores de pacotes: Chocolatey (Windows) e Cocoapods (MacOS);</li>
  <li>PC com mais de 4GB de memória RAM.</li>
  <li>VSCode.</li>
</ol>
<hr>

# ⚛️ O que é React Native? 📲
<div align="center"><img src="https://www.vippng.com/png/full/400-4001856_react-native-development-react-native-logo-no-background.png" width="470"/></div><br \>

<p>É uma biblioteca (framework) front-end do <b>JavaScript</b>, desenvolvido pelo <b>Facebook</b>, cujo renderiza e constroi interfaces nativas para os sistemas operacionais Android e IOS, ou seja, ele renderiza componentes mobiles para cada uma das plataformas, em outras palavras ele cria aplicações híbridas para os dispositivos móveis. Sendo assim, é bem diferente do outro framework JavaScript bem conhecido, o <b>React.js</b>.</p>

## Entendendo o React Native por debaixo dos panos
<img src="https://i.imgur.com/FDIfCMQ.png"/>
<img src="https://miro.medium.com/max/2052/1*QT7NIsR-X8_SKdtI7BTghw.png"/>


<h2>Por que usar o React Native?</h2>
<img src="https://s3.amazonaws.com/ckl-website-static/wp-content/uploads/2016/08/Banner_reactnative4.jpg"/>
<p>É muito vantajoso criar aplicações para vários dispositivos e trazendo informações para muitas pessoas, pois estamos na era da mobilidade. Portanto, não é muito vantajoso lançar várias versões de apps para diferentes sistemas operacionais, pois a tipagem do código é diferente e o tempo de produção torna-se muito longo. Por exemplo, o <b>IOS</b> é desenvolvido em Objective-C e Swift, já o <b>Android</b> em Java e Kotlin, é vantajoso construir o mesmo aplicativo em diferentes linguagens ou uma única linguagem para esses sistemas operacionais? Claro que uma única linguagem para esses sistemas operacionais, pois aumenta a produtividade e diminui a exaustão dos profissionais.</p>
<h2>Guia para instalar e configurar o React Native</h2>
<img src="https://apiko.com/blog/content/images/2020/04/12-Apps-Using-React-Native-Explaining-Value-and-Popularity.jpg"/>
<h3>Instruções em etapas:</h3>
<ol>
  <li>Instale o node.js</li>
  <li>Instale o yarn:</li>
  <pre>npm install -g yarn</pre>
  <pre>yarn global add expo-cli</pre>
  <pre>yarn global add react-native-cli</pre>
  <li>Instale o React Native:</li><br>
  <p><b>Cli</b> (versão completa, mais pesada e com mais recursos):</p>
  <pre>npm install -g react-native-cli</pre>
  <p><b>Expo Cli</b> (versão capsulada, mais leve e com menos recursos):</p>
  <pre>npm install -g expo-cli</pre>
  <li>Instale os emuladores e mantenha-os atualizados! Recomendo usar esses abaixo, pois as chances de darem erros são baixas já que foram criados para o desenvolvimento de softwares:</li>
  <div align="center">
  <a href="https://developer.android.com/studio"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/512px-Android_Studio_icon.svg.png" height="300" title="Android Studio"/></a>
  <a href="https://developer.apple.com/xcode/"><img src="https://qph.fs.quoracdn.net/main-qimg-ad35ee95282ed076837ec6631801b48a" height="300" title="Xcode"/></a>
  </div>
  <li>Instale as dependências:</li>
  <b>Android:</b>
  <ul>
    <li>JDK8 e JRE</li>
    <li>Android SDK</li>
    <li>Android SDK Plataform</li>
    <li>Performace (Intel Haxm)</li>
    <li>Android Virtual Device - AVD x64_86 PlayStore</li>
  </ul>
    <b>IOS:</b>
  <ul>
    <li>instalar o Homebrew</li>
    <li>Xcode</li>
  </ul><br><br>

  <li>Instale o Expo</li>
  <div align="center"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/65/24/19/652419e4-053e-d24a-1850-da1073f092e6/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" title="Expo"/></div>
  <pre>yarn global add expo-cli</pre>
  <pre>expo client:install:android</pre>
  <pre>expo start</pre>
</ol>

## Primeiro Projeto com React Native (Expo)
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--H6L3JDpH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a"/>
<p>Com tudo configurado corretamente acima e com tudo instalado, está na hora de começar o nosso primeiro projeto com o Expo, para isso é simples basta iniciar o emulador Android ou IOS (é importante deixar eles ligados para o projeto funcionar), após isso siga os comandos abaixo:</p>
  <pre>expo init firstProject</pre>
  <pre>cd firstProject</pre>
  <pre>expo start</pre>
<p>Logo, rodará o projeto criando a porta de localhost e abrindo uma janela do navegador com o controle do expo, onde você pode rodar nos emuladores android ou ios, no browser, ou até mesmo no próprio celular com o Qr Code. Como estamos utilizando o emulador android basta somente clicar em <b>run android</b>, dai com o Expo instalado na VM Android, o projeto se inicia.</p>
<b>OBS: ctrl + m ou ⌘ + D = chacoalhada para o menu. ctrl + r = reload the application.</b>
<hr>

## Primeiro Projeto com React Native (CLI)
<img src="https://linkites.com/wp-content/uploads/2019/04/React-native-Banner.png"/>
<p>Com tudo configurado corretamente acima e com tudo instalado, está na hora de começar o nosso primeiro projeto com o React Native (CLI), para isso é simples basta iniciar o emulador Android ou IOS (é importante deixar eles ligados para o projeto funcionar), após isso siga os comandos abaixo:</p>
  <pre>react-native init firstProject</pre>
  <pre>cd firstProject</pre>
  <pre>react-native run-android</pre>

### Forçar o React Native a rodar uma versão específica
  <pre>react-native init --version 0.55.4 firstProject</pre>
  <pre>react-native -v</pre>
  
## ⚛️📦 Conhecendo os pacotes do React Native (CLI)
<p>Na pasta <b>android</b> ficam as configurações e o código nativo do android; Na pasta <b>ios</b> ficam as configurações e o código nativo do ios; Na pasta <b>node_modules</b> todas as dependências instaladas pelo npm.</p>
<pre>
<code>📂 android</code>
<code>📂 ios</code>
<code>📂 node_modules</code>
</pre>
<p></p>

## ⚛️📦 Conhecendo os pacotes do React Native (Expo)
<p>Na pasta <b>node_modules</b> todas as dependências instaladas pelo npm; No arquivo <b>app.json</b> determina como a aplicação é definida para o usuário final; No arquivo <b>App.js</b> fica o código da aplicação; No arquivo <b>yarn.lock</b> é o cache das dependências;</p>
<pre>
<code>📂 .expo</code>
<code>📂 .expo-shared</code>
<code>📂 assets</code>
<code>📂 node_modules</code>
<code>🔸 .gitignore</code>
<code>💼 app.json</code>
<code>📜 App.js</code>
<code>📜 babel.config.js</code>
<code>💼 package.json</code>
<code>🧶 yarn.lock</code>
</pre>

## Hello, World! - React Native (CLI)
<img src="https://www.luiztools.com.br/wp-content/uploads/2020/06/Captura-de-Tela-2020-06-06-a%CC%80s-19.32.22-1024x635.png"/>
<pre>
 <code><h3>📜 App.js</h3></code>
 <code><p>import React, {Component} from "react";</p></code>
 <code><p>import {Plataform, Stylesheet, Text, View} from "react-native";</p></code>
 
 <code><p>export default class App extends Component {</code>
  <code>}</p></code>
</pre>

## React Native Navigation
<img src="https://6cro14eml0v2yuvyx3v5j11j-wpengine.netdna-ssl.com/wp-content/uploads/Build-a-messaging-app-using-react-native1.png"/>
<p><b>Configurando a navegação:</b></p>
<ol>
  <li>Instale o react-navigation:</li>
  <pre><code>yarn add react-navigation</code></pre>
  <li>Exclua o App.js</li>
</ol>

## React Native
<div align="center"><img src="https://metadesignsolutions.com/images/reactnative_banner.png" height="300"/></div>

## React Native
<div align="center"><img src="https://www.zibtek.com/assets/images/tech/bannerrightnative.png" height="300"/></div>

## React Native
<div align="center"><img src="https://blog.sodio.tech/wp-content/uploads/2017/05/React.png"/></div>

## React Native
<div align="center"><img src="https://images.squarespace-cdn.com/content/v1/55c8e052e4b01bd89f02a45e/1452208562614-J8AFSSTSMN3DJ6Q798XX/ke17ZwdGBToddI8pDm48kE7xzgWkeVHhMSpwGz7q3y4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2du1iGr6rVFVouDCrC-EYDz_rjS4LofYkqCp0pRSzPi5Jm7cT0R_dexc_UL_zbpz6JQ/image-asset.jpeg?format=1000w"/></div>

## React Native
<div align="center"><img src="https://graftonstudio.com/uploads/ReactJS-Banner.jpg"/></div>

## React Native
<div align="center"><img src="https://www.paragyte.com/img/React_Banner.png"/></div>

## React Native
<div align="center"><img src="https://akhilaariyachandra.com/static/7535b7cd9be3abaefd1ee294770652ba/e4796/banner.png"/></div>

## React Native
<div align="center"><img src="https://www.mobiloitte.com/images/react-js-banner.png"/></div>

## React Native
<div align="center"><img src="https://images.ctfassets.net/x4we65bqi45q/79clZXZmtPwWzTux2YIlgn/a78c0f54e7e6369275eaac7e04933835/1_HSisLuifMO6KbLfPOKtLow.jpeg"/></div>

## React Native + Redux
<div align="center"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--R9gdYdBU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2000/1%2Arn81KthOlgxpSJZ1RHVtTQ.png" height="300"/></div>

## React Native
<div align="center"><img src="https://pbcdn1.podbean.com/imglogo/dir-logo/366516/366516_300x300.png" height="300"/></div>
