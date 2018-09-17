// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Expected Output : 
// 60°C is 140 °F
// 45°F is 7.222222222222222°C 

function toFahrenheit () {
  temperature = document.getElementById('temp').value;
  document.getElementById('result').innerHTML = (1.8 * temperature) + 32;
}

function toCelsius () {
  temperature = document.getElementById('temp').value;
  document.getElementById('result').innerHTML = (temperature - 32) * 0.5556;
}
