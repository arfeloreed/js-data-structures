class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Dijkstra {
  constructor() {
    this.adjacencyList = {};
  }
  // add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // add an edge
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  // finding the shortest path
  dijkstra(start, end) {
    // distances object
    const distances = {};
    distances[start] = 0;
    // set previous object
    const previous = {};
    previous[start] = null;
    // set keys for distances and previous
    for (const key in this.adjacencyList) {
      if (key !== start) {
        distances[key] = Infinity;
        previous[key] = null;
      }
    }
    // set priority queue
    const queue = new PriorityQueue();
    queue.enqueue(start, 0);

    while (queue.values.length) {
      const smallest = queue.dequeue().val;
      // base case
      if (smallest === end) break;
      // looping through the neighbors
      const neighbors = this.adjacencyList[smallest];
      for (const neighbor of neighbors) {
        const nextNode = neighbor.node;
        const distance = neighbor.weight + distances[smallest];
        // update distances object
        if (distance < distances[nextNode]) {
          distances[nextNode] = distance;
          previous[nextNode] = smallest;
          queue.enqueue(nextNode, distance);
        }
      }
    }

    return distances[end];
  }
}

const g = new Dijkstra();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");
g.addEdge("a", "b", 4);
g.addEdge("a", "c", 2);
g.addEdge("b", "e", 3);
g.addEdge("c", "d", 2);
g.addEdge("c", "f", 4);
g.addEdge("d", "e", 3);
g.addEdge("d", "f", 1);
g.addEdge("e", "f", 1);
console.log(g.adjacencyList);
console.log(g.dijkstra("a", "e"));
