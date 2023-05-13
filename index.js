/**
 * Linked list implemetation using javascript
 */

class Node{
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
};

class LinkedList{

    constructor() {
        this.headNode
    }

    append(value, nextNode = null) { // adds new tail node to the list
        if (this.headNode == null) {
            this.prepend(value, nextNode)
        } else {
            let currentNode = this.headNode
            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new Node(value, nextNode)
        }
        return;
    }

    prepend(value, nextNode) { // adds new head node to the list
        const headNode = this.headNode;
        this.headNode = new Node(value, headNode);
    }

    size() { //returns total number of nodes in list
        let nodeCount = 0
        let currentNode = this.headNode;
        while (currentNode != null) {
            nodeCount++
            currentNode = currentNode.nextNode;
        }
        return nodeCount;
    }

    head() { // returns head node in the list
        return this.headNode;
    }

    tail() { // returns last node in the list
        let tail = this.headNode;
        while (tail.nextNode != null) {
            tail = tail.nextNode
        }

        return tail;
    }

    at(index) { //gets node at given index
        let indexNode = this.headNode;
        for (let i = 0; i < index; i++) {
            indexNode = indexNode.nextNode;
        }
        return indexNode;
    }

    pop() { // removes last node from the list
        let lastNode = this.headNode;
        while (lastNode.nextNode.nextNode !== null) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = null;
        return;
    }

    contains(value) { // returns true or false if list contains value
        let currentNode = this.headNode;
        while (currentNode !== null) {
            if (currentNode.value == value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) { // get index of node with (value)
        let currentNode = this.headNode;
        let index = 0
        while (currentNode.value !== value) {
            index++
            currentNode = currentNode.nextNode;
        }
        return index;
    }

    toString() { // outputs linked list as  string
        let string = "";
        let currentNode = this.headNode;
        while (currentNode !== null) {
            string += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        string += "null";
        return string;
    }

    insertAt(value, index) { // inserts new node at given index
        let currentNode = this.at(index);
        let previousNode = this.at(index - 1);
        let newNode = new Node(value, currentNode)
        previousNode.nextNode = newNode;
        return
    }

    removeAt(index) { // removes node at given index
        let currentNode = this.at(index);
        let nextNode = currentNode.nextNode;
        let previousNode = this.at(index - 1);
        previousNode.nextNode = nextNode;
        return;
    }
}

// Test

// const list = new LinkedList()
//     list.append("amaka");
//     list.append("ebuka");
//     list.append("chinaza");
//     list.prepend("john");
//     list.insertAt("chibuzo", 1);
//     list.removeAt(2);

// console.log(list.toString())