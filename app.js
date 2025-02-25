/////Q1 : Given an array arr[] of size N, you have to reverse the array using Stack 

function reverseArrayUsingStack(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr;
}


let arr = [2,4,6,8,10];
console.log("Q1:");
console.log("Array :",arr); 
console.log("Reverse array :", reverseArrayUsingStack(arr)); 
console.log("**************************")

//////Q2 : Implementing a Queue Data Structure using Two Stacks

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

let queue = new QueueUsingStacks();
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log("Q2:")
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log("**************************")

////Q3 : Create a function to find the sum of an array of integers using recursion .  
function sumArrayRecursive(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArrayRecursive(arr, index + 1);
}

console.log("Q3:")
console.log("Array :",arr); 
console.log("Sum of array :",sumArrayRecursive(arr)); 
console.log("**************************")


////Q4 : Create a function that takes a LinkedList and reverses it
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    getFirst() {
        return this.head ? this.head.value : null;
    }

    getLast() {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.value;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            let next = current.next; 
            current.next = prev; 
            prev = current; 
            current = next; 
        }
        this.head = prev; 
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
console.log("Q4:")
console.log("Original List:");
list.printList(); 

console.log("First Element:", list.getFirst()); 
console.log("Last Element:", list.getLast()); 

list.reverse();

console.log("Reversed List:");
list.printList(); 
console.log("First Element:", list.getFirst()); 
console.log("Last Element:", list.getLast()); 
console.log("**************************")


////Q5 :  Create a function that takes a LinkedList and deletes the middle node in it and returns it
class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function deleteMiddleNode(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;
    return head;
}

function printLinkedList(head) {
    let current = head;
    let result = "";
    while (current !== null) {
        result += current.value;
        if (current.next !== null) {
            result += " → ";
        }
        current = current.next;
    }
    console.log(result);
}

let head = new Node2(10);
head.next = new Node2(20);
head.next.next = new Node2(30);
head.next.next.next = new Node2(40);
head.next.next.next.next = new Node2(50);
console.log("Q5:")
console.log("Before deletion:");
printLinkedList(head);

head = deleteMiddleNode(head);

console.log("After deletion:");
printLinkedList(head);
console.log("**************************")
