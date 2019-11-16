


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
            var head = 0, tail = 0;
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
        } catch (error)//value is not integer than it will caught by catch block ) {
        {
            return error;
        }
    },
    //-----------------------Harmonic number---------------------------------------//
    harmonic(num) {
        try {
            let format = /[^0-9]/;//give format to the given number

            if (format.test(num || num === undefined || num === null)) {
                //check if number is an integer or not 
                throw "invalid input,please enter the vaild input";//if number is not 

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
            return error;
        }

    },
    //----------------------------- prime factor------------------------------------------//
    factor(num) {

        try {
            let format = /[^0-9]/;//give format to the given number

            if (format.test(num || num === undefined || num === null)) {

                throw "invalid input,please enter the vaild input";
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
         try {
             let format = /[^0-9]/;//give format to the given number

             if (format.test(num || num === undefined || num === null)) {

                 throw "invalid input,please enter the vaild input";
             } else {


                var arr = [];
                // Creates all lines:
                for (var i = 0; i < row; i++) {
                    arr[i] = [];

                    for (var j = 0; j < col; j++) {
                        console.log("Enter the element")
                        var element = readline.question("Enter the value:")
                        arr[i][j] = element + "";
                    }
                }
                console.log(arr.join())
                return true;
            }
         } catch (error) {
            return error;
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
        try {
            let format = /[^0-9]/
            if (format.test(arr || arr === undefined || arr === null)) {
                throw 'Invalid input'
            }
            else {
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
            }
        }
        catch (error) {
            
            return error
        }
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
            console.log("invalid input,please enter the valid input")
            return error
        }
    },
    //-------------------------String Replace-----------------------------------------
    Stringreplace(name) {
        var string = "Hi username ,how are you"
        console.log(string.replace("username", name))

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
        if (string1.length === string2.length) {
            var str1 = string1.toLowerCase().split('').sort('').join('');
            var str2 = string2.toLowerCase().split('').sort('').join('');
            if (str1 === str2) {
                console.log("This is angram");
            }
        } else {
            console.log("this is not anagram");
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

    prime(num) {

        try {
            let format = /[^0-9]/;//give format to the given number

            if (format.test(num || num === undefined || num === null)) {
                //check if number is an integer or not 
                throw "invalid input,please enter the vaild input";//if number is not 

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

        let start = 0, end = arr.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === x) return true;

            else if (arr[mid] < x)
                start = mid + 1;

            else
                end = mid - 1;
        }

        return true;

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

    },
    //--------------------------Squreroot---------------------------------------------------------//
    sqrtNewton(c) {
        var t = c
        var epsilon = 1e-15;
        while (Math.abs(t - c / t) > epsilon * t) {
            t = ((c / t) + t) / 2.0;
        }
        console.log(t)
    },
    //-------------------------Temperature---------------------------------------------------------
    tempcon(far, cel) {
        var c = (far - 32) * 5 / 9;
        console.log("celceeius converted temprature:" + c + "c")
        var f = (cel * 5 / 9) + 32;
        console.log("fahrenhite converted temperature is:" + f + "f")

    },
    //-------------------------VendingMachine-----------------------------------------------------
    vending(cash) {
        var a = ["1 ", "2 ", "5", "10 ", "20 ", "50 ", "100 ", "200 ", "500 ", "1000 ", "2000 "]
        var len = a.length;
        var count = 0;
        var v = [];
        for (var i = len - 1; i >= 0; i--) {
            while (cash >= a[i]) {
                cash -= a[i]
                v = v + (a[i])
                count++;
            }

        }
        console.log("minimun cash:" + count);
        console.log(v);
    },
    //-------------------------*********************************-----------------------------------------

}