const Utility=require('../utility/utility');
var cash,time,goal;
console.log("Enter the cash");
var cash=Utility.inputRead();
console.log("Enter the time:");
var time=Utility.inputRead();
console.log("Enter the goal:");
var goal=Utility.inputRead();
if(cash==goal){
    Utility.Gambler(cash,time,goal);
}
else{
    console.log('should be less than goal')
}