 /*****************************************************************************
*Execution : 1. default node cmd> node calender.js
* Purpose: Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range. Store
           the prime numbers in a 2D Array, the first dimension represents the range ,
            While the second dimension represents the prime numbers in
* @file : calender.js
* @overview : To check number  is prime or not.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
 const Utility=require('../utility/datastructure');

var primenumbers = []
var startrange=0;
 var endrange = 100;


var i = 0
while(i < 10){ //number of rows
primenumbers[i] = Utility.primeRange(startrange, endrange) //function to calculate prime numbers for a range
startrange = startrange + 100
endrange = endrange + 100
i++
}


//display
start = 0; end = 100
for (i = 0; i < 10; i++) {
console.log("[ "  + start+ "-" + end + " ]" + "[" + "[" +primenumbers[i] + "]" + " ]"); //printing prime numbers according to its range
start +=100;
end += 100
console.log();
}
