/*****************************************************************************
*Execution : 1. default node cmd> node harmonic.js
* Purpose: Print the per.
* @file : harmonic.js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 15/11/19
*****************************************************************************/

function harmonic()
{
const Utility=require('../utility/utility');
console.log("enter number")

var num=Utility.inputRead();
//Utility.harmonic(num);
console.log(Utility.harmonic(num));
}
harmonic()
module.exports=harmonic()
