//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//
year = window.prompt('Input a year: ');
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
window.alert(x);
