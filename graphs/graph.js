// adjacency list implementation

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // add a vertex
  add(val) {
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];

    return this.adjacencyList;
  }
  // add edge
  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);

    return this.adjacencyList;
  }
  // remove edge
  removeEdge(v1, v2) {
    let node1 = this.adjacencyList[v1];
    this.adjacencyList[v1] = [];
    let node2 = this.adjacencyList[v2];
    this.adjacencyList[v2] = [];

    if (node1) {
      for (let i = 0; i < node1.length; i++) {
        if (node1[i] !== v2) this.adjacencyList[v1].push(node1[i]);
      }
    }
    if (node2) {
      for (let i = 0; i < node2.length; i++) {
        if (node2[i] !== v1) this.adjacencyList[v2].push(node2[i]);
      }
    }

    return this.adjacencyList;
  }
  // remove a vertex
  remove(node) {
    const toRemove = this.adjacencyList[node];
    const toRemoveLen = toRemove.length;

    for (let i = 0; i < toRemoveLen; i++) {
      const v2 = toRemove[i];
      this.removeEdge(node, v2);
    }

    return delete this.adjacencyList[node];
  }
  // graph traversal
  // using recursion
  dfsRecursive(node) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      // base case
      const neighbors = adjacencyList[vertex];
      if (neighbors.length === 0) return null;
      result.push(vertex);
      visited[vertex] = true;

      for (const neighbor of neighbors) {
        if (visited[neighbor] !== true) {
          dfs(neighbor);
        }
      }
    }
    dfs(node);

    return result;
  }
  // using normal approach
  dfsIterative(node) {
    const stack = [node];
    const result = [];
    const visited = {};

    // use while loop to keep going until stack is empty
    while (stack.length) {
      // pop the last node
      const current = stack.pop();
      // if node is not visited
      if (visited[current] !== true) {
        // mark it visited
        visited[current] = true;
        // add to result list
        result.push(current);
        // add its neighbors to the stack
        const neighbors = this.adjacencyList[current];
        for (let i = neighbors.length - 1; i >= 0; i--) {
          stack.push(neighbors[i]);
        }
      }
    }

    return result;
  }
  // bfs implementation
  bfs(node) {
    const queue = [node];
    const result = [];
    const visited = {};
    let current;

    // use while loop to keep going until queue is empty
    while (queue.length) {
      // pop the first node
      current = queue.shift();
      // if node is not visited
      if (visited[current] !== true) {
        // mark it visited
        visited[current] = true;
        // add to result list
        result.push(current);
        // add its neighbors to the queue
        const neighbors = this.adjacencyList[current];
        for (let i = 0, len = neighbors.length; i < len; i++) {
          queue.push(neighbors[i]);
        }
      }
    }

    return result;
  }
}

// const graph = new Graph();
// graph.add("poks");
// graph.add("bek");
// console.log(graph.add("reed"));
// graph.addEdge("bek", "reed");
// graph.addEdge("bek", "poks");
// console.log(graph.addEdge("reed", "poks"));
// graph.remove("reed");
// console.log(graph.adjacencyList);
// console.log(graph.removeEdge("reed", "bek"));

const g = new Graph();
g.add("A");
g.add("B");
g.add("C");
g.add("D");
g.add("E");
g.add("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// console.log(g);
console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));
