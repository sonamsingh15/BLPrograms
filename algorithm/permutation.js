/*****************************************************************************
*Execution : 1. default node cmd> node permutation.js
* Purpose: enamurates all permutation on element two different apporaches  inculded 
* @file : permutation.js
* @overview : To print permutation of string
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

const Utility=require('../utility/utility');
console.log("Enter the string for permutation")
var string=Utility.inputRead();
var len=string.length;
Utility.permute(string,0,len-1);
