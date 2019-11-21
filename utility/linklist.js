
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

    addNode(data) //use in unorderlist
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

    // finds the index of element 
    indexOf(data) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }
    // search element for file
    search(searchkey) {       //--------------use in unorder list
        var temp = this.head;
        while (temp != null) {
            if (temp.data === searchkey) {
                return true
            }
            temp = temp.next
        }
        return false
    }//---method for sorting linked list in acending order
    sortLinkedList() {
        var currentNode = this.head, nextNode = null;
        var temp;
        //checking linked list is empty or not
        if (this.head == null) {
            return;
        } else {
            // loop until  current node is null
            while (currentNode != null) 
            {
                nextNode = currentNode.next;
                while (nextNode != null)
                 {

                    //comparing the current and next node 
                    if (currentNode.data > nextNode.data)
                     {

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
    //----method for inserting new node in sorted way
    addInSortWay(data) {
        var newNode = new Node(data)
        var currentNode = this.head;

        if (this.head == null || currentNode.data >= newNode.data) 
        {
            newNode.next = this.head;
            this.head = newNode;
        } else
         {
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

    // checks the list for empty 
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list 
    size_of_list() {
        console.log(this.size);
    }
    printList() {
        var current = this.head;
        var string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        return string;
    }
}
module.exports = {

    LinkedList,
    readLine() {
        var resd = require('readline-sync');
        return resd;
    },

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
    }
}
