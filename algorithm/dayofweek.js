const Utility=require('../utility/utility')

    console.log("Enter the day");
    var day=Utility.inputRead();
    console.log("Enter the Month");
    var month=Utility.inputRead();
    console.log("Enter the year");
    var year=Utility.inputRead();
    
    var result=Utility.dayofweek(day,month,year);
    
    // switch(result)
    //  {
    //  case 1:{console.log("Monday");}break;
    //  case 2:{console("Tuesday");}break;
    //  case 3:{console.log("Wednesday");}break;
    //  case 4:{console.log("Thursday");}break;
    //  case 5:{console.log("Friday");}break;
    //  case 6:{console.log("Saturday");}break;
    //  case 7:{console.log("Sunday");}break;
    //  default:{console.log("Some problem");}
    //  }
   
     
