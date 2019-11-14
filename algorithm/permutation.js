//const Utility=require('..utility/utility');
const Utility=require('../utility/utility');

console.log("Enter the string for permutation")
var string=Utility.inputRead();
var len=string.length;

Utility.permute(string,0,len-1);