# Fetch polyfill

## Notes on polyfill

* fetch is new function not a language feature
    * like `Promise`
    * you use a `polyfill` in order to address patchy support amongst the various js envs
        * if supported natively then use native version, otherwise use polyfill version
    * `fetch` is not in `node 9` but is in some browser envs
* node only supports `require`, can enable `import` support manually:
    * `node --experimental-modules  app.mjs`
    * https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import

## `node-fetch` bug

* node: works in both forms (`import` and `require`) provided you use `--experimental-modules` to get `import` to work in node
* webpack: only works with `import` not `require`

```bash
$ node app.js
{ [Function: fetch]
  isRedirect: [Function],
  default: [Circular],
  Promise: [Function: Promise],
  Headers: [Function: Headers],
  Request: [Function: Request],
  Response: [Function: Response],
  FetchError: [Function: FetchError] }
success

$ node --experimental-modules  app.mjs
(node:335) ExperimentalWarning: The ESM module loader is experimental.
{ [Function: fetch]
  isRedirect: [Function],
  default: [Circular],
  Promise: [Function: Promise],
  Headers: [Function: Headers],
  Request: [Function: Request],
  Response: [Function: Response],
  FetchError: [Function: FetchError] }
success

$ webpack --config webpack.config.js
...
$ webpack --config webpack.config-mjs.js
...

$ node bundle.mjs
{ [Function: fetch]
  isRedirect: [Function],
  default: [Circular],
  Promise: [Function: Promise] }
success

$ node bundle.js
{ Headers: [Getter],
  Request: [Getter],
  Response: [Getter],
  FetchError: [Getter],
  default:
   { [Function: fetch]
     isRedirect: [Function],
     default: [Circular],
     Promise: [Function: Promise] } }
/mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:103
fetch('https://google.com/').then(res => res.text()).then(body => console.log('success'));
^

TypeError: fetch is not a function
    at Object.defineProperty.value (/mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:103:1)
    at __webpack_require__ (/mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:20:30)
    at Object.<anonymous> (/mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:88:18)
    at __webpack_require__ (/mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:20:30)
    at /mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:63:18
    at Object.<anonymous> (/mnt/c/cloudbank/Prototype/node-fetch-webpack/bundle.js:66:10)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
```
