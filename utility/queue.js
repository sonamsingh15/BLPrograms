class queue
{
    /**
    *@description:constructor of node class for initalialising front ,rear ,size,arr
    *@param :no parameter passing
    *@returns rvoid
    **/
constructor()
{
this.front = 1;
this.rear = 1;
this.arr = [];
this.size = 0;
}
/**
    *@description: function enqueue adding data in the queue
    *@param :no parameter
    *@returns retrived  data 
    **/
enqueue(data)
{
this.arr[this.rear] = data;
this.rear++;
this.size++;
}
/**
    *@description:function dequeue  removing data from the queue 
     returns underflow when called   on empty queue 
    *@param filename passing the file name
    *@returns retrived  data 
    **/
dequeue()
{
var deletedData = this.arr[this.front];
delete this.arr[this.front];
this.front++;
this.size--;
return deletedData;
}
/**
    *@description:function show 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/
show()
{
for (var i = 0; i < this.size; i++)
for (var i = 0; i < this.size; i++)
{
console.log(this.arr[this.front + i] + " ");
}
console.log();
}


/**
    *@description: front function  returns the Front element of  
                   the queue without removing it. 
    *@param :no parameter in this function
    *@returns retrived  data converted into array 
    **/
front() 
{  
    if(this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
} 

/**
    *@description: isEmpty is function  returns the Front element of  
                   the queue without removing it. 
    *@param :
    *@returns return true if the queue is empty
    **/
isEmpty() 
{  
    return this.items.length == 0; 
} 

// printQueue function 
printQueue() 
{ 
    var str = ""; 
    for(var i = 0; i < this.items.length; i++) 
        str += this.items[i] +" "; 
    return str; 
} 



}

var readline = require("readline-sync");
module.exports =
{
queue,
/**
    *@description:read input 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/
inputRead() {
    let input = readline.question("");//get the value from user
    return input;

}
}

