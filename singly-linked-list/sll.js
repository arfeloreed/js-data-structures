class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add val to the end
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // delete val to the end
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let tempTail;

    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      while (current.next !== null) {
        tempTail = current;
        current = current.next;
      }
      this.tail = tempTail;
      this.tail.next = null;
    }

    this.length--;
    return current;
  }

  // delete val from the start
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.tail = null;
    }

    const current = this.head;
    this.head = current.next;
    this.length--;

    return current;
  }

  // add val from the start
  unshift(val) {
    const newVal = new Node(val);

    if (this.length === 0) {
      this.head = newVal;
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = newVal;
      this.head.next = oldHead;
    }

    this.length++;
    return this;
  }

  // get a specific Node from the SLL
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // update an existing val in a node
  set(val, index) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }

  // inserting a new val
  insert(val, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let prevNext = prevNode.next;
      prevNode.next = newNode;
      newNode.next = prevNext;
      this.length++;
    }

    return true;
  }

  // removing a specific val
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let toRemove = prevNode.next;
    prevNode.next = toRemove.next;
    this.length--;

    return toRemove;
  }

  // reversing the linked list
  reverse() {
    // swap head and tail
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
// list.push("GOODBYE");
list.push("!");
// list.push("123");
// list.unshift("hi");
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.get(0));
// console.log(list.set("change", 1));
// console.log(list.insert("insert", 3));
// console.log(list.remove(3));
console.log(list);
list.reverse();
console.log(list);
// console.log(list.head);
// console.log(list.head.next);
// console.log(list.head.next.next);
