const Utility=require('../utility/utility');


console.log("'Enter your stack Amount:")
var stack = Utility.inputRead();

console.log("'Enter your goal Amount:")
var goal= Utility.inputRead();


console.log("'Enter the times to gamble:")
var times = Utility.inputRead();

Utility.gamble(times, stack, goal) 