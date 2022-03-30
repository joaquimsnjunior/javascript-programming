<a href="https://github.com/IsaacAlves7/javascript-programming/tree/React.js"><img src="https://hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif" width="100%"/></a>

# <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="27"> It's a repository of React development ⚛️
<!--
[![TSX](https://img.shields.io/badge/-main.tsx-fff?style=social&logo=Atom&logoColor=blue)](#)
[![React.js](https://img.shields.io/badge/-app.jsx-fff?style=social&logo=React&logoColor=61DAFB)](#)
<div align="left"><img src="https://cdn.icon-icons.com/icons2/2530/PNG/512/react_button_icon_151947.png" height="47"></div>
-->

<blockquote>It's a repository of React.js development (with <code>.jsx</code> and <code>.tsx</code>)!</blockquote>

# ⚛️ React.js 📜
<div align="center"><a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="277"></a></div>

O **React.js** é uma biblioteca e não framework JavaScript (JS), muito usada dentre as demais, para criar aplicações web de interfaces para usuário.

Foi criada em 2011 por <a href="https://github.com/jordwalke">Jordan Walke</a> no Facebook, sendo baseado no **XHP**, um framework para criação de HTML no PHP. Ele foi utilizado no mural de notícias do Facebook.

- 2012 - Utilizado no Instagram
- 2013 - Anúncio para liberação OpenSource na **JSConf US**
- 2015 - **React Native** usada para criar aplicações mobile híbridas para iOS e Android
- 2015 - **UWP** (Universal Windows Plataform) usado para criar aplicações Desktop

O **React.js** trabalha muito com componentização para criação de interfaces, ou seja, ele é **baseado em componentes** como se fossem pequenas caixinhas e consegue trabalhar em conjunto com outros frameworks JavaScript, como jQuery, Vue.js ou Angular, ou outras linguagens de programação como Ruby, PHP, Python etc..., isso é claro, tomando o devido cuidado, dependendo de qual for o caso do projeto ou caso de uso, você consegue utilizar sem problema algum.

<div align="center"><a href="https://pt-br.reactjs.org/"><img src="https://icon-library.com/images/react-icon/react-icon-0.jpg" height="277"></a></div>

Ele possui um paradigma de linguagem de programação declarativa, ou seja, o React.js só está preocupado apenas com o que é exibido na interface do usuário.

Além disso, pode ser utilizado em qualquer lugar, como interfaces para celulares, criação de PWA, criação de Front-End com outros frameworks e linguagens, server-side render ou Next.js.

## Configuração do React.js
- React Create App
- React Scripts
- Task Runners e Bundler Sizers

# Aprendendo a configurar a primeira aplicação
```
mkdir react-app
cd react-app/
npm init
npm i --save react react-dom react-scripts
```

Com o comando `npm init` podemos iniciar e configurar o arquivo `package.json`, que é responsável pela instalação de pacotes ou módulos da aplicação e também sobre o processo de boot dela.

> Se você não estiver usando o **NPM** como package manager, mas sim o **Yarn**, não tem problema, isso é a gosto!

Após criar o `package.json`, o segundo comando irá instalar o React.js juntamente com o DOM e scripts para o melhor aproveitamento da biblioteca, note que irá surgir o `package-lock.json` e a pasta `.node_modules`, isso comprova que o módulo da biblioteca foi instalado corretamente na pasta.

> Vão existir casos em que você verá que a sua aplicação ficou muito volumosa para enviar para o repositório remoto ou outro tipo de ambiente. Se for o caso de precisar reduzir o volume, recomendo utilizar o arquivo `.gitignore` para ignorar os módulos, mesmo assim se tiver ainda volumoso, você pode excluir o `.node_modules` e o `package-lock.json` sem problemas, basta excluir pela seguinte ordem:
> 
> 1. <del>package.json</del>
> 2. <del>./node_modules/</del>
> 
> Com isso, você ficará somente com o `package.json` que é responsável por administrar os pacotes e a inicialização da sua aplicação. Note que em `dependences` possui todas as dependências ainda lá, então, você só precisa rodar o comando `npm install` para que as dependências sejam instaladas novamente.

## Iniciando a aplicação
```
cd react-app
npm run start
```
ou
```
cd react-app
npm start
```

A porta padrão para acessar a aplicação é a `3000`, caso tenha outro tipo de aplicação utilizando a mesma porta, recomendo finalizar, pois pode ocasionar conflitos de porta.

<div align="center"><img src="https://user-images.githubusercontent.com/61624336/160663182-300647e6-65ee-49cb-ae03-0e4f2bb7abf0.jpg"></div>

## O que é JSX?
<div align="center"><img src="https://daniel-vinicius.gallerycdn.vsassets.io/extensions/daniel-vinicius/code-snipptes-reactjs-pt-br/0.5.0/1610479284868/Microsoft.VisualStudio.Services.Icons.Default" height="177"></div><br \>

O **JSX** não é um arquivo HTML e nem uma string! Foi uma linguagem de marcação criada para poder utilizar a linguagem de marcação **XML** e a linguagem de programação **JavaScript** no seu código-fonte. Não necessariamente ele precisa estar em um arquivo com extensão `.jsx`, mas pode sim estar em um arquivo `.html`, `.js` e etc, porém ele possui um volume menor em arquivos `.jsx` comparado com o demais.

### Sintaxe do JSX
```javascript
const element = <h1>Hello, world!</h1>
```

O React.js não separa as tecnologias colocando marcação em arquivos separados, mas sim separa conceitos e mantém o código pouco acoplado chamando-os de **componentes**.

Não é obrigatório a utilização do JSX. Ele é um **Sintax Suggar** para `React.createElement`.

### Babel.js
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" height="177"></div><br \>

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o **Babel**.

### Criando o primeiro JSX no `index.js`
```javascript
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function sum(a, b) {
   return a + b;
}

function primeiroJSX() {
   return (
     <div className="texto__verde">
     Isaac Alves Pinheiro - Renderizando o meu nome com JSX - React.js
     <h1>Soma:{sum(40, 30)}</h1>
     </div>
   )
}

const App = () => {
   return (
     <div className="App">
       {primeiroJSX()}
     </div>
   )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)
```

Precisa ser criado uma função JavaScript com o elemento `return()`, para retornar essa função, e dentro dele os elementos (tags) HTML para a manipulação do DOM.

Podemos utilizar o HTML5, CSS3 e o JavaScript no JSX (O trio-ternura e outros elementos estáticos), assim como também pré-processadores como **Sass**, frameworks front-end como Bootstrap ou Material-UI e bibliotecas de estilo como **styled-components** o qual permite você usar o poder do CSS dentro do JavaScript, abrindo um leque de infinitas possibilidades para a estilização da sua aplicação web.

No React.js, é mais comum chamar uma classe HTML5 e CSS3 de `className=''` isso faz o compilador entender que é uma classe para ambos os lados, tanto pro lado estático quanto para o dinâmico.

## Renderização de elementos
A **renderização** do React.js é feita em **nós raíz** , o React.js "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.

```javascript
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const element = 'Isaac Alves'
const element2 = <h1>Hello, World!</h1>

function App() {
  return (
    <div>
        {element}
        {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(element2, rootElement)
```

O valor impresso será o `element2` devido o nó.

```javascript
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import "./index.css"

const element = 'Isaac Alves'
const element2 = <h1>Hello, World!</h1>

function App() {
  return (
    <Fragment>
        {element}
        {element2}
    </Fragment>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(element2, rootElement)
```

Existe um elemento chamado `Fragment` que cancela os nós. Para imprimir os dois elementos desse componente `App()`, ou seja o componente inteiro, basta inserir `<App />`:

```javascript
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import "./index.css"

const element = 'Isaac Alves'
const element2 = <h1>Hello, World!</h1>

function App() {
  return (
    <div>
        {element}
        {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

## Componentização e Props
Os componentes podem trabalhar de duas formas, **Função** ou **Classe**, lembrando que o JavaScript não trabalha diretamente com classes como a linguagem Java ou C#, mas sim **protótipos**.

### `index.js`
```javascript
import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import "./index.css"

function soma() {
  
}

function App() {
  
  return (
    <div className='App'>]
      Hello, World!
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

### `Button.jsx`
```
import React, {Fragment} from "react";

function Button(props) { 
  
  const { name, onClick } = props // (ES6) Desestruturação pela variável e pegar o parâmetro dela
  // É a mesma coisa que fazer const name = props.name
  // Como o onClick é um componente, ele vai receber o Callback e enviar o callback
  
  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button;
```

Tudo o que passar para um componente você precisa inserir o `props` nele

---

# Criando um template de aplicação com React.js
<div align="center"><a href="https://pt-br.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/create-react-app.svg" height="277"></a></div>

```javascript
npx create-react-app reactjs-project
```

<details><summary><b title="(click to open)">Saída (Output)</b></summary>
<pre>
Need to install the following packages:
  create-react-app
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Users\ipinheiro\Desktop\chat-projects\reactjs.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1367 packages in 1m

169 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...

added 38 packages in 8s

169 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...

removed 1 package, and audited 1405 packages in 3s

169 packages are looking for funding
  run `npm fund` for details

6 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Success! Created reactjs at C:\Users\ipinheiro\Desktop\chat-projects\reactjs
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd reactjs
  npm start

Happy hacking!
</pre>
</details>

Veja mais como criar uma aplicação em **React.js**: [Criar um Web App com React](https://github.com/facebook/create-react-app).

# React Router
<div align="center"><img src="https://logowiki.net/uploads/logo/r/react-router.svg" height="277"></div><br \>

# Material-UI
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/material-ui.svg" height="277"></div><br \>

# Styled-components
<div align="center"><img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="277"></div><br \>

# React Hook
<div align="center"><img src="https://miro.medium.com/max/1166/1*fQefaOBmMkqfdpvphCEdVw.png" height="277"></div>

# React.js
<div align="center"><img src="https://user-images.githubusercontent.com/61624336/126890148-540656eb-a34f-4779-aaca-ceebc28d8620.jpg" width="100%"></div>

# Redux
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/redux.svg" height="277"></div>

# Redux Saga
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/redux-saga.svg" height="277"></div>

# Gatsby.js
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/gatsby.svg" height="277"></div>

# Next.js
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" height="277"></div>

# GraphQL
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/graphql.svg" height="277"></div>

# Apollo GraphQL
<div align="center"><img src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg" height="277"></div>















<!--
https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif
<img src="https://miro.medium.com/max/3440/1*Rvs7u_g6dnDTRF-FMY4vsA.png"/>
<img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/59592/1105-A_Guide_to_Webpack_and_React_Dan_Social-119b3bc7125401b042860514ada7f1e7.png"/>
<img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/61014/468-A_Guide_to_Webpack_and_React_PART2-Dan_Social-27c0d207da12514f5354e73fa53e6183.png"/>
<img src="https://miro.medium.com/max/2710/1*pR3N1eYNCdfSvcvXw5M8ng.png"/>
https://i0.wp.com/blog.taller.net.br/wp-content/uploads/react_back_end.jpg?fit=1138%2C493&ssl=1
https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/react_blogreact_870x220_3.png?sfvrsn=108c978d_1
https://www.housecursos.com/wp-content/uploads/2018/04/como-funciona-react-native-house-cursos.png






![1_RnfoUx35p_wHEv-cVGcV3Q](https://user-images.githubusercontent.com/61624336/134020791-4a8c57a2-77ac-4705-ac3a-5d7145526c4c.png)
![react](https://user-images.githubusercontent.com/61624336/134020797-694e2705-332e-4f78-83ae-40a1c3d4b340.jpeg)
![Why-Use-React-Native-For-Your-Business-in-2020](https://user-images.githubusercontent.com/61624336/134020798-80d64a92-c4b3-48d2-ac11-901ccfc7fbdd.jpg)
![1_RnfoUx35p_wHEv-cVGcV3Q](https://user-images.githubusercontent.com/61624336/134020817-033d17ce-0a5e-4549-92a3-91c465220d78.png)
![react](https://user-images.githubusercontent.com/61624336/134020818-ada126a1-4a7c-4209-86ee-fcc8fe9f97e5.jpeg)
![Why-Use-React-Native-For-Your-Business-in-2020](https://user-images.githubusercontent.com/61624336/134020821-d5253ed1-c22b-4869-b423-3f392c20f015.jpg) 

-->
