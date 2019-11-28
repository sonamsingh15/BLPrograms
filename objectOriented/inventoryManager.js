/************************************************************************************************
*Execution : 1. default node cmd> node Inventory Data Management.js

* Purpose:  Extend the above program to Create InventoryManager to manage theInventory.
            The Inventory Manager will use InventoryFactory to create Inventory Object from JSON.
             The InventoryManager will call each Inventory Object in its list
            to calculate the Inventory Price and then call the Inventory Object to return the
            JSON String. The main program will be with InventoryManager
 @file:inventory  Data Managment
* @overview :Create the JSON from Inventory Object and output the JSON String.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 28/11/19
*************************************************************************************************/
var r1 = require('readline-sync')
var util=require('../oopsUtility/inventory');
var fs = require('fs')
const item=new util.Inventory()

Mange()

   function  Mange() {
        do {
            console.log("\t\t\nInventory Manageement")
            var ch = r1.questionInt("press\n1.add Inventory\n2.Delete Inventory\n3.Display Inventory\n4.calculate Inventory Price\n5.Exit\n")
            if (isNaN(ch)) throw 'Enter the valid choice.'
            if (ch == 1) {
                item.add()
            }
            else if (ch == 2) {
                item.remove()
            }
            else if (ch == 3) {
                item.display()
            }
            else if (ch == 4) {
                item.inventorycalculate()
            }
            else if (ch == 5) {
                return;
            }
            else {
                console.log("Invalid Input")
            }
        }
        while (ch != 5)
    
    }


