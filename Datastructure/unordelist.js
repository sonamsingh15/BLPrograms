/*****************************************************************************
*Execution : 1. default node cmd> node anagram.js
* Purpose:  Read the Text from a file, split it into words and arrange it as Linked List.
     Take a user input to search a Word in the List. If the Word is not found then add it
     o the list, and if it found then remove the word from the List. In the end save the
     list into a file

* @file : unorderlist.js
* @overview :Read from file the list of Words and take user input to search a Text
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility = require('../utility/linklist');

var list = new Utility.LinkedList;
var inputfromFileArray = Utility.readFromFile('fileName.txt')

   
for (var i = 0; i < inputfromFileArray.length; i++)
 {
  list.add(inputfromFileArray[i]);
   }
   console.log(list.print())
   var userinput =Utility.readLine().questionInt("Enter the word that wants to you search")
   console.log()

     if (list.search(userinput)) {
      list.remove(userinput)
      console.log("remove sucessful")
   } else
    {
      list.add(userinput)
      console.log("add sucesfull")
   }
   var content = list.print();

   Utility.writeIntoFile('fileName.txt', content, 'utf8')
   console.log(content)
   
   

 
