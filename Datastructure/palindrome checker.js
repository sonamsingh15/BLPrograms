
 /*********************************************************************************************
*Execution : 1. default node cmd> node palindromechecker.js
* Purpose: A palindrome is a string that reads the same forward and backward,
        The solution to this problem will use a deque to store the characters of
     the string. We will process the string from left to right and add each character to
the rear of the deque.
d. O/P ­> True or False to Show if the String is Palindrome or
* @file : palindromechecker.js
* @overview : input a string of characters and check whether it is a palindrome.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
***********************************************************************************************/
 const utility = require('../utility/Dequeue');

 
 console.log('Enter the string');
 let string=utility.inputRead();
 
 var flag=utility.palindrome_checker(string);
 if(flag==false)
 console.log("String is not Palindrome")
 else
 console.log("Strings are palindrome")