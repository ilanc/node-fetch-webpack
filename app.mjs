import fetch from 'node-fetch'; // works after webpack - requires --experimental-modules & .mjs in order to work in node
// const fetch = require('node-fetch'); // broken after webpack - works in node

console.log(fetch);

fetch('https://google.com/')
	.then(res => res.text())
	.then(body => console.log('success'));
