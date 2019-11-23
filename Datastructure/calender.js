/*****************************************************************************
*Execution : 1. default node cmd> node calender.js
* Purpose: 
* @file : calender.js
* @overview : To check string is anagram or not.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility=require('../utility/datastructure');

console.log("Enter the month in [01-12]:");
var month=Utility.inputRead();
console.log("enter the year ")
var year =Utility.inputRead();
Utility.PrintCalender(month,year)