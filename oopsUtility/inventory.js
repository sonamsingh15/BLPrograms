var r1=require('readline-sync');
const fs = require('fs');
var Utility=require('../oopsUtility/utility')


class Inventory{
    constructor()
    {
     
    let Data= fs.readFileSync('/home/bridgeit/Desktop/Sonam/JSON/demo.json','utf8');
    this.data = JSON.parse(Data)
   
} 
add()
  {
    console.log("-Inventory Detail-----")
    var ch=r1.questionInt("choose item for update: \n1.Rice \n2.pulse \n3.wheat\n")
    //if(NaN(ch)) throw 'enter the valid choice'
     switch(ch){
         case 1 :
             this.addRice()
             break;
         case 2 :
             this.addpulse()
             break;
          case 3 :
              this.addwheat()
              break;
     }

     var content=Utility.writeFile('../JSON/demo.json',JSON.stringify(this.data))       
     
 }
 remove()
 {
    console.log("--Inventory Detail--")
    var ch=r1.questionInt("choose item for update: \n1.Rice \n2.pluse \n3.wheat")
    //if(NaN(ch)) throw 'enter the valid choice'
     switch(ch)
     {
         case 1 :
             this.removeRice()
             break;
         case 2 :
             this.removepulse()
             break;
          case 3 :
              this.removewheat()
              break;
     }
     var content=Utility.writeFile('../JSON/demo.json',JSON.stringify(this.data))  
               
 }
 display(){
     console.log(this.data)
 }
 //taking user input
 addRice()
 {
     var name1=r1.question('enter the name:')
     var price1=r1.question('enter the price:')
     var weight1=r1.question('enter the weight: ')
     this.data.Rice.push({
         name : name1,
         weight :weight1,
         price : price1
     })

 }
 addpulse()
 {
    var name1=r1.question('enter the name::')
    var price1=r1.questionInt('enter the price::')
    var weight1=r1.questionInt('enter the weight: :')
    this.data.Pulse.push({
        name : name1,
        weight :weight1,
        price : price1
    })
 }
 addwheat()
 {
    var name1=r1.question('enter the name:')
    var price1=r1.question('enter the price:')
    var weight1=r1.question('enter the weight: ')
    this.data.Wheat.push({
        name : name1,
        weight :weight1,
        price : price1
    })
 }
 removeRice()
 {
    var rice="absent";
    var item=r1.question("Enter the rice Name:");
    for(var i=0;i<this.data.Rice.length;i++){
        if (this.data.Rice[i].name == item) {
            rice="present";
            var index = this.data.Rice.indexOf(this.data.Rice[i]);
            this.data.Rice.splice(index, 1);
            console.log(item+" rice remove from Inventory Details");
        }
    }
    if(rice=="absent")
    console.log("enter valid details.");
}
removepulse()
{
    var Pulse="absent";
    var item=r1.question("Enter the Pulse Name:");
    for(var i=0;i<this.data.Pulse.length;i++){
        if (this.data.Pulse[i].name == item) {
            Pulse="present";
            var index = this.data.Pulse.indexOf(this.data.Pulse[i]);
            this.data.Pulse.splice(index, 1);
            console.log(item+" Pulse remove from Inventory Details");
        }
    }
    if(Pulse=="absent")
    console.log("enter valid details.");
}
removewheat()
{
    var Wheat="absent";
    var item=r1.question("Enter the Wheat Name:");
    for(var i=0;i<this.data.Wheat.length;i++){
        if (this.data.Wheat[i].name == item) {
            Wheat="present";
            var index = this.data.Wheat.indexOf(this.data.Wheat[i]);
            this.data.Wheat.splice(index, 1);
            console.log(item+" Wheats remove from Inventory Details");
        }
    }
    if(Wheat=="absent")
    console.log("enter valid details.");
}
inventorycalculate()
{
//taking user input
console.log("Inventory Details: \n1.Rice \n2.Pulses\n3.Wheat");
var ch =r1.questionInt("Enter your choice:");
if(isNaN(ch))throw "enter valid choice."

switch(ch){
    case 1: 
        var kg=r1.questionInt("enter how many kg you require:");
        for(var i=0;i<this.data.Rice.length;i++){
            console.log();
            console.log("\n\t:"+this.data.Rice[i].name+"\n\tPrice:"+this.data.Rice[i].price+"\n\tfor "+ kg+ " kg price is "+kg* this.data.Rice[i].price);
        }
        break;

        case 2:
        var kg=r1.questionInt("enter how many kg you require:");
        for(var i=0;i<this.data.Pulse.length;i++){
            console.log();
            console.log("\n\tname:"+this.data.Pulse[i].name+"\n\tPrice:"+this.data.Pulse[i].price+"\n\tfor "+ kg+ " kg price is "+kg* this.data.Pulse[i].price);                
        }  
        break;

        case 3:
        var kg=r1.questionInt("enter how many kg you require:");
        for(var i=0;i<this.data.Wheat.length;i++){
            console.log();
            console.log("\n\tname:"+this.data.Wheat[i].name+"\n\tPrice:"+this.data.Wheat[i].price+"\n\tfor "+ kg+ " kg price is "+kg* this.data.Wheat[i].price);
        } 
        break;
}
}


}

module.exports={
    Inventory
    
}