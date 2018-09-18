// Write a JavaScript program to check the total marks of a student in various examinations. 
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." 
// the student will get A+ grade and total marks must be greater than or equal to 90. 
// Return true if the student get A+ grade or false otherwise. 
//

function exam_total() {
  let total = [];
  let sum = 0;
  total.push(document.getElementById('exam').value);
  for (let i of total) {
    sum += i;
  }

  return sum;
}

function exam_eval() {
  total = exam_total();

    if (total >= 89 && total <= 100) {
      document.getElementById('result').innerHTML = 'A+';
    } else {
      document.getElementById('result').innerHTML = 'not A+, but Good';
    }
}

function exam_final() {
  total = exam_total();

    if (total >= 90 && total <= 100) {
      document.getElementById('f_result').innerHTML = 'A+';
    } else {
      document.getElementById('f_result').innerHTML = 'not A+, but Good';
    }
}
