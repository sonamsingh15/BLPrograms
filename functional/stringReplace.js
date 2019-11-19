/*****************************************************************************
*Execution : 1. default node cmd> node stringReplace.js
* Purpose: given string replace by user name by using replce function.
* @file : stringReaplce.js
* @overview : print user name. replace by name.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/

const Utility=require('../utility/utility');
console.log("Enter user name")
var name=Utility.inputRead();
Utility.Stringreplace(name)