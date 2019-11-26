/**********************************************************************************************
*Execution : 1. default node cmd> node anagram.js
* Purpose:  Read .a List of Numbers from a file and arrange it ascending Order in a
           Linked List. Take user input for a number, if found then pop the number out of the
           list else insert the number in appropriate position
* @file : orderlist.js
* @overview :  Read from file the list of Numbers and take user input for a new number
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 18/11/19
************************************************************************************************/
const Utility = require('../utility/linklist');

var list = new Utility.LinkedList;
var numberfromFileArray = Utility.readFromFile('file123.txt')
var userinput = Utility.readLine().question("Enter the number that you want to search:")

        for (var i = 0; i < numberfromFileArray.length; i++)
        {
            list.add(numberfromFileArray[i]);
        }
        console.log(list.display());

        list.sortLinkedList();

        console.log(list.display());

        var userinput = Utility.readLine().question("Enter the number that you want to search:")
        if (list.search(userinput))
        {
            list.remove(userinput)
        } 
        else 
        {
            list.addInSortWay(userinput)
        }
        var content = list.display();
        console.log(content)

        Utility.writeIntoFile('file123.txt', content, 'utf8')
    
