
/*****************************************************************************
*Execution : 1. default node cmd> node primenumber.js
* Purpose:  Determine wheather a string 'input string' is present in list or not ,
* @file : binarysearch.js
* @overview : if string  is  present then print found otherwise print not found.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

const Utility = require('../utility/utility');

let arr = ["aa", "bb", "cc","dd","ee"];
console.log(arr)
console.log("enter the element to search:")
var x = Utility.inputRead();


if (Utility.binarySearch(arr, x)) {
    console.log("Element found");
}
else { console.log("Element not found") }
