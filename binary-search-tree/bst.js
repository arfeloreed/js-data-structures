// implementaion of BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserting a node
  insert(val) {
    const newNode = new Node(val);

    if (!this.root) this.root = newNode;
    else {
      let isRunning = true;
      let current = this.root;

      while (isRunning) {
        // this one is optional, depends on how you want your structure to be.
        if (newNode.val === current.val) return false;
        if (newNode.val < current.val) {
          if (!current.left) {
            current.left = newNode;
            isRunning = false;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            isRunning = false;
          }
          current = current.right;
        }
      }
    }

    return true;
  }

  // searching for a value in the bst
  get(val) {
    if (!this.root) return null;

    let toReturn = this.root;
    while (toReturn.val !== val) {
      if (val < toReturn.val) {
        if (!toReturn.left) return null;
        else toReturn = toReturn.left;
      } else {
        if (!toReturn.right) return null;
        else toReturn = toReturn.right;
      }
    }

    return toReturn;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(11);
// bst.insert(10);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(13);
console.log(bst.get(5));
