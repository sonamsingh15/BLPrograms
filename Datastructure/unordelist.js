const Utility = require('../utility/linklist');

var list =new Utility.Linkedlist();
var inputfromFileArray = utility.readFromFile('inputFile.text')
for (var i=0; i<inputfromFileArray.length;i++)
{
    list.printList (inputfromFileArray(i));
}
console.log(list.printList());
 var userinput = Utility.readLine().questio("Enter the word that you want to search:")
  if (list.search(userinput)){
      list.removeNode(userinput)
  }else{
      list.addNode(userinput)
  }
  var content =list.printList();

