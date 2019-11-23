
 const utility = require('../utility/Dequeue');

 
 console.log('Enter the string');
 let string=utility.inputRead();
 
 var flag=utility.palindrome_checker(string);
 if(flag==false)
 console.log("String is not Palindrome")
 else
 console.log("Strings are palindrome")