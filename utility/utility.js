


var readline = require("readline-sync");

module.exports = {

    //*--------------------Function of reading input-----------------------------*/ 

    inputRead() {
        let input = readline.question("enter input:");//get the value from user
        return input;
    },
    //-----------------------leap Year--------------------------------------------/
    leapYear(year) {
        if ((year % 4 == 0 && year != 100) || year % 400 == 0) {
            console.log(year + "leap year")
        }
        else {
            console.log(year + "not leap year")
        }
    },
    //--------------------Flipcoin-----------------------------------------/
    flipcoin(n) {
        var head = 0, tail = 0;
        for (var i = 0; i < n; i++) {
            if (Math.random() < 0.5) {
                tail++;
            } else {
                head++;
            }
        }
        var ph = (head / n) * 100;
        console.log("percentage of head: " + ph);
        var pt = (tail / n) * 100;
        console.log("percentage of tail: " + pt);
    },
    //-----------------------Harmonic number---------------------------------------//
    harmonic(num) {

        var har = 0;
        for (var i = 1; i <= num; i++) {
            har = har + (1.0 / i);
        }
        console.log(har)
    },
    //----------------------------- prime factor------------------------------------------//
    factor(num) {
        for (var i = 2; i <= num; i++) {
            while (num % i == 0) {
                console.log(i + ' ')
                num = num / i;
            }
        }
        if (num == 2) {
            console.log(num)
        }
    },
    //---------------------------windchill------------------------------------------------
    wind(t, v) {
        var temp1 = 0.6215 * t;
        var temp2 = 0.4275 * t;
        var temp3 = Math.pow(v, 0.16);
        var temp4 = temp - 35.75;
        var temp = 35.74 + temp1 + temp4 * temp3;
    },
    //-----------------------Array2D-----------------------------------------------

    Array(row, col) {

        var arr = [];
        // Creates all lines:
        for (var i = 0; i < row; i++) {

            // Creates an empty line
            arr.push([]);

            // Adds cols to the empty line:
            arr[i].push(new Array(col));

            for (var j = 0; j < col; j++) {
                // Initializes:
                arr[i][j] = Utility.inputRead();
            }
        }
        return arr;
        console.log("2D Array:", Array(row, col))
    },
    //---------------------Gambler Number----------------------------//
    Gambler(stake, trail, goal) {
        //var stake,trail,goal;
        var win = 0;
        var bet = 0;
        var cash = stake;
        for (var t = 0; t <= trail; t++) {
            while (cash > 0 && cash < goal) {
                bet++;
                if (Math.random() < 0.5) {
                    cash++;
                } else {
                    cash--;
                }
            }
            if (cash === goal) {
                win++;
            }
        }
        var avg = (1.0 * bet) / trail;
        var p = 100.0 * win / trail;
        console.log(win + "win is =" + trail);
        console.log(" percentage of game won = " + p)
        console.log("Avg# bet=" + avg);


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
                        console.log("Triplet is: ", arr[i], arr[j] , arr[k])
                    }

                }

            }
        }
        return count
    },
 //-------------------
    



}



