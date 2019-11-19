
/*****************************************************************************
*Execution : 1. default node cmd> node leapYear.js
* Purpose: check the year is divded by 4,then  year is leapyear or  not .
* @file : leapYear.js
* @overview : if the year is leap than print leap year otherwise not leap year.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

function leapYear()
{
const Utility=require('../utility/utility');
console.log("enter year")
var year =Utility.inputRead()
Utility.leapYear(year);
}leapYear();
module.export=leapYear();