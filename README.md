# react_experiments

Practice React.js and Webpack following the tutorial http://survivejs.com/webpack/.

## Webpack

### Basics
- http://survivejs.com/webpack_react/developing_with_webpack/

### build scripts
- Multiple ways:
  + Run `node_modules/.bin/webpack` directly
  + Run `npm run build` by configuring npm scripts
  + Run `serve` and view `localhost:3000`
- As developing your application through a build script will get boring eventually.

### webpack-dev-server
- better alernative to build scripts.
- a development server running in-memory
- refreshes content automatically in the browser while you develop your application
- Hot Module Replacement (HMR) that provides a way to patch the browser state without a full refresh.
- Basic usage:
  1. Configure npm scripts: `"start": "webpack-dev-server --content-base build"`
  2. Run `npm run start` and view `localhost:8080`





```
.
├── README.md
├── app
│   ├── component.js
│   └── index.js
├── build
│   └── index.html
├── node_modules
│   ├── babel-core
│   ├── babel-loader
│   └── webpack
├── package.json
└── webpack.config.js
```






---

## babel
- transform your futuristic code to a format browsers understand
- built-in JSX support
- support for certain experimental features from ES7 beyond standard ES6
- [babel online](https://babeljs.io/repl/)


### babel-loader
- allows us to use Babel with Webpack easily
- takes our ES6 module definition based code and turn it into ES5 bundles

### babel-core
- contains the core logic of Babel
- NOTE: we need to install this to be able to use babel-loader.

```bash
npm i babel-loader babel-core --save-dev
```

### loader declaration
- To make a loader to work, we need to add a loader declaration to the loaders section of the configuration.
- The regex `/\.jsx?$/` matches against both `.js` and `.jsx`.

### Tell the loader which directories to include
- Use `include`
- E.g., restrict the loader to operate within `./app` directory
- Otherwise it would traverse node_modules


## Misc

### [Node.js path.join vs path.resolve](https://nodejs.org/api/path.html)
- `path.join` just joins strings.
- `path.resolve` is equivalent to navigating the file system through `cd`.








## Resources
- http://andrewhfarmer.com/getting-started-tutorials/
- http://survivejs.com/webpack/developing-with-webpack/getting-started/
