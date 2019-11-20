
/*****************************************************************************
*Execution : 1. default node cmd> node anagram.js
* Purpose:  Determine wheather a string is simillar or not first check length of string,after check 
            lowercase and uppercase condition .
* @file : anagram.js
* @overview : To check string is anagram or not.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/const Utility=require('../utility/utility');


console.log("enter the str1:")
var string1=Utility.inputRead();
console.log("enter the str2:")
var string2=Utility.inputRead();
Utility.anagram(string1, string2)