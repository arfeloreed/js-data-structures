// stack
// implementation with SLL since stack is a LIFO(last in first out)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding node
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this.head;
  }

  // deleting node
  pop() {
    if (this.length === 0) return null;

    const toDel = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = toDel.next;
      toDel.next = null;
    }

    this.length--;
    return toDel;
  }
}

const stack = new Stack();
stack.push("Hi");
stack.push("there");
stack.push("!");
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
console.log(stack);
