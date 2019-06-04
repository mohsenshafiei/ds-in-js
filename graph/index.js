class Node {
  constructor(identifier , edges) {
    this.identifier = identifier;
    this.edges = edges;
    this.visited = false;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
  add(identifier, edges) {
    const newNode = new Node(identifier, edges);
    this.nodes[identifier] = newNode;
  }
  remove(identifier) {
    this.nodes.splice(identifier, 1);
    this.nodes.forEach((item) => item.edges.splice(item.edges.indexOf(identifier), 1));
  }
  print() {
    this.nodes.forEach((node) => console.log(node.identifier, node.edges))
  }
  reset() {
    this.nodes.forEach(node => node.visited = false);
  }
}

module.exports = {
  Graph
}

const graph = new Graph();
graph.add(1, [2,3,4]);
graph.add(2, [1,4,5]);
graph.add(3, [1,2,3]);
graph.print();
graph.remove(2);
graph.print();
