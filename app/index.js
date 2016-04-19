// Load stylesheet through css-loader and style-loader that allow us to change CSS without forcing a full refresh.
require('./main.css');

// A function that returns an h1 tag with the string "Hello world".
var getHelloComponent = require('./component');

// Show the element on the page.
document.body.appendChild( getHelloComponent() );
