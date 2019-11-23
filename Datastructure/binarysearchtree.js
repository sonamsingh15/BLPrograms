/*****************************************************************************
*Execution : 1. default node cmd> node binarysearchtree.js
* Purpose:  
* @file : binarysearchtree.js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 19/11/19
*****************************************************************************/
const Utility = require('../utility/datastructure');

console.log("Enter the total number of test cases");
var testcase = Utility.inputRead();
try {

    let format = /[^0-9]/;//give format to given number

    if (format.test(testcase || testcase === undefined || testcase === null)) {
        //check number is integer or not
        throw 'invalid input';//if number is not integer trough expctio
    }
    else {

        while (testcase > 0) {
            console.log("Enter the total number")
            var totalNode = Math.floor(Utility.inputRead());
            var totaltree = Utility.NumberofBST(totalNode);
            console.log(totaltree);
            testcase--;


        }
        console.log("end")
    }
}
catch (error) {
    console.log(error);
}