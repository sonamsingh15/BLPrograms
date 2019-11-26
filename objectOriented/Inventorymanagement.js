/************************************************************************************************
*Execution : 1. default node cmd> node Inventory Data Management.js
* Purpose:  Create a JSON file having Inventory Details for Rice, Pulses and Wheats
            with properties name, weight, price per kg.read in JSON File
e. O/P ­> Create the JSON from Inventory Object and output the JSON String
* @file : Inventory Data Management
* @overview : Use Library  Java JSON Library, For IOS JSON Library use
                           NS JSON Serialization for parsing the JSON.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 25/11/19
*************************************************************************************************/
//get JSON Object in Java or NSDictionary in iOS. Create Inventory
//Object from JSON. Calculate the value for every Inventory.

const fs = require('fs');

let Inventory= fs.readFileSync('/home/bridgeit/Desktop/Sonam/objectOriented/demo.json');
let Data = JSON.parse(Inventory);
//console.log(Data);

console.log("avalible stock for Rice is::")
console.log("----------------------------------------------------------------------")
for(let i=0; i<Data.Rice.lenght;i++){
    console.log(Data.Rice[i].name)

}

