/*****************************************************************************
*Execution : 1. default node cmd> node factor.js
* Purpose: check the given number is divide by 2 and remendar 1 is prime number factor . 
* @file : factor.js
* @overview : print factor number
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

const Utility=require('../utility/utility');
console.log("inter number")
var num=Utility.inputRead();
console.log(Utility.factor(num));

  
