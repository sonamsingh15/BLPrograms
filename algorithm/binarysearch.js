
const Utility=require('../utility/utility');
var arr=["d","t","P","C","S","Y"]
console.log(arr)
console.log("Enter the element to search");



var string=Utility.inputRead();
//var string2=Utiltiy.inputRead();
//Utility.binarySearch(start,end,middle) 
Utility.binarySearch(arr,string)