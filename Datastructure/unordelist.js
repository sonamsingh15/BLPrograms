const Utility = require('../utility/linklist');

var list =new Utility.LinkedList;
var inputfromFileArray = Utility.readFromFile('inputFile.text')
for (var i=0; i<inputfromFileArray.length;i++)
{
    list.addNode(inputfromFileArray[i]);
}
console.log(list.printList());
 var userinput = Utility.readLine().question("Enter the word that you want to search:")
 console.log()
  
  if (list.search(userinput)){
     list.remove(userinput)
     console.log("remove sucessful")
  }else{
     list.addNode(userinput)
     console.log("add sucesfull")
  }
  var content =list.printList();

Utility.writeIntoFile('fileName.txt',content,'utf8')
console.log(content)
