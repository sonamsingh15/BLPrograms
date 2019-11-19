/*****************************************************************************
*Execution : 1. default node cmd> node power.js
* Purpose: check the number between 0 to 31 then print power.
* @file : power.js
* @overview : print the power of 2.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 15/11/19
*****************************************************************************/
const Utility=require('../utility/utility');
console.log("Enter the number:");
var n=Utility.inputRead();
Utility.power(n)
