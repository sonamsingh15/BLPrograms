/*****************************************************************************
*Execution : 1. default node cmd> node primenumber.js
* Purpose:  Determine wheather a number 'input number ' is prime or not.
* @file : primenumber.js
* @overview : To check if number is prime or not.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/


const Utility=require('../utility/utility');
console.log("Enter the number:");
var num=Utility.inputRead();
Utility.prime(num);
