 const Utility=require('../utility/datastructure');

var k=0;
var primeArray = [['000-100 '],['100-200 '],['200-300 '],['300-400 '],['400-500 '],['500-600 '],['600-700 '],['700-800 '],['800-900 '],['900-1000']];
var prime = new Array();
for(var i=0;i<1000;i++){
if(Utility. checkPrime(i)){
Utility.checkPrime[k++] = i;
}
}

var finalArray=Utility.storeIn2DArray(prime,primeArray)
for(var i=0;i<finalArray.length;i++){
for(var j=0;j<finalArray[i].length;j++){
process.stdout.write(finalArray[i][j]+' ');
}
console.log();
}