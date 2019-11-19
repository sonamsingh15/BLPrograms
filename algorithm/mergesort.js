/*****************************************************************************
*Execution : 1. default node cmd> node mergesort.js
* Purpose:  given array is  sort by using merge sort.
* @file : mergesort.js
* @overview : To print string into accendind  order by using merge sort,
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility=require('../utility/utility')
console.log("unsorted array ")
var unsortedArr = ['india','state','people','culture','singing','dancinig']
console.log(unsortedArr)
console.log( );
console.log(' sorted array!')
console.log(Utility.mergesort(unsortedArr));
