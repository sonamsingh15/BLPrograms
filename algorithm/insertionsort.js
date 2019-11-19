/*****************************************************************************
*Execution : 1. default node cmd> node insertionsort.js
* Purpose:  given string is sort by using insertion sort.
* @file : insertionsort.js
* @overview : To print sorted string using insertion sort.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility = require('../utility/utility');




var arr = ['mango','apple','coffee','wind','tea']
console.log("unsorted array");

console.log(arr)

console.log( );

console.log("sorted array")
console.log(Utility.insertionsort( arr) )