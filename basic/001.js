//Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday. 
//Current time is : 10 PM : 30 : 38

const today = new Date();

const day = today.getDay();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(`Today is : ${dayList[day]}.`);

let     hour = today.getHours();
const   min  = today.getMinutes();
const   sec  = today.getSeconds();
let  prepand = (hour >= 12) ? 'PM' : 'AM';
hour = (hour >= 12)? hour - 12 : hour;

if (hour === 0 && prepand === 'PM') {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = 'Noon';
  } else {
    hour = 12;
    prepand = 'PM';
  }
} else if (hour === 0 && prepand === 'AM') {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = 'Midnight';
  } else {
    hour = 12;
    prepand = 'AM';
  }
}

console.log(`Current Time : ${hour} ${prepand} : ${min} : ${sec}`);
