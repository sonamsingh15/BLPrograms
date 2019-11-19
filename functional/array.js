/*****************************************************************************
*Execution : 1. default node cmd> node array.js

* Purpose: Enter the row and colum element in 2D array
* @file : array.js
* @overview : print the number of row and colum all elements in 2D array
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

const Utility=require('../utility/utility');

var row ,col,i,j
console.log("Enter the row size max[5]");
var row=Utility.inputRead();
console.log("Enter the col size max[5]");
var col=Utility.inputRead();
Utility.array(row,col)


