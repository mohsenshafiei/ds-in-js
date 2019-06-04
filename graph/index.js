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
