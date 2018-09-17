//Write a JavaScript program to get the current date.  Go to the editor
//Expected Output : 
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyy
const today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

dd = (dd < 10) ? '0' + dd : dd;
mm = (mm < 10) ? '0' + mm : mm;

console.log(`${mm}-${dd}-${yyyy}, ${mm}/${dd}/${yyyy}, ${dd}-${mm}-${yyyy}, ${dd}/${mm}/${yyyy}`);
