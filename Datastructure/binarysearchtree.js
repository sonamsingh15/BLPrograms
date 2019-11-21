/*****************************************************************************
*Execution : 1. default node cmd> node binarysearchtree.js
* Purpose:  
* @file : binarysearchtree.js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 19/11/19
*****************************************************************************/
const Utility=require('../utility/datastructure');

console.log("Enter the total number of test cases");
var testcase =Utility.inputRead();

while(testcase >0){
    console.log("Enter the total number")

    var totalNode =Math.floor(Utility.inputRead());
    var totaltree =Utility.NumberofBST(totalNode);
    console.log(totaltree );
    testcase--;


}
console.log("end")