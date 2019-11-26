/*****************************************************************************
*Execution : 1. default node cmd> node calender.js
* Purpose: takes the month and year as command­line arguments and prints the Calendar of the month. Store the Calendar in an 2D Array,
  the first dimension the week of the month and the second dimension stores the day
  of the week. 
* @file : calender.js
* @overview : Print the result as following.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility=require('../utility/datastructure');

console.log("Enter the month in [01-12]:");
var month=(Utility.inputRead());
console.log("enter the year ")
var year =(Utility.inputRead());
Utility.PrintCalender(month,year)