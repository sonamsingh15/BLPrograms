


class Node {
    // constructor 

    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// linkedlist class 
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    length(){
        return this.size
    }

// push function 
push(data) 
{ 
    var temp =new Node(data)
    temp.next=this.top
    this.top=temp
    this.size++
    
} 

// pop function 
pop() 
{ 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is empty 
    if (this.isEmpty()){
        console.log('Stack is empty');
    } 
       this.top =this.top.next
       this.size--
} 

// peek function 
peek() 
{ 
    // return the top most element from the stack 
    // but does'nt delete it. 
    return this.top.data 
} 



// isEmpty function 
isEmpty() 
{ 
    // return true if stack is empty 
    return this.size == 0; 
} 

// printStack function 
printStack() 
{ 
    if(this.isEmpty()){
        console.log('stack is empty')
    }else{
        var temp = this.top;
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next
        }
        console.log()
    }
} 

}

var readline = require("readline-sync");
module.exports={
  Stack,
    inputRead() {
        let input = readline.question("");//get the value from user
        return input;

}
}