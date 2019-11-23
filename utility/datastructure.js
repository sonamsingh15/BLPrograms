var readline = require("readline-sync");

module.exports = {

    //*--------------------Function of reading input-----------------------------*/ 

    inputRead() {
        let input = readline.question("");//get the value from user
        return input;
    },
    //---------------------------------------------
    NumberofBST(totalNode) {    //catalin number formula
        var numerator = this.factorial(2 * totalNode);
        var denominator = (this.factorial(totalNode + 1)) * (this.factorial(totalNode))
        //difference is used to calculate the formula;
        var differentTrees = numerator / denominator;
        return differentTrees;

    },

    factorial(i) {
        var fact = 1;
        while (i > 0) {
            fact = fact * i;
            i--
        }
        return fact;

    },
    //------------------------------------calender------------------------------------
    PrintCalender(month, year) {
        /**
       * @description month at each postion display in output after printing
       */
        months = [" ", "january", "february", "march", "april", "may", "june", "july", "august", "september",
            "october", "november", "december"]
        days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,]

        /**
        *@decription if entered input of month is equal to 2 then is leap year
                     check for year is leap or not.
        * @function LeapYear()
        * @param : year and month
       **/

        if (month == 2 && this.LeapYear(year)) {
            days[month] = 29;
        }
        console.log()
        console.log("  " + months[month] + " " + year)
        console.log();
        console.log(" S  M  TU  W  TH  F  S")

        var d = this.day(month, year);
    
        for (let i = 1; i <= d; i++) {
            process.stdout.write("   ");
        }
        for (let i = 1; i <= days[month]; i++) {
            if (i <= 9) {
                /**
                 * 
                 */
                process.stdout.write(" 0" + i);
            } else {
                process.stdout.write(" " + i)
            }
            if (((i + d) % 7 == 0) || i == days[month]) {
                console.log();
            }
            //  if (((i + parseInt(d)) % 7 == 0)) [
            //      console.log()
            //  ]

        }
        console.log();
    },
    /**
     * @description check if entered year is leap or not
     * @param year
     * @function LeapYear
     */
    LeapYear(year) {

        if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * @description this is the function determines the first day of week
                  from which the month starts
      *@param: month=m1 and year=y1 or day=d
      *@function day
     */
    day(month, year) {
        let d = 1;
        let y1 = parseInt(year - (14 - month) / 12);
        let x = parseInt (y1 + (y1 / 4) - (y1 / 100) + (y1 / 400));
        let m1 =parseInt( month + 12 * ((14 - month) / 12) - 2);
        let d1 = parseInt((d + x + (31 * m1) / 12) % 7);
        return d1;
    },
    // program to print prime Array-----------------------------------
   

/**
    *@description:read input 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/


    checkPrime(number) {
        var i, temp = 0, flag = 0;
        temp = (number / 2 | 0);
        if (number == 0 || number == 1) {
            return false
        }
        else {
            for (i = 2; i <= temp; i++) {
                if (number % i == 0) {
                    return false;
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                return true;
            }
        }
    


    },
    /**
    *@description:read input 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/
    //------------
    storeIn2DArray(prime, primeArray) {
        var range = 100, i = 0, j = 1;
        for (let p = 0; p < prime.length; p++) {
            if (prime[p] < range) {
                primeArray[i][j] = prime[p];
                j++;
            }
            else {
                i = i + 1;
                j = 1;
                range = range + 100;
                primeArray[i][j] = prime[p];
            }
        }
        return primeArray;
    },
 primearray()
{
	 array = [10][100];  //for storing 1000 elements
	prime = [10][100]; //for stroring 1000 prime numbers
	var z = 1;
	for (var i = 0; i < 10; i++)     
	{
		
		for (var j = 0; j < 100; j++) 
		{
			array[i][j] = z;
			z++;
		}
	}
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 100; j++)
		{
			if (this.checkPrime(array[i][j])) //prime number array
			{
				prime[i][j] = array[i][j];
			} else 
			{
				prime[i][j] = -1;
			}
		}
	}
	for (var i = 0; i < 10; i++) 
	{
		for (var j = 0; j < 100; j++) 
		{
			if (prime[i][j] != -1)
				console.log(prime[i][j] + " ");
		}
		console.log();
	}

},
//ublic static void calender(int month, int year)  //passed parameters are 

//----------------------

}

