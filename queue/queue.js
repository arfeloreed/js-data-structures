// implementation of queue data structure

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this.length;
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

const queue = new Queue();
console.log(queue.push("Hi"));
console.log(queue.push("there"));
console.log(queue.push("!"));
console.log(queue.pop());
console.log(queue);
