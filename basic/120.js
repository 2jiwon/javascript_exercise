// Write a JavaScript program to check if a point lies strictly inside a given circle.
//
// https://ko.wikipedia.org/wiki/두_점_사이의_거리
//
function checkPoints(a,b,x,y,r) {
  let dist = Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));

  if (dist < r) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPoints(0, 0, 2, 4, 6));
console.log(checkPoints(0, 0, 6, 8, 6));
