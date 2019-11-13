const Utility=require('../utility/utility');
do {
    console.log("Enter the positive number:");
    var num=Utility.inputRead();
    
}while(checknumber(num));

Utility.factor(num);
function checknumber(num)
{
  if(num<0){
      console.log("number should be positive:");

      return true;
  }else{
     console.log("please enter the number:")
     Utility.inputRead();
      return false;
  }
}
    
