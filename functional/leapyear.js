const Utility=require('../utility/utility');


do{
   var year =Utility.inputRead();
}while(checkLength(year));
Utility.leapYear(year);
function checkLength(year)
{

    if(year.length<4 || year.length>4){
        console.log("year should be 4 digit number..");
        
        return true;

    }else{
        return false;

    }

}