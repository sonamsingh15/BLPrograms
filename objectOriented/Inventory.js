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
var r1=require('readline-sync')
const fs = require('fs');





 class Inventory
 {
     constructor()
     {
        let Data= fs.readFileSync('/home/bridgeit/Desktop/Sonam/JSON/demo.json','utf8');
      this.Inventory = JSON.parse(Data);
     console.log(this.Inventory );
     console.log("-----------------InventoryDetail-------------")
    //  console.log('\t\t\tRiceDetail\n');
    //  console.log('\t\n\t name  \tweight\tprice')
    //  for(let i=0;i<Inventory.Rice.length;i++)
    //   var Name =Inventory.Rice[i].name
    //   var Weight=Inventory.Rice[i].weight
    //   var Price =Inventory.Rice[i].price

    //   let Inventory =new Inventory.Rice(Name,Price.Weight)
    //   console.log('\t'+(i+1)+')\n\tname:: '+Name+'\n');
    //   console
     //console.log(Inventory);
    } 

 }
 class Invent extends Inventory
 {
    InventoryData()
    {
        console.log("Inventory Details: \n1.Rice \n2.pulse \n3.wheat");
        var ch =r1.questionInt('enter your choice:');
        if(isNaN(ch)) throw 'Enter the valid choice.'

        switch(ch)
        {
            case 1:
                
                var kg=r1.questionInt("how many kg you require::")
                console.log("--------Rice Detail-----------------------------------------------")
                for(var i=0; i<this.Inventory.Rice.length;i++)
                {
                    console.log();
                    console.log("\n\tname:" +this.Inventory.Rice[i].name+"\n\tprice:"+this.Inventory.Rice[i].price+"\n\tweight:"+kg+"kg price is "+kg* this.Inventory.Rice[i].price);
                    }
                    break;
                    case 2:
                        var kg=r1.questionInt("how many kg you reqire::")
                        console.log("----------------pulse Detai---------------------------------")
                        for(var i=0; i<this.Inventory.Pulse.length; i++){
                        console.log()
                        console.log("\n\tname:" +this.Inventory.Pulse[i].name+"\n\tprice:"+this.Inventory.Pulse[i].price+"\n\tweight:"+kg+"kg price is"+kg*this.Inventory.Pulse[i].price)
                        }
                    break;
                    case 3:    
                    var kg=r1.questionInt("how many kg you reqire::")
                    console.log("----------------pulse Detail----------------------------------------------")
                    for(var i=0; i<this.Inventory.Wheat.length; i++){
                    console.log()
                    console.log("\n\tname:" +this.Inventory.Wheat[i].name+"\n\tprice:"+this.Inventory.Wheat[i].price+"\n\tweight:"+kg+"kg price is"+kg* this.Inventory.Wheat[i].price)
                    }
                    break;
        }
    }
}
var inv=new Invent()
inv.InventoryData();
module.exports={
    Inventory
}