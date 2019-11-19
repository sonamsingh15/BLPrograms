/*****************************************************************************
*Execution : 1. default node cmd> node gamblerjs
* Purpose: in this gamble the amount  of stake,goal,trail all are depend on win or loss in gambling, 
* @file : gambler.js
* @overview : if cash is greater than goal than print win.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 15/11/19
*****************************************************************************/
function gamble(){
const Utility=require('../utility/utility');


console.log("'Enter your stack Amount:")
var stack = Utility.inputRead();

console.log("'Enter your goal Amount:")
var goal= Utility.inputRead();


console.log("'Enter the times to gamble:")
var times = Utility.inputRead();

Utility.gamble(times, stack, goal) 
}
module.exports=gamble();