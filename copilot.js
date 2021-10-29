// convert string to individual characters
function process(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charAt(i));
  }
  return result;
}
console.log(process('hello'));
