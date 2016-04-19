# react_experiments

Practice React.js and Webpack following the tutorial http://survivejs.com/webpack/.

---

## Webpack

### Basics
- http://survivejs.com/webpack_react/developing_with_webpack/

### [Splitting Up the Configuration](http://survivejs.com/webpack_react/developing_with_webpack/#splitting-up-the-configuration)
- Multiple ways:
  + Maintain configuration in multiple files and point Webpack to each through `--config` parameter.
  + Push configuration to a library which you then consume.
  + Maintain configuration within a single file and branch there.

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
  2. Run `npm run start`
  3. `localhost:8080` or `http://localhost:8080/webpack-dev-server/`

### [Configuring Hot Module Replacement (HMR)](http://survivejs.com/webpack_react/developing_with_webpack/#configuring-hot-module-replacement-hmr-)
- simple means to refresh the browser automatically as we make changes.
- In order to make this work, we'll need to connect the generated bundle running in-memory to the development server.

### [Accessing Development Server from Network](http://survivejs.com/webpack_react/developing_with_webpack/#accessing-development-server-from-network)
```
ifconfig | grep inet
```

### [Refreshing CSS](http://survivejs.com/webpack_react/developing_with_webpack/#refreshing-css)
- Load stylesheet through `css-loader` and `style-loader` that allow us to change CSS without forcing a full refresh.
- `npm i css-loader style-loader --save-dev` and configure.

### [Enabling Sourcemaps](http://survivejs.com/webpack_react/developing_with_webpack/#refreshing-css)
- improve the debuggability of the application.
- allow you to see exactly where an error was raised.
- In Webpack this is controlled through the devtool setting

### [Avoiding npm install by Using npm-install-webpack-plugin](http://survivejs.com/webpack_react/developing_with_webpack/#avoiding-npm-install-by-using-npm-install-webpack-plugin-)
- https://www.npmjs.com/package/npm-install-webpack-plugin
- As we develop the project, it will detect changes made to Webpack configuration and the projects files and install the dependencies for us. It will modify package.json automatically as well.
- You can still install dependencies manually if you want.
  + Any dependencies within app should be installed through `--save` (or `-S`).
  + Root level dependencies (i.e. packages needed by Webpack), should be installed through `--save-dev` (or `-D`).
- Install `npm i npm-install-webpack-plugin --save-dev` and configure.

---

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

---

## Misc

### [Node.js path.join vs path.resolve](https://nodejs.org/api/path.html)
- `path.join` just joins strings.
- `path.resolve` is equivalent to navigating the file system through `cd`.

---

## Resources
- http://andrewhfarmer.com/getting-started-tutorials/
- http://survivejs.com/webpack/developing-with-webpack/getting-started/
