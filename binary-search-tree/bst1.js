// queue implementation
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // add a node to the queue
  enqueue(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  // remove a node from the queue
  dequeue() {
    if (this.length === 0) return undefined;
    let toDel = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = toDel.next;
      toDel.next = null;
    }
    this.length--;
    return toDel.val;
  }
}

// bst implementation
class Vertex {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  // add bode to bst
  insert(val) {
    let newNode = new Vertex(val);
    if (this.root === null) this.root = newNode;
    else {
      let curr = this.root;
      while (true) {
        if (val < curr.val) {
          if (curr.left !== null) curr = curr.left;
          else {
            curr.left = newNode;
            break;
          }
        } else {
          if (curr.right !== null) curr = curr.right;
          else {
            curr.right = newNode;
            break;
          }
        }
      }
    }
  }
  // finding a node in bst
  find(val) {
    if (this.root !== null) {
      let curr = this.root;
      while (true) {
        if (val === curr.val) return curr;
        if (val < curr.val) {
          if (curr.left === null) break;
          curr = curr.left;
        } else {
          if (curr.right === null) break;
          curr = curr.right;
        }
      }
    }

    return null;
  }
  // bfs
  bfs() {
    let queue = new Queue();
    let visited = [];
    if (this.root !== null) {
      let node = this.root;
      queue.enqueue(node);
      while (queue.length !== 0) {
        node = queue.dequeue();
        visited.push(node.val);
        if (node.left !== null) queue.enqueue(node.left);
        if (node.right !== null) queue.enqueue(node.right);
      }
    }
    return visited;
  }
  // dfs preorder
  preDfs() {
    let visited = [];
    function help(node) {
      visited.push(node.val);
      if (node.left !== null) help(node.left);
      if (node.right !== null) help(node.right);
    }
    if (this.root !== null) help(this.root);

    return visited;
  }
  // dfs postOrder
  postDfs() {
    let visited = [];
    function help(node) {
      if (node.left !== null) help(node.left);
      if (node.right !== null) help(node.right);
      visited.push(node.val);
    }
    if (this.root !== null) help(this.root);

    return visited;
  }
  // dfs inOrder
  inDfs() {
    let visited = [];
    function help(node) {
      if (node.left !== null) help(node.left);
      visited.push(node.val);
      if (node.right !== null) help(node.right);
    }
    if (this.root !== null) help(this.root);

    return visited;
  }
}

let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
// console.log(bst.find(41));
// console.log(bst.root);
// console.log(bst.bfs()); // [10,6,15,3,8,20]
// console.log(bst.preDfs()); // [10,6,3,8,15,20]
// console.log(bst.postDfs()); // [3,8,6,20,15,10]
console.log(bst.inDfs()); // [3,6,8,10,15,20]
