


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
                //check if number is an integer or not 
                throw "invalid input,please enter the vaild input";//if number is not 

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
                return true;
            }
        }
        catch (error) {
            return error;
        }

    },
    //-----------------------Array2D-----------------------------------------------
    array(row, col) {

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
            if (cash == goal){
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

    anagram(string1, string2) 
    {
         if(string1.length===string2.length){
        var str1=string1.toLowerCase().split('').sort('').join('');
        var str2=string2.toLowerCase().split('').sort('').join('');
        if(str1===str2)
        {
            console.log("This is angram");
        }
        }else{
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

            }else{


                var flag = false;

                for (i = 2; i <= num; i++) {
                    if(i==2){
                        console.log(i)
                    }
                    for (j = 2; j < i; j++) {
                        if (i % j === 0 &&  j!== i) {
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
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(a);
},
//-------------------------Binarysearch program----------------------------------------
 binarySearch(arr,string) {
    
    var start= 0;
    var end=arr.length-1;
    while (start <= end) {
        var middle=start+(end-1)/2;
        var result=string.toCompare(arr[middle]);
        if(end===0){
            return middle;
         }
         if(end>0){
             start=midlle+1;
         }else{
             end=middle-1;
         }
         return-1;
    }
    if(result === -1){
        console.log("Element is found")
    }
    else{
        console.log("Element is not found")
    }
 }
}