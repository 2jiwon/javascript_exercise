// Write a JavaScript exercise to create a variable using a user-defined name.

function createVar () {
  let varName = "";
  let myVar = document.getElementById('myVar').value;
  this[varName] = myVar;
  document.getElementById('result').innerHTML = 'The variable ' + this[varName] + ' created';
}
