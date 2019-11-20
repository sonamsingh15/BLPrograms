


var readline = require("readline-sync");

module.exports = {

    //*--------------------Function of reading input-----------------------------*/ 

    inputRead() {
        let input = readline.question("");//get the value from user
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
                if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                    console.log(year + "leap year ")
                }
                else {
                    console.log(year + " not leap year ")
                } return true;
            }
        } catch (error) {
            console.log("invalid input")
            return error;
        }
    },
    //--------------------Flipcoin-----------------------------------------/
    flipcoin(n) {
        try {

            let format = /[^0-9]/;//give format to the given number
            if (format.test(n) || n === undefined || n === null) {
                //check if number is an integer or not 
                throw "invalid input";//if number is not integer throgh excption
                return false;
            } else {
                //no between 0-9
                var head = 0, tail = 0;
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
        } catch (error) {
            console.log("invalid input")
            return error;
        }
    },
    //-----------------------Harmonic number---------------------------------------//
    harmonic(num) {
        try {
            let format = /[^0-9]/;//give format to the given number

            if (format.test(num) || num === undefined || num === null) {
                //check if number is an integer or not 
                throw "invalid input";
                return false;

            } else {
                var har = 0;
                for (var i = 1; i <= num; i++) {
                    har = har + (1.0 / i);
                }
                console.log(har)
                return true;
            }
        }
        catch (error) {
            console.log("invalid input")
            return error;
        }

    },
    //----------------------------- prime factor------------------------------------------//
    factor(num) {

        try {
            let format = /[^0-9]/;//give format to the given number

            if (format.test(num || num === undefined || num === null)) {

                throw "invalid input"
                return false
            } else {

                for (var i = 2; i < num; i++) {
                    while (num % i == 0) {
                        console.log(i)
                        num = num / i;
                    }
                }
            }
            if (num == 2) {
                console.log(num)
                return true;
            }
        }
        catch (error) {
            return error;
        }

    },
    //-----------------------Array2D-----------------------------------------------
    array(row, col) {
        var format = /[0-9]/;
        if (format.test(row) && format.test(col)) {
            var arr = [];
            // Creates all lines:
            for (var i = 0; i < row; i++) {
                arr[i] = new Array(row);

                for (var j = 0; j < col; j++) {
                    var element = readline.question("Enter the value:");
                    arr[i][j] = element;
                }
            }
            console.log(arr.join("\n"))
            return true;
        }
        else {
            console.log("Invalid input");
        }
    },
    //---------------------Gambler Number----------------------------//
    gamble(times, stack, goal) {

        var bets = 0;
        var wins = 0;

        for (var i = 0; i < times; i++) {
            var cash = stack;
            while (cash > 0 && cash < goal) {
                bets++;
                if (Math.random() > 0.5)
                    cash++;
                else
                    cash--;
            }
            if (cash == goal) {
                wins++;
            }
        }
        console.log((wins + " wins out of " + times));

        console.log("wins percentage is " + (wins / times) * 100);

        console.log("loss percentage is " + (times - wins) / times * 100);

        console.log("Total bets in " + times + " games :" + bets);

        return wins;




    },
    //------------Triplet Number----------------------------------------------------//
    triplet(arr) {
        const n = arr.length;
        const sum = 0;
        let count = 0

        for (let i = 0; i < n - 2; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (arr[i] + arr[j] + arr[k] == sum) {
                        count = count + 1;
                        console.log("Triplet is: ", arr[i], arr[j], arr[k])
                    }

                }

            }
        }
        return count;
    },
    //-------------------powerof2---------------------------------------------
    power(n) {
        try {
            let format = /[^0-9]/;//give format to given number

            if (format.test(n || n === undefined || n === null)) {
                //check number is integer or not
                throw 'invalid input';//if number is not integer trough expctio
            } else {
                var i = 0
                power = 1;
                //compute
                while (i <= n) {
                    console.log("2^" + i + "=" + power)
                    //formula of power
                    power = power * 2
                    i++;
                }
            }
        } catch (error) {
            console.log("invalid input")
            return error
        }
    },
    //-------------------------String Replace-----------------------------------------
    Stringreplace(name) {
        try {
            let format = /[^a-zA-Z]/;//give format to given number

            if (format.test(name || name === undefined || name === null)) {
                //check number is integer or not
                throw 'invalid input';//if number is not integer trough expctio
            } else {
                var string = "Hi username ,how are you"
                console.log(string.replace("username", name))
            }
        } catch (error) {
            console.log("invalid input,please enter the valid input")
            return error
        }

    },
    //-------------------Tic tac toe----------------------------------------------------//
    //  playtime(){
    //      let move=0,x=0,y=0,draw=0,
    //      var turn =true

    //     //  index();
    //     //  initalizer();
    //     //  printBoard();

    //     //  do{
    //     //      if(turn){
    //     //      try{
    //     //          console.log("    your turn  ")
    //     //          move=this.readline("Enter your move [0-9]:");

    //     //          if(move<1|| movw>9 || isNaN(move)){
    //     //              turn = ture;
    //     //              throw'Invalid input try again.........'
    //     //          }else{
    //     //              move = move-1;
    //     //              x(move)
    //     //          }
    //     //         }

    //     //     }
    //     // }

    //     },

    //__________________________________________________________________________________//

    //__-__________________-Algorithm program_____________________________________________//_

    //-----anagram program---/

    anagram(string1, string2) {
        try {
            let format = /[^a-z,A-Z]/;//give format to the given number

            if (format.test(string1, string2 || string1, string2 === undefined || string1, string2 === null)) {

                throw "invalid input"
                return false
            } else {

                if (string1.length === string2.length) {
                    var str1 = string1.toLowerCase().split('').sort('').join('');
                    var str2 = string2.toLowerCase().split('').sort('').join('');
                    if (str1 === str2) {
                        console.log("This is angram");
                    }
                } else {
                    console.log("this is not anagram");
                }
            }
        } catch (error) {
            console.log("invalid input")
            return error
        }


    },
    //------------------PERMUTATION --------------------------------------//
    permute(str) {
        try {
            let format = /[^a-z,A-Z]/;//give format to the given number

            if (format.test(str || str === undefined || str === null)) {

                throw "invalid input"
                return false
            } else {
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
            }
        } catch (error) {
            console.log("invalid input")
            return error
        }
    },
    //---------------------------PRIME NUMBER-----------------------------------------

    prime(num) {

        try {
            let format = /[^0-9]/;//give format to the given number

            if (format.test(num || num === undefined || num === null)) {
                //check if number is an integer or not 
                throw "invalid input"
                return false

            } else {


                var flag = false;

                for (i = 2; i <= num; i++) {
                    if (i == 2) {
                        console.log(i)
                    }
                    for (j = 2; j < i; j++) {
                        if (i % j === 0 && j !== i) {
                            flag = false;
                            break;
                        }
                        else {
                            flag = true;
                        }
                    }
                    if (flag) {
                        console.log(i);

                    }
                }
                return true;
            }
        }

        catch (error) {
            console.log('invalid input')
            return error;
        }

    },
    //------------------------Bubble Sort------------------------------------

    bubbleSort(a) {

        do {
            var swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        console.log(a);

    },
    //-------------------------Binarysearch program----------------------------------------
    binarySearch(arr, x) {
        try {
            let format = /[^a-zA-Z]/;//give format to given number

            if (format.test(x) || x === undefined || x === null) {
                //check number is integer or not
                throw 'invalid input';//if number is not integer trough expctio

            } else {

                let start = 0, end = arr.length - 1;
                while (start <= end) {
                    let mid = Math.floor((start + end) / 2);
                    if (arr[mid] === x)
                        return true;

                    else if (arr[mid] < x)
                        start = mid + 1;

                    else
                        end = mid - 1;
                }

                return false;
            }
        }
        catch (error) {
            console.log("invalid input")

            return error
        }

    },
    //----------------------------InsrtionSort-----------------------------------------------
    insertionsort(arr) {

        var n = arr.length;
        for (var i = 1; i < n; ++i) {
            var key = arr[i];
            var j = i - 1;


            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;

            }
            arr[j + 1] = key;
        }
        return arr;

    },
    //-------------------------mergeSort-----------------------------

    merge(left, right) {
        var sort = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                sort.push(left[0]);
                left = left.slice(1)
            } else {
                sort.push(right[0]);
                right = right.slice(1)
            }
        } while (left.length) sort.push(left.shift());
        while (right.length) sort.push(right.shift());
        return sort;
    },
    mergesort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        else {
            var midpoint = parseInt(arr.length / 2);
            var left = arr.slice(0, midpoint);
            var right = arr.slice(midpoint, arr.length);
            return this.merge(this.mergesort(left), this.mergesort(right));
        }
    },
    //-------------------GuessNumber----------------------------------------------------------//
    guessnumber(num) {
        try {
            let format = /[^a-zA-Z]/;//give format to given number

            if (format.test(num || num === undefined || num === null)) {
                //check number is integer or not
                throw 'invalid input';//if number is not integer trough expctio
            } else {

                var low = 0, high = 100, mid;
                while (low < high) {
                    mid = Math.floor((low + high) / 2);

                    console.log("enter 1 if no between " + low + "-" + mid);
                    console.log("enter 2 if no between " + (mid + 1) + "-" + high);

                    var num = this.inputRead();
                    if (num == 1) {
                        high = mid;
                    }
                    else if (num == 2) {
                        low = mid + 1;
                    }
                }
                console.log("guess number is " + low);
            }
        }
        catch (error) {
            return error;
        }

    },
    //--------------------------Squreroot---------------------------------------------------------//
    sqrtNewton(c) {
        var t = c
        try {
            let format = /[^0-9]/;

            if (format.test(c || c === undefined || c === null)) {

                throw 'invalid input';
            } else {

                var epsilon = 1e-15;
                while (Math.abs(t - c / t) > epsilon * t) {
                    t = ((c / t) + t) / 2.0;
                }
                console.log(t)
            }
        }
        catch (error) {
            console.log('invalid input')
            return error;
        }
    },
    //-------------------------Temperature---------------------------------------------------------
    tempcon(far, cel) {
        
        //  try {
        //      let format = /[^0-9]/;

        //      if (format.test(far)(cal || far,cal === undefined || far,cal === null)) {

        //          throw 'invalid input'
        //      } else {
            var t=c
        var c = (far - 32) * 5 / 9;
        console.log("celceeius converted temprature:" + c + "c")
        var f = (cel * 5 / 9) + 32;
        console.log("fahrenhite converted temperature is:" + f + "f")
        //     }
        //  }
        //  catch (error) {
        //     console.log('invalid input')
        //      return error;
        // }
    },
    //-------------------------VendingMachine-----------------------------------------------------
    vending(cash) {
        try {
            let format = /[^0-9]/;//give format to given number

            if (format.test(cash || cash === undefined || cash === null)) {

                throw 'invalid input';

            } else {

                var a = ["1 ", "2 ", "5", "10 ", "20 ", "50 ", "100 ", "200 ", "500 ", "1000 ", "2000 "]

                for (i = a.length - 1; i >= 0; i--) {
                    var note = 0;
                    while (cash >= a[i]) {
                        cash = cash - a[i];
                        note = note + 1;
                    }
                    if (note > 0) {
                        console.log(a[i] + "number of notes" + note)
                    }
                }
            }
        }
        catch (error) {
            console.log("invalid input")
            return error;
        }
    },
    //-------------------------*********************************-----------------------------------------

}