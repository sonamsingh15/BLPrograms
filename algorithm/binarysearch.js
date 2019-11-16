
const Utility = require('../utility/utility');



//Utility.binarySearch(arr,x)
let arr = ["sunday", "monday", "tuesday","april","july"];
console.log(arr)
console.log("enter the element to search:")
var x = Utility.inputRead();
//let x = 0; 
//console.log(x)

if (Utility.binarySearch(arr, x)) {
    console.log("Element found");
}
else { console.log("Element not found") }