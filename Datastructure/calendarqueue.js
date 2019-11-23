
    const Utility=require('../utility/datastructure');
    const util=require('../utility/queue')
    const st= new util.queue;
try{
console.log("Enter the month in [01-12]:");
var month=Utility.inputRead();
console.log("enter the year ")
var year =Utility.inputRead();
    
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
            if(value!=0)
            {
                console.log("%4d",value);
                
                
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