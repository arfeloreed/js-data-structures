class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a new node to the end
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // delete val from the end
  pop() {
    if (this.length === 0) return undefined;

    const toDel = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = toDel.prev;
      this.tail.next = null;
      toDel.prev = null;
    }

    this.length--;
    return toDel;
  }

  // deleting from the start
  shift() {
    if (this.length === 0) return undefined;

    const toDel = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = toDel.next;
      this.head.prev = null;
      toDel.next = null;
    }

    this.length--;
    return toDel;
  }

  // add new node to the beginning
  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // getting a specific node from the DLL
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const mid = Math.floor(this.length / 2);
    let current;

    if (index > mid) {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    } else {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    }

    return current;
  }

  // update an existing node
  set(val, index) {
    const result = this.get(index);

    if (result) {
      result.val = val;
      return true;
    }

    return false;
  }

  // adding a node
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      const current = this.get(index - 1);
      const newNode = new Node(val);
      const oldNode = current.next;
      current.next = newNode;
      newNode.prev = current;
      newNode.next = oldNode;
      oldNode.prev = newNode;
      this.length++;
    }

    return true;
  }

  // removing a node from the DLL
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    let toDel;

    if (index === 0) toDel = this.shift();
    else if (index === this.length - 1) toDel = this.pop();
    else {
      toDel = this.get(index);
      const prevNode = toDel.prev;
      const nextNode = toDel.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      toDel.next = null;
      toDel.prev = null;
      this.length--;
    }

    return toDel;
  }
}

let list = new DoublyLinkedList();
list.push("Hello");
list.push("there");
list.push("!");
// console.log(list.pop());
// console.log(list.shift());
// list.unshift("Say");
// console.log(list.get(0));
// console.log(list);
// console.log(list.set("Hi", 3));
// console.log(list.insert("insert", 1));
// console.log(list.remove(2));
console.log(list);
