class queue
{
constructor()
{
this.front = 1;
this.rear = 1;
this.arr = [];
this.size = 0;
}
enqueue(data)
{
this.arr[this.rear] = data;
this.rear++;
this.size++;
}
dequeue()
{
var deletedData = this.arr[this.front];
delete this.arr[this.front];
this.front++;
this.size--;
return deletedData;
}
show()
{
for (var i = 0; i < this.size; i++)
for (var i = 0; i < this.size; i++)
{
console.log(this.arr[this.front + i] + " ");
}
console.log();
}
}

var readline = require("readline-sync");
module.exports =
{
queue,
inputRead() {
    let input = readline.question("");//get the value from user
    return input;

}
}

