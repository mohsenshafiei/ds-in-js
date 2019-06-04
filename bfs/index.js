const { Graph } = require('../graph');
const { Queue } = require('../queue');

class BFS extends Graph {
  constructor() {
    super();
    this.queue = new Queue();
  }

  bfs(identifier) {
    this.queue.enqueue(identifier);
    while (!this.queue.isEmpty()) {
      const vertice = this.nodes[this.queue.dequeue()].identifier;
      console.log('vertice', vertice);
      this.nodes[vertice].edges.forEach((v) => {
        if (this.nodes[v] && !this.nodes[v].visited) {
          this.queue.enqueue(v);
          this.nodes[v].visited = true;
        }
      });
    }
  }
  reset() {
    this.nodes.forEach((node) => node.visited = false);
  }
}
