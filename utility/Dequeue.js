


class Node {
    /**
    *@description:constructor of node class for initalisting 
    *@param : passing the data
    *@returns  :void
    **/
    constructor(element) {
        this.value = element;
        this.next = null;
    }
}

class deque {
    /**
        *@description:constructor of dequeue class for initialising front,rear
        *@param filename passing the file name
        *@returns retrived  data converted into array 
        **/

    constructor() {
        this.front = null;
        this.rear = null;
    }
    /**
        *@description:make new node 
        *@param :passing the element
        *@returns if dequue is initially empty,then  in front add  
        **/

    addFront(element) {
        let node = new Node(element);
        if (this.front == null) {
            this.front = node;
            this.rear = node;
        }
        else {
            this.front.next = node;
            this.front = node;
        }
        return node.value;
    }
    /**
        *@description:make a new node if dequeuq is initally empty.then added
        *@param :passing element
        *@returns : 
        **/

    addrear(element) {
        let node = new Node(element);
        if (this.front == null) {// if dequeue is initially empt
            this.front = node;
            this.rear = node;
            // console.log(element + " added");
        }
        else {
            // console.log(element + " added rear");
            node.next = this.rear;
            this.rear = node;
        }
        return data = this.front.value;
    }
    /**
        *@description:removerear if dequeue is empty if last element in dequeue is to removed
        *@param :chek if only one node
        *@returns retrurn remove from rear
        **/

    removeRear() {
        if (this.rear == null) {
            return false;
        }
        if (this.rear == this.front) { //check if only one node
            let data = this.rear.value;
            this.rear = null;
            this.front = null;
            console.log(data + " removed");
            return data;
        }
        // remove from rear.
        else {
            let data = this.rear.value;
            this.rear = this.rear.next;
            console.log(data + " removed");
            return data;
        }
    }
    /**
        *@description:removefront dequeue is initally empty if last element in deque is to remove
        *@param :passing the data
        *@returns return  data 
        **/

    removeFront() {

        if (this.front == null) {
            return false;
        }
        if (this.rear == this.front) {
            let data = this.front.value;
            this.rear = null;
            this.front = null;
            // console.log(data+" removed");
            return data;
        }
        else {
            let data = this.front.value;
            let temp = this.rear;
            while (temp.next != this.front) {
                temp = temp.next;
            }
            this.front = temp;
            this.front.next = null;
            // console.log("removed");
            return data;
        }
    }

    /**
        *@description: function check if front and rear are null  dequeue is empty
        *@param :no parameter
        *@returns: size
        **/
    isEmpty() {
        if (this.front == this.rear == null) {
            return true;
        }
        return false;
    }
    /**
        *@description:function print to  display your outpu
        *@param :console.log is parameter to print the output
        *@returns return  data
        **/

    print() {
        let temp = this.rear;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}
var readline = require("readline-sync");
module.exports = {
    Dequeue,
    inputRead() {
        let input = readline.question("");//get the value from user
        return input;

    },
    /**
    *@description:function palindrome checker in which check given string is palindrom or not
    *@param :
    *@returns: 
    **/

    palindrome_checker(string) {
        var dq = new deque();
        var dq2 = new deque();
        var strArray = string.split("");
        for (i = 0; i < strArray.length; i++) {
            dq2.addFront(strArray[i]);
        }
        var flag = false;
        for (i = 0; i < strArray.length; i++) {
            flag = true;
            if ((dq.addFront(strArray[i])) !== (dq2.removeFront(strArray[i]))) {
                flag = false;
                i = strArray.length;
            }
        }
        return flag;
    },

}
