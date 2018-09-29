// Write a JavaScript program to check whether a given string represents a correct sentence or not. 
// A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).
//
function correctSentence(str) {
  return /^[A-Z].+\.$/.test(str);
}

console.log(correctSentence("This tool will help you write better English and efficiently corrects texts."));
console.log(correctSentence("This tool will help you write better English and efficiently corrects texts"));
console.log(correctSentence("this tool will help you write better English and efficiently corrects texts."));
console.log(correctSentence("this tool will help you write better English and efficiently corrects texts"));
