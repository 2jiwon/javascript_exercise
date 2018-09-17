// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function multiply() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divide() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

