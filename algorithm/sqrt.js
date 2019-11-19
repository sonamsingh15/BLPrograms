
/*****************************************************************************
*Execution : 1. default node cmd> node sqrt.js
* Purpose:  To find the square root by using newton method.
* @file : sqrt.js
* @overview :print squre root to take as input. 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 15/11/19
*****************************************************************************/
const Utility=require('../utility/utility')

console.log("Enter the number to find  sqrt:")

var c=Utility.inputRead();

Utility.sqrtNewton(c)