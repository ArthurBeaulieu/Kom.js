# Kom.js

![](https://badgen.net/badge/version/0.1.0/blue)
[![License](https://img.shields.io/github/license/ArthurBeaulieu/Kom.js.svg)](https://github.com/ArthurBeaulieu/Kom.js/blob/master/LICENSE.md)
![](https://badgen.net/badge/documentation/written/green)
![](https://badgen.net/badge/test/todo/red)
![](https://badgen.net/badge/dependencies/none/green)

`Kom.js` is a JavaScript ES6 component that provides an abstraction to perform HTTP server calls (`GET` and `POST`). The caller can format the server response to be a JavaScript object, a string or raw binary data.

With ~2Ko minified, `Kom.js` is designed to be stable and remain as light as possible. It is meant to be used application wide so you can perform HTTP calls from anywhere in your app.

# Get Started

This repository was made to store documentation, test bench and source code. If you want to include this component in your project, you either need the `src/Kom.js` file if you have an assets bundler in your project, or use the `dist/Kom.bundle.js` to use the minified component. This minified file is compiled in ES5 JavaScript for compatibility reasons. The unminified file is, in the contrary, bundled in ES6 JavaScript.

Here's an example on how to create a `Kom.js` component :

```javascript
/* Import the Js component */
import _Kom from './src/Kom.js';
/* Create a server call abstraction */
const Kom = new _Kom();
```

Now that Kom.js is instantiated, you can perform server calls using the following methods ;

#### HTTP `GET` with a JavaScript object response

```javascript
Kom.get('url/to/get').then(response => {
  // response is formatted as a JavaScript object
}).catch(error => {
  // HTTP call encountered an unexpected return value
});
```

#### HTTP `GET` with a string response

```javascript
Kom.getText('url/to/get').then(response => {
  // response is formatted as string
}).catch(error => {
  // HTTP call encountered an unexpected return value
});
```

#### HTTP `GET` with a raw binary data response

```javascript
Kom.getRaw('url/to/get').then(response => {
  // response is formatted as raw binary data
}).catch(error => {
  // HTTP call encountered an unexpected return value
});
```

#### HTTP `POST` with a JavaScript object response

```javascript
Kom.post('url/to/post', {
  data: 'MyData',
  ...
}).then(response => {
  // response is formatted as a JavaScript object
}).catch(error => {
  // HTTP call encountered an unexpected return value
});
```

#### HTTP `POST` with a string response

```javascript
Kom.postText('url/to/post', {
  data: 'MyData',
  ...
}).then(response => {
  // response is formatted as string
}).catch(error => {
  // HTTP call encountered an unexpected return value
});
```

#### HTTP `POST` with a raw binary data response

```javascript
Kom.postRaw('url/to/post', {
  data: 'MyData',
  ...
}).then(response => {
  // response is formatted as raw binary data
}).catch(error => {
  // HTTP call encountered an unexpected return value
});
```

You're now good to go! If however you need more information, you can read the online [documentation](https://arthurbeaulieu.github.io/Kom.js/doc/).

# Development

If you clone this repository, you can `npm install` to install development dependencies. This will allow you to build dist file, run the component tests or generate the documentation ;

- `npm run build` to generate the minified file in es5 Js ;
- `npm run watch` to generate an es6 bundle and watch for changes ;
- `npm run web-server` to launch a local development server ;
- `npm run doc` to generate documentation ;
- `npm run beforecommit` to perform tests, generate doc and bundle the JavaScript.

To avoid CORS when locally loading the example HTML file, run the web server. Please do not use it on a production environment. Unit tests are performed on both Firefox and Chrome ; ensure you have both installed before running tests, otherwise they might fail.

If you have any question or idea, feel free to DM or open an issue (or even a PR, who knows) ! I'll be glad to answer your request.
