// priority queue using Min binary heap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PrioQueue {
  constructor() {
    this.values = [];
  }
  // insert value
  enqueue(val, prio) {
    const newNode = new Node(val, prio);
    // base case
    this.values.push(newNode);
    if (this.values.length === 1) return this.values;
    const childIdx = this.values.length - 1;
    const parentIdx = ~~((childIdx - 1) / 2);
    return this.bubbleUp(childIdx, parentIdx);
  }
  bubbleUp(idx, parentIdx) {
    let child = this.values[idx].priority;
    let parent = this.values[parentIdx].priority;

    while (child < parent) {
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];
      idx = parentIdx;
      parentIdx = ~~((idx - 1) / 2);
      child = this.values[idx].priority;
      parent = this.values[parentIdx].priority;
    }

    return this.values;
  }
  // remove value from list
  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    return this.bubbleDown();
  }
  bubbleDown() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    const toRemove = this.values.pop();
    let parentIdx = 0;
    let leftIdx, rightIdx;

    while (true) {
      let smallestIdx = parentIdx;
      leftIdx = 2 * parentIdx + 1;
      rightIdx = 2 * parentIdx + 2;
      let smallest = this.values[smallestIdx].priority;

      if (leftIdx < this.values.length) {
        const left = this.values[leftIdx].priority;
        if (left < smallest) {
          smallestIdx = leftIdx;
          smallest = this.values[smallestIdx].priority;
        }
      }
      if (rightIdx < this.values.length) {
        const right = this.values[rightIdx].priority;
        if (right < smallest) smallestIdx = rightIdx;
      }

      if (parentIdx !== smallestIdx) {
        [this.values[parentIdx], this.values[smallestIdx]] = [
          this.values[smallestIdx],
          this.values[parentIdx],
        ];
        parentIdx = smallestIdx;
      } else break;
    }

    return toRemove;
  }
}

let queue = new PrioQueue();
// console.log(queue.enqueue("jason", 1));
// console.log(queue.enqueue("chen", 0));
queue.enqueue("amber", 2);
queue.enqueue("jason", 1);
queue.enqueue("depp", 0);
queue.enqueue("dysney", 2);
queue.enqueue("turd", 3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.values);
