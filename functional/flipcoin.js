/*****************************************************************************
*Execution : 1. default node cmd> node flipcoin.js
* Purpose: Print the percentage of head and tails after flipping coins with N times.
* @file : flipcoin.js
* @overview : Find percentage of Head And Tails
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

function flipcoin(){
const Utility=require('../utility/utility');

console.log("enter input ");

var n=Utility.inputRead();

var result=Utility.flipcoin(n);
}flipcoin()
module.exports=flipcoin();
