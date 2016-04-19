/**
 * @return an h1 tag with the string "Hello world".
 */
module.exports = function() {
  var element = document.createElement("h1");

  element.innerHTML = "こんにちは、世界";

  return element;
};
