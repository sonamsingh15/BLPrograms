/*****************************************************************************
*Execution : 1. default node cmd> node cashcounter.js

* Purpose:  Create a Program which creates Banking Cash Counter where people
  come in to deposit Cash and withdraw Cash. Have an input panel to add people
  to Queue to either deposit or withdraw money and dequeue the people. Maintain
  the Cash Balance.
* Logic ­> Write a Queue Class to enqueue and dequeue people to either deposit
 or withdraw money and maintain the cash balance

* @file : cashcounter.js
* @overview : True or False to Show Arithmetic Expression is balance
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 18/11/19
*****************************************************************************/
const Utility = require('../utility/queue');


var amount = 80000;
console.log('enter how many people are in queue');
var people = Utility.inputRead();
var choice;
var queue =new  Utility.queue();
try {

    for (var counter = 1; counter <= people; counter++) {
        console.log("Enter your name ");
        var customer = Utility.inputRead();
        queue.enqueue(customer);// calling enQueue method to add name of person to q object

        var oldAmount = amount;
        console.log(" current  amount : ", +amount);

        do {

            console.log("Welcome To Bank");
            console.log(customer + " in queue:");
            console.log("please Enter your choice : ");
            console.log("Enter 1.to Withdraw money:");
            console.log("Enter 2.to Deposit Money: ");
            choice = parseInt(Utility.inputRead());

            switch (choice) {
                case 1:
                    console.log("Enter amount TO WithDraw: ");
                    var withdraw_Amount = parseFloat(Utility.inputRead());


                    if (withdraw_Amount > 0 && withdraw_Amount <= amount) {

                        amount = amount - withdraw_Amount;
                        console.log("Collect your cash....ThankYou .. .>");

                        if (amount == 0) {
                            console.log("Cash is not present !");
                            return;
                        }
                        console.log(" Updated Bank amount is = " + amount);

                    }
                    else {
                        console.log("Enter Valid amount");
                    }

                    break;

                case 2:
                    console.log("Enter cash you want to Deposit");
                    var deposit_AMOUNT = parseFloat(Utility.inputRead());
                    var oldAmount = parseFloat(amount);
                    if (deposit_AMOUNT > 0) {

                        console.log("old amount ", oldAmount)

                        var amount = (oldAmount) + (deposit_AMOUNT);// updating bank amount

                        console.log("updated amount = " + amount);

                        break;
                    }
                    else {
                        console.log("please Enter valid amount");
                        return;
                    }
                default:
                    console.log("Enter valid Input");
                    break;
            }
        } while (choice < 0 && choice >= 2)

        queue.dequeue(); // calling deQueue method to remove the person from queue after their operation
        console.log("person is removed from queue");
        queue.show();
    }

}
catch (error) {
    console.log(error);

}

