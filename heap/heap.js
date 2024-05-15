// max binary heap

class Heap {
  constructor() {
    this.val = [];
  }
  // bubble up
  bubbleUp(index, parentIndex) {
    while (this.val[index] > this.val[parentIndex]) {
      [this.val[index], this.val[parentIndex]] = [this.val[parentIndex], this.val[index]];
      index = parentIndex;
      parentIndex = ~~((index - 1) / 2);
    }

    return this.val;
  }
  // adding a value into the list
  insert(num) {
    this.val.push(num);
    if (this.val.length === 1) return this.val;
    let current = this.val.length - 1;
    let parent = ~~((current - 1) / 2);
    return this.bubbleUp(current, parent);
  }
  // bubble down operation, removing the root or the largest value
  remove() {
    if (this.val.length === 0) return null;
    if (this.val.length === 1) return this.val.pop();
    return this.bubbleDown();
  }
  bubbleDown() {
    [this.val[0], this.val[this.val.length - 1]] = [
      this.val[this.val.length - 1],
      this.val[0],
    ];
    const toRemove = this.val.pop();
    let parent = 0;
    let left, right;

    while (true) {
      let largest = parent;
      left = 2 * parent + 1;
      right = 2 * parent + 2;

      if (left < this.val.length && this.val[left] > this.val[largest]) largest = left;
      if (right < this.val.length && this.val[right] > this.val[largest]) largest = right;

      // base case
      if (largest !== parent) {
        [this.val[largest], this.val[parent]] = [this.val[parent], this.val[largest]];
        parent = largest;
      } else break;
    }

    return toRemove;
  }
}

const list = new Heap();
// console.log(list.val);
console.log(list.insert(41));
console.log(list.insert(39));
console.log(list.insert(33));
console.log(list.insert(18));
console.log(list.insert(27));
console.log(list.insert(12));
console.log(list.insert(55));
console.log(list.remove());
console.log(list.remove());
console.log(list.remove());
console.log(list.remove());
console.log(list.remove());
console.log(list.val);
// console.log((0 - 1) / 2);
// console.log(Math.floor((0 - 1) / 2));
// console.log(~~((0 - 1) / 2));
// console.log(~~-3.12);
