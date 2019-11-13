const Utility=require('../utility/utility');
var stake,trail,goal;
console.log("Enter the stake");
var stake=Utility.inputRead();
console.log("Enter the trail:");
var trail=Utility.inputRead();
console.log("Enter the goal:");
var goal=Utility.inputRead();
Utility.Gambler(stake,trail,goal);