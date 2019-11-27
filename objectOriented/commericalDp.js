/*****************************************************************************
*Execution : 1. default node cmd> node binarysearchtree.js
* Purpose:  
* @file : binarysearchtree.js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 19/11/19
*****************************************************************************/
var fs = require('fs');
var rl = require('readline-sync');
const Utility = require('../oopsUtility/utility');


class AddressBook 
{
constructor() {
var content = fs.readFileSync('/home/bridgeit/Desktop/Sonam/JSON/add.json','utf8');
this.data = JSON.parse(content);

console.log(this.data);

}
}

class AddBook extends AddressBook {

addressBook() {
console.log("#$ Address Book $#");
console.log("1. Add a person\n2. Remove person\n3. Edit person's info\n4. Sort by lastName\n5. Sort by zipCode\n6. Display\n7.Exit");
var ch = rl.question("Enter your choice:");

do{
if (ch == 1) {
this.addPerson();
break
}
else if (ch == 2) {
this.removePerson();
}
else if (ch == 3) {
this.EditPerson();
}
else if (ch == 4) {
this.sortByName();
}
else if (ch == 5) {
this.sortByZip();
}
else if (ch == 6) {
this.display();
}
else if (ch == 7) {
break;
// break;
}
else {
console.log("Invalid key/input ");
}
}while(ch!=7)
}

//Add person
addPerson() {

    var firstName1 = rl.question("Enter first name:");
    var lastName1 = rl.question("Enter last name:");
    var address1 = rl.question("Enter address:");
    var ID1 = rl.question("Enter id:");
    var zipCode1 = rl.question("Enter zip code:");
    
    //push data in json
    this.data.person.push({
    firstName: firstName1,
    lastName: lastName1,
    address: address1,
    ID: ID1,
    zipCode: zipCode1
    })
    Utility.writeFile('addressBook.json', JSON.stringify(this.data));
    this.addressBook();
    }
    
    //remove person
    removePerson() {
    
    
    
        var firstName = rl.question("Enter person's first name to delete:");
        for (let i = 0; i < this.data.person.length; i++) {
        if (this.data.person[i].firstName == firstName) {
        var index = this.data.person.indexOf(this.data.person[i]);
        
        this.data.person.splice(index, 1);
        }
        
        }
        fs.writeFileSync('addressBook.json', JSON.stringify(this.data));
        this.addressBook();
        }
        
        //Edit information of the person
        EditPerson() {
        
        var firstName = rl.question("Enter person's first name to edit info:");
        var index;
        for (let i in this.data.person) {
        if (this.data.person[i].firstName == firstName) {
        console.log(this.data.person[i]);
        index = i;
        break;
        }
        }
        
        console.log("1. Edit id\n2. Edit address\n3. Edit zip code\n");
        var ch1 = rl.question("Enter your choice:");
        switch (ch1) {
        case "1":
        var id1 = rl.question("Enter new id:");
        this.data.person[index].ID = id1;
        break;
        case "2":
        var address1 = rl.question("Enter new address:");
        this.data.person[index].address = address1;
        break;
        case "3":
        var zipCode1 = rl.question("Enter new zipCode:");
        this.data.person[index].zipCode = zipCode1;
        break;
        default:
        console.log("Enter valid choice");
        }
        fs.writeFileSync('addressBook.json', JSON.stringify(this.data));
        this.addressBook();
    }
    display(){
    for(let i=0;i<this.data.person.length;i++){
    console.log("\nFirst Name:"+this.data.person[i].firstName);
    console.log("Last Name:"+this.data.person[i].lastName);
    console.log("Address:"+this.data.person[i].address);
    console.log("Id:"+this.data.person[i].ID);
    console.log("ZipCode:"+this.data.person[i].zipCode);
    
    }
    }
    //Sort by name
    sortByName() {
    
    for (let i = 0; i < this.data.person.length; i++) {
    for (let j = 0; j < this.data.person.length - 1; j++) {
    
    //sorting function to arrange by name
    if (this.data.person[j].lastName.localeCompare(this.data.person[j + 1].lastName) == 1) {
    let temp = this.data.person[j];
    this.data.person[j] = this.data.person[j + 1];
    this.data.person[j + 1] = temp;
    }
    }
    }
    console.log(this.data);
    fs.writeFileSync('addressBook.json', JSON.stringify(this.data));
    this.addressBook();
    }
    
    //sorting function to arrange by zip code
    //sorting function to arrange by zip code
    sortByZip() {
        if(isNaN(ch)) throw 'Enter the valid choice.'

    
    for (let i = 0; i < this.data.person.length; i++) {
    for (let j = 0; j < this.data.person.length - 1; j++) {
    
    //sorting function to arrange by zip code
    if (this.data.person[j].zipCode > this.data.person[j + 1].zipCode) {
        let temp = this.data.person[j];
        this.data.person[j] = this.data.person[j + 1];
        this.data.person[j + 1] = temp;
        }
        }
        }
        console.log(this.data);
        fs.writeFileSync('addressBook.json', JSON.stringify(this.data));
        this.addressBook();
        }
    }
    var addBook = new AddBook();
    addBook.addressBook();
