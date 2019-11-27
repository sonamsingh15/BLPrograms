var r1=require('readline-sync');
const fs = require('fs');

//let Inventory= fs.read.FileSync('fs');
//let data= JSON.parse(Inventory);
class Inventory{
    constructor()
    {
     var content =fs.readFileSync()   
    this.data=json.parse(content)
    }
add()
  {
    console.log("-Inventory Detail-----")
    var ch=r1.questionInt("choose item for update: \n1.Rice \n2.pluse \n3.wheat")
    if(NaN(ch)) throw 'enter the valid choice'
     switch(ch){
         case 1 :
             this.addRice()
             break;
         case 2 :
             this.addpluse()
             break;
          case 3 :
              this.addwheat()
              break;
     }
     fs.writeFileSync()       
     
 }
 remove()
 {
    console.log("--Inventory Detail--")
    var ch=r1.questionInt("choose item for update: \n1.Rice \n2.pluse \n3.wheat")
    if(NaN(ch)) throw 'enter the valid choice'
     switch(ch)
     {
         case 1 :
             this.removeRice()
             break;
         case 2 :
             this.removepluse()
             break;
          case 3 :
              this.removewheat()
              break;
     }
     fs.writeFileSync()
 }
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
 addpluse()
 {
    var name1=r1.question('enter the name:')
    var price1=r1.question('enter the price:')
    var weight1=r1.question('enter the weight: ')
    this.data.pluse.push({
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
    this.data.wheat.push({
        name : name1,
        weight :weight1,
        price : price1
    })
 }
}
module.exports=(
    Inventory
)