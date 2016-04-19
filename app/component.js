/**
 * @return an h1 tag with the string "Hello world".
 */
module.exports = function() {
  var element = document.createElement("h1");

  element.innerHTML = "Hello world";

  return element;
};
