const Utility = require('../utility/datastructure');
const util = require('../utility/stack');
const  st=new util.Stack;
months = ["", "january", "February", "march", "April", "may", "june", "july", "August", "September", "October", "November", "December"];
days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    console.log("Enter the month in [01-12]:");
    var month = Utility.inputRead();
    console.log("enter the year ")
    var year = Utility.inputRead();
    if (month == 2 && Utility.LeapYear(year)) {
        days[month] = 29;
    }
    day = Utility.day(1, month, year)
    // daymonth = date[month];

    console.log()
    console.log("  " + months[month] + " " + year)
    console.log();
    console.log(" S  M  TU  W  TH  F  S")

    var d = Utility.day(month, year);

    for (let i = 1; i <= d; i++) {
        process.stdout.write("   ");
    }
    for (let i = 1; i <= days[month]; i++) {
        if (i <= 9) {


            process.stdout.write(" 0" + i);
         st.push(i)
        } else {
            process.stdout.write(" " + i)
          st.push(st.pop(i))
        }
        if (((i + d) % 7 == 0) || i == days[month]) {
            console.log();
        }


    }
    console.log();

