/*****************************************************************************
*Execution : 1. default node cmd> node anagram.js
* Purpose:  Determine wheather a string is simillar or not first check length of string,after check 
            lowercase and uppercase condition .
* @file : anagram.js
* @overview : To check string is anagram or not.
* @author SONAM SINGH
* @version node v8.10.0 npm 3.5.2
* @since date 14/11/19
*****************************************************************************/
const Utility = require('../utility/linklist');

var list =new Utility.LinkedList;
var inputfromFileArray = Utility.readFromFile('fileName.txt')

for (var i=0; i<inputfromFileArray.length;i++)
{
    list.add(inputfromFileArray[i]);
}
console.log(list.display());
 var userinput = Utility.readLine().question("Enter the word that you want to search:")
 console.log()
  
  if (list.search(userinput)){
     list.remove(userinput)
     console.log("remove sucessful")
  }else{
     list.add(userinput)
     console.log("add sucesfull")
  }
  var content =list.display();

Utility.writeIntoFile('fileName.txt',content,'utf8')
console.log(content)
