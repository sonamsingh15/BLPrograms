const Utility=require('../utility/utility');

var row ,col,i,j
console.log("Enter the row size max[5]");
var row=Utility.inputRead();
console.log("Enter the col size max[5]");
var col=Utility.inputRead();


Utility.Array( row, col);

   /* var arr = [];
  
    // Creates all lines:
    for(var i=0; i < row; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(col));
  
        for(var j=0; j < col; j++){
          // Initializes:
          arr[i][j] = Utility.inputRead();
        }
    }
  return arr.join();
    }*/
 // console.log("2D Array:",Array(row,col))

   
