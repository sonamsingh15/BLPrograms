/*****************************************************************************
*Execution : 1. default node cmd> node vendingmachine.js
* Purpose:  take ammount and they distrubuteed in  types of note. 
* @file : vendingmachine.js
* @overview : print no of note in various number of note,
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 15/11/19
*****************************************************************************/
const Utility=require('../utility/utility')

console.log("Enter the amount:")
var cash=Utility.inputRead();
Utility.vending(cash);

