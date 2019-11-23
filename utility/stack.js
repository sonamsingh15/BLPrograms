


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
 /**
    *@description:push function
    *@param : data
    *@returns return the 
    **/
push(data) 
{ 
    var temp =new Node(data)
    temp.next=this.top
    this.top=temp
    this.size++
    
} 


 /**
    *@description:pop function
    *@param :
    *@returns return top most element in the stack and removes it from the stack
    **/
pop() 
{   // Underflow if stack is empty 
    if (this.isEmpty()){
        console.log('Stack is empty');
    } 
       this.top =this.top.next
       this.size--
} 

// peek function 
 /**
    *@description:peek function 
    *@param ;no parameter in passing 
    *@returns return the top element from the stack but does'nt delete it.
    **/
peek() 
{ 
    return this.top.data 
} 



// isEmpty function 
 /**
    *@description:isEmpty is function
    *@param filename no parameter
    *@returns return true if stack is empty 
    **/
isEmpty() 
{ 
     return this.size == 0; 
} 

// printStack function 
 /**
    *@description:printStack function
    *@param no parameter is passing in file
    *@returns return your output and display 
    **/
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

},
//
blanceparenthiesis(string)
{
    try {

    let format = /[^0-9]/;//give format to given number

    if (format.test(string || string === undefined || string=== null))
     {
         //check number is integer or not
         throw 'invalid input';//if number is not integer trough expctio
     }
     else 
     {
        console.log("Enter the expression ")
        var string = this.inputRead();
        var expression = string.split("")

        for (let i = 0; i < expression.length; i++) 
        {
            if (expression[i] == '(')
             {
                this.push('(')

            }
            else if (expression[i] == ')') 
            {
                if (this.isEmpty())
                 {
                    this.push(')')
                    break

                }
                this.pop()

            }
        }
        if (this.isEmpty())
         {
            console.log("parenthesis is blanced:");
        }
        else 
        {
            console.log("parenthesis in not blanced")
        }
    }

}
 catch (error)
  {
     return error
  }
}
}