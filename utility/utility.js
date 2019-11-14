


var readline = require("readline-sync");

module.exports = {

    //*--------------------Function of reading input-----------------------------*/ 

    inputRead() {
        let input = readline.question("enter input:");//get the value from user
        return input;
    },
    //-----------------------leap Year--------------------------------------------/
    leapYear(year) {
        try {
            let format = /[^0-9]/;//give format to given number

            if (format.test(year || year === undefined || year === null)) {
                //check number is integer or not
                throw 'invalid input';//if number is not integer trough expction

            } else {
                if ((year % 4 == 0 && year != 100) && year % 400 == 0) {
                    console.log(year + "leap year")
                }
                else {
                    console.log(year + "not leap year")
                } return true;
            }
        } catch (
        error
        ) {
            return error;
        }
    },
    //--------------------Flipcoin-----------------------------------------/
    flipcoin(n) {
        try {
            var head = 0, tail = 0;//initialization value of head and tail
            let format = /[^0-9]/;//give format to the given number

            if (format.test(n || n === undefined || n === null)) {
                //check if number is an integer or not 
                throw "invalid input";//if number is not integer throgh excption
            } else {
                //no between 0-9
                for (var i = 0; i < n; i++) {
                    if (Math.random() > 0.5) {
                        //randomly take value between 0 to 1 and check num is greater than 0.5
                        // console head
                        head++;
                    } else {
                        tail++;
                    }
                }
            }
            console.log("head :" + head);
            console.log("tail:" + tail);
            var total = head + tail;//add total vale of head

            var ph = (100 * head) / total;//calutae percentage of head
            console.log("percentage of head: " + ph);
            var pt = (100 * tail) / total;//calculate percentage of tail
            console.log("percentage of tail: " + pt);
            return true;
        } catch (
        error //value is not integer than it will caught by catch block
        ) {
            return error;
        }
    },
    //-----------------------Harmonic number---------------------------------------//
    harmonic(num) {
        try {
            var h = isNaN(num)
            // console.log(h);
            if (isNaN(num)) {
                throw 'invalid input ! please inter valid input:';
            } else {
                // console.log(h);
                var har = 0;
                for (var i = 1; i <= num; i++) {
                    har = har + (1.0 / i);
                }
                //console.log(har)
                return har;
            }
        }
        catch (e) {
            return e;
        }

    },
    //----------------------------- prime factor------------------------------------------//
    factor(num) {
        try {
            var h = isNaN(num)
            if (isNaN(num)) {
                throw error;//"invalid input ! please inter valid input:";
            } else {

                for (var i = 2; i < num; i++) {
                    while (num % i == 0) {
                        console.log(i + ' ')
                        num = num / i;
                    }
                }
            }
            if (num == 2) {
                console.log(num)
            }
        }
        catch (error) {
            console.log("Enter the valid number")
            this.inputRead()
            this.factor()
        }

    },
    //-----------------------Array2D-----------------------------------------------
    array(row, col) {

        var arr = [];
        // Creates all lines:
        for (var i = 0; i < row; i++) {
            arr[i]=[];

            for (var j = 0; j < col; j++) {
                console.log("Enter the element")
                var element =this.input()
                arr[i][j]=element+"";
            }
        }
        console.log(arr)
    },
    //---------------------Gambler Number----------------------------//
    Gambler(cash, time, goal) {
        //var stake,trail,goal;
        var wins = 0;
        var loss = 0;
        for (var i = 0; i <= time; i++) {
            //compute
            while (cash > 0 && cash < goal) {

                if (Math.random() < 0.5) {
                    //win add1
                    cash++;
                    //time--;
                    wins++;
                }
                else {
                    //loss sub1
                    loss++;
                    cash--;
                    //time--;
                }
            }



            //total win
            var total = wins + loss
            var winingpercentage = (wins / total) * 100;
            var losspercentage = (loss / total) * 100;
        }
        //console to print 
        console.log("wins percentage:" + winingpercentage)
        console.log("loss percentage:" + losspercentage)




    },
    //------------Triplet Number----------------------------------------------------//
    triplet(arr) {
        // console.log('vvv',arr)
        const n = arr.length;
        const sum = 0;
        let count = 0

        for (let i = 0; i < n; i++) {


            for (let j = i + 1; j < n; j++) {


                for (let k = j + 1; k < n; k++) {


                    if (arr[i] + arr[j] + arr[k] == sum) {
                        count = count + 1;
                        console.log("Triplet is: ", arr[i], arr[j], arr[k])
                    }

                }

            }
        }
        return count
    },
    //-------------------powerof2---------------------------------------------
    power(n) {
        var i = 0
        power = 1;
        //compute
        while (i <= n) {
            console.log("2^" + i + "=" + power)
            //formula of power
            power = power * 2
            i++;
        }
    },
    //-------------------------String Replace-----------------------------------------
    Stringreplace(name) {
        var string = "Hi username ,how are you"
        console.log(string.replace("username", name))

    },
    //__________________________________________________________________________________//

    //__-__________________-Algorithm program_____________________________________________//_

    //-----anagram program---/

    anagram(str1, str2) {
        var str1 = this.reduceCodeForAnagram(str1);
        var str1 = this.reduceCodeForAnagram(str2);

        if (str1.length == str2.length) {

            if (sort.equal(str1, str2)) {
                console.log()

            }

            console.log(spilt(), sort(), join())
        }
    },
    //------------------PERMUTATION --------------------------------------//
    permute(str) {
        var arr = str.split("");
        console.log(arr);
        var arr1 = [];
        const a = str.length;
        for (var i = 0; i < arr.length; i++) {
            var value = "";
            for (var j = i; j < a; j++) {
                value = value + arr[j];
                var b = str.length - value.length;
            }
            if (arr1.length < arr.length) {
                value = value + str.substring(0, b);

            }
            if (!arr1.includes(value)) {
                arr1.push(value);

            }

        }
        console.log(arr1)
    },
    //---------------------------PRIME NUMBER-----------------------------------------
  
  prime(num){
    for(var i = 2; i < 100; i++)
    {
        var prime = [];
        for(var j = 0; j <= i; j++)
        {
            var p = i % j;
        }
        if(p != 0) prime.push(i);
            
    }

    for(var k = 0; k < prime.length; k++)
    {
    
    }
}

}
