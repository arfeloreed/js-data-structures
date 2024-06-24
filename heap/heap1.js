// max binary heap
class MaxHeap {
  constructor() {
    this.val = [];
  }
  // add node/val to heap
  insert(val) {
    this.val.push(val);
    let idx = this.val.length - 1;
    this.bubbleUp(val, idx);
  }
  // bubble up
  bubbleUp(val, idx) {
    let parentIdx = ~~((idx - 1) / 2);
    while (idx > 0 && val > this.val[parentIdx]) {
      [this.val[idx], this.val[parentIdx]] = [this.val[parentIdx], this.val[idx]];
      idx = parentIdx;
      parentIdx = ~~((idx - 1) / 2);
    }
  }
  // remove node/val from heap
  removeMax() {
    if (this.val.length === 0) return undefined;
    if (this.val.length === 1) return this.val.pop();
    [this.val[0], this.val[this.val.length - 1]] = [
      this.val[this.val.length - 1],
      this.val[0],
    ];
    return this.bubbleDown();
  }
  // bubble-down
  bubbleDown() {
    let toDel = this.val.pop();
    let currentIdx = 0;
    let swap = currentIdx;
    let leftChildIdx, rightChildIdx;
    while (currentIdx < this.val.length) {
      leftChildIdx = 2 * currentIdx + 1;
      rightChildIdx = 2 * currentIdx + 2;
      if (this.val[swap] < this.val[leftChildIdx] && this.val[leftChildIdx] !== undefined)
        swap = leftChildIdx;
      if (
        this.val[swap] < this.val[rightChildIdx] &&
        this.val[rightChildIdx] !== undefined
      )
        swap = rightChildIdx;
      if (swap === currentIdx) break;
      [this.val[currentIdx], this.val[swap]] = [this.val[swap], this.val[currentIdx]];
      currentIdx = swap;
    }
    return toDel;
  }
}
let maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
// maxHeap.insert(5);
// maxHeap.insert(53);
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax()); // [39,27,33,18,12]
console.log(maxHeap.val);
