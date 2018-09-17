// Write a JavaScript program to calculate days left until next Christmas.

today = new Date();

const christmas = new Date(today.getFullYear(), 11, 25);
const oneDay = 1000 * 60 * 60 * 24;

if (today.getMonth() === 11 && today.getDate() > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}

const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay);

alert(`${daysLeft} days left until next Christmas.`);

