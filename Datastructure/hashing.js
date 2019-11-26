/*****************************************************************************
*Execution : 1. default node cmd> node calender.js
* Purpose: Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
           efficiently search a number from a given set of number

* @file : Hashing.js
* @overview : read a set of numbers from a file and take user input to search a number.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility = require('../utility/linklist');

var list =new Utility.LinkedList;

//const array=[1,2,3,4,5,6]
Utility.Hashing()
var list =new Utility.LinkedList;
var numberarray = Utility.readFromFile('filehash.txt')
//console.log(numberfromFileArray)

for (var i = 0; i < numberarray.length; i++)
{
    list.add(numberarray[i]);
}
console.log(list.print());

//list.sortLinkedList();

console.log(list.print());

var userinput = Utility.readLine().question("Enter the number that you want to search:")
if (list.search(userinput))
{
    list.remove(userinput)
} 
else 
{
   // list.addInSortWay(userinput)
}
var content = list.print();
console.log(content)

Utility.writeIntoFile('filehash.txt', content, 'utf8')
