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

var list =new Utility.LinkedList;
 var numberfromFileArray = Utility.readFromFile('inputFile123')
 for (var i=0; i<numberfromFileArray.length;i++)
 {
     list.addNode(numberfromFileArray[i]);
 }
 console.log(list.printList());

 list.sortLinkedList();

 console.log(list.printList());

  var userinput = Utility.readLine().question("Enter the number that you want to search:")
   if (list.search(userinput)){
       list.remove(userinput)
   }else{
      list.addInSortWay(userinput)
   }
   var content =list.printList();
   console.log(content)

 Utility.writeIntoFile('file123',content,'utf8')

