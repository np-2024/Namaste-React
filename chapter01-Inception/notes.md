## 🚀 Inception! ( Namaste-React ) 🚀

## Q ) What is React? Why React is known as ‘React’?
`React` is a JavaScript Library. The name ‘React’ was chosen because the library was designed to allow developers to react to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

## Q ) What is difference between React and ReactDOM?
React is a `JavaScript library` for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

## Q ) What is Library?
`Library` is a collections of prewritten code snippets that can be used and reused to perform certain tasks. A particular JavaScript library code can be plugged into application code which leads to faster development and fewer vulnerabilities to have errors.
Examples: React, j## Query

## Q ) What is Framework?
`Framework` provides a basic foundation or structure for a website or an application.
Examples: Angular

## Q ) Similarities between Library and Framework?
Frameworks and libraries are code written by third parties to solve regular/common problems or to optimise performance.

## Q ) Difference between Library and Framework?
A key difference between the two is Inversion of control. When using a library, the control remains with the developer who
tells the application when to call library functions. When using a framework, the control is reversed, which means that
the framework tells the developer where code needs to be provided and calls it as it requires.

## Q ) What is an emmet?
`Emmet` is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS.

## Q ) What is crossorigin attribute?
The `crossorigin attribute` in the script tag enables CrossOrigin Resource Sharing (CORS) for loading external JavaScript files from different origin than the hosting web page. This allows the script to access resources from the server hosting the script, such as making HTTP requests or accessing data.

## Q ) What is CDN? Why do we use it?
A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

## Q ) What is difference between react.development.js and react.production.js files via CDN?
`react.development.js` version is meant for use during development. It includes additional warnings, error messages, and debugging tools in the console. These extra tools are helpful for developers to diagnose and fix issues during development but are not necessary for a production environment. File is larger in size compared to react.production.js. 

`react.production.js` version is optimized for production use. It has all development-specific warnings, error messages, and debugging tools stripped out. This stripping process reduces the file size and improves runtime performance in the browser. It's intended to be used when deploying your application to live servers. File is typically smaller in size because it has been minified (removing comments, unnecessary whitespace, and optimizing code structure) and optimized for better performance in production environments.