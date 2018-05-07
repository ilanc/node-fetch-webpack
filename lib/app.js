// import test from './test-es6'; // works after webpack - requires --experimental-modules & .mjs in order to work in node
const test = require('./test-cjs'); // broken after webpack - works in node
console.log(test);
test();