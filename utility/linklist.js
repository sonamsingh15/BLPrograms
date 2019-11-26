
// User defined class node 
class Node {
    // constructor 

    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// linkedlist class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;

    }
    /**
    *@description:add function is using to add element in list to store the current node 
    *@param :passing element in list 
    *@returns  size
    **/

    add(data) 
    {
        // creates a new node 
        var node = new Node(data);

        // to store current node 
        var current;

        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }
    /**
    *@description:read input 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/
    insertAt(data, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(data);
            var curr, prev;

            curr = this.head;

            // add the element to the 
            // first index 
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    /**
    *@description:read input 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/
    // removes an element from the 
    // specified location 
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }
    /**
    *@description:remove function is remove data,comapring element with current element if found
                  then remove  
    *@param :passing the data thats you pass.
    *@returns retrurn true then remove  
    **/
    remove(data) //----use in unorderlist
    {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    /**
    *@description:function indexod,use to comapare each element of list with given element 
    *@param filename passing the data
    *@returns retrurn -1
    **/

    // finds the index of element 
    indexOf(data) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }
    /**
    *@description:search function to search the element in the given list
    *@param filename passing the list size
    *@returns retrurn the search element  
    **/
    
    search(searchkey) {      
        var temp = this.head;
        while (temp != null) {
            if (temp.data === searchkey) {
                return true
            }
            temp = temp.next
        }
        return false
    }//---method for sorting linked list in acending order
     /**
    *@description:sortlinklist function for sorting linked in acending order
    *@param filename passiing the currentnode,nextnode,
    *@returns return the sort list 
    **/
    sortLinkedList() {
        var currentNode = this.head, nextNode = null;
        var temp;
        //checking linked list is empty or not
        if (this.head == null) {
            return;
        } else {
            // loop until  current node is null
            while (currentNode != null) {
                nextNode = currentNode.next;
                while (nextNode != null) {

                    //comparing the current and next node 
                    if (currentNode.data > nextNode.data) {

                        //curent node is greater than next node 
                        // then swapping both node
                        temp = currentNode.data
                        currentNode.data = nextNode.data
                        nextNode.data = temp;
                    }
                    nextNode = nextNode.next;
                }
                currentNode = currentNode.next
            }


        }
    }
     /**
    *@description:addinsortway function for inserting new node in sorted way 
    *@param filename passing the data tha wants to addinsortway
    *@returns retrurn 
    **/
    //----method for inserting new node in sorted way
    addInSortWay(data) {
        var newNode = new Node(data)
        var currentNode = this.head;

        if (this.head == null || currentNode.data >= newNode.data) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            while (currentNode.next != null && currentNode.next.data < newNode.data) {
                currentNode = currentNode.next;
            }
            if (currentNode.next == null) {
                currentNode.next = newNode;
            }
            else {
                newNode.next = currentNode.next;
                currentNode.next = newNode
            }
        }
    }
     /**
    *@description:isempty function is check the list for empty 
    *@param filename passing the file name
    *@returns retrived  size 
    **/
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list
     /**
    *@description:size function is gives the size of the list
    *@param filename passing the file name
    *@returns retrurn the size of data
    **/ 
    size_of_list() {
        console.log(this.size);
    }
     /**
    *@description:display funtion to print 
    *@param filename :no parameter 
    *@returns retrurn output
    **/
    display() {
        var current = this.head;
        var string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        return string;
    }

    print() {
        var current = this.head;
        while (current) {
            process.stdout.write( current.data + "->");
            current = current.next;
        }
    }
}
module.exports = {

    LinkedList,
    readLine() {
        var resd = require('readline-sync');
        return resd;
    },
    // inputRead() {
    //     let input = readLine.question("");//get the value from user
    //     return input;
    // },

    /**
    *@description:read input 
    *@param filename passing the file name
    *@returns retrived  data converted into array 
    **/
    readFromFile(fileName) {
        var fs = require("fs");
        var fileObject = fs.readFileSync(fileName, 'utf8')
        var fileArray = fileObject.trim().split(' ');
        return fileArray;

    },
    /**
     * @param {} fileName ; passing the file name
     * @param {} content :passing the content to write file
     */
    writeIntoFile(fileName, content) {
        var fs = require('fs');
        fs.writeFileSync(fileName, content, 'utf8')
    },
    //------------hashing----------------------------------------
     /**
    *@description: hashing function Logic ­> Firstly store the numbers in the Slot. Since there are 10 Numbers divide
           each number by 11 and the reminder put in the appropriate slot. Create a Chain
          for each Slot to avoid Collision. If a number searched is found then pop it or else
         push it. Use Map of Slot Numbers and Ordered LinkedList to solve the problem.
          In the Figure Below, you can see number 77/11 reminder is 0 hence
    *@param filename passing the numberarray
    *@returns retrived  d
    **/
    Hashing(numberarray) {
        //let Linkedlist =require('../utility/linklist')
        let readline = require("readline-sync")
        var arr = []
        for (let i = 0; i <numberarray.length; i++) {
            let hash = numberarray[i] % 11;
            if (arr[hash] == undefined) {
                arr[hash] = new LinkedList();
                arr[hash].add(numberarray[i]);
            } else {
                //if (!arr[hash].search(numberarray[i])) {
                    arr[hash].add(numberarray[i]);
                //}
            }
            
        }
        for (let j = 0; j < 11; j++) {
            process.stdout.write("element at" + j + " ");
            if (arr[j] != undefined) {
                arr[j].print();
            }
            console.log();
        }
        let input = parseInt(readline.question("Enter number you want to search"))
        if (isNaN(input)) {
            throw "enter the valid number"
        }
        hash = input %11;
        if (arr[hash] != undefined) {
            if (arr[hash].search(input)) {
                arr[hash].remove(input)
                console.log("element removed")
            } else {
                arr[hash].add(input)
                console.log("element aaded")
            }

        }
        else {
            arr[hash] = new this.LinkedList();
            arr[hash].add(input)
            console.log("element aaded")
        }
        for (let j = 0; j < 11; j++) {
            process.stdout.write("element at" + j + " ");
            if (arr[j] != undefined) {
                arr[j].print();
            }
            console.log();
        }
    }
}
