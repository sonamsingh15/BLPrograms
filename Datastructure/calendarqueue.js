
   /*****************************************************************************
*Execution : 1. default node cmd> node calender.js
* Purpose: takes the month and year as command­line arguments and prints the Calendar of the month. Store the Calendar in an 2D Array,
  the first dimension the week of the month and the second dimension stores the day
  of the week. using queue
* @file : calender.js
* @overview :  Print the result as following.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
   const Utility=require('../utility/datastructure');
    const util=require('../utility/queue')
    const st= new util.queue;
try{
console.log("Enter the month in [01-12]:");
var month=parseInt(Utility.inputRead());
console.log("enter the year ")
var year =parseInt(Utility.inputRead());
    
var day=Utility.day(1, month, year);		
    
Utility.PrintCalender(month, day, year);
     
 var value;
console.log("  Su  Mon Tue Wed Thu Fri Sat");
 for (var i = 0; i < 6; i++) 
    {
        console.log();
        for (var j = 0; j < 7; j++)
        {
          value=st.dequeue();
            if(value!=2)
            {
                console.log(value);
                
                
            }
            else
            {
                console.log("    ");
            }
            
            

        }
    }
    }
    catch( error)
 {
         console.log("Enter Correct Integer number..");
     }