/*****************************************************************************
*Execution : 1. default node cmd> node anagram.js
* Purpose:  
* @file : orderlist.js
* @overview : 
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 18/11/19
*****************************************************************************/
const Utility = require('../utility/linklist');

var list = new Utility.LinkedList;
var numberfromFileArray = Utility.readFromFile('file123.txt')
try {
    
    let format = /[^0-9]/;//give format to given number

    if (format.test(numberfromFileArray || numberfromFileArray === undefined || numberfromFileArray === null)) 
    {
        //check number is integer or not
        throw 'invalid input';//if number is not integer trough expctio
    } 
    else 
    {

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
    }
}
catch (error)
{
    console.log(error);
}
