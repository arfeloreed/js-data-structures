// hash table implementation

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }

    return total;
  }
  // set key value pair
  set(key, value) {
    const idx = this._hash(key);
    if (this.keyMap[idx] === undefined) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, value]);

    return this.keyMap;
  }
  // get the value of the key
  get(key) {
    const idx = this._hash(key);
    // base case
    if (this.keyMap[idx].length < 2) return this.keyMap[idx][0][1];
    else {
      const map = this.keyMap[idx];
      const length = map.length;
      for (let i = 0; i < length; i++) {
        // if (key === map[i][0]) return map[i];
        if (key === map[i][0]) return map[i][1];
      }
    }

    return undefined;
  }
  // returns an array of all keys
  keys() {
    const result = [];
    const mainLen = this.keyMap.length;
    for (let i = 0; i < mainLen; i++) {
      const map = this.keyMap[i];
      if (map) {
        const subLen = map.length;
        for (let j = 0; j < subLen; j++) {
          result.push(map[j][0]);
        }
      }
    }

    return result;
  }
  // returns an array of all values
  values() {
    const result = [];
    const mainLen = this.keyMap.length;
    for (let i = 0; i < mainLen; i++) {
      const map = this.keyMap[i];
      if (map) {
        const subLen = map.length;
        for (let j = 0; j < subLen; j++) {
          result.push(map[j][1]);
        }
      }
    }

    return result;
  }
}

const table = new HashTable(3);
table.set("reed", "pogi");
table.set("ping", "flat");
table.set("bodek", "tambok");
table.set("badon", "balbauts");
table.set("bek", "bekbek");
table.set("poks", "pokwang");
console.log(table.keyMap);
console.log(table.keys());
console.log(table.values());
// console.log(table.get("bek"));
// console.log(table.get("reed"));
// console.log(table.get("poks"));
// console.log(table.get("nems"));
