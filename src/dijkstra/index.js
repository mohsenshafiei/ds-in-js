const { Graph } = require('../graph');
const { Queue } = require('../queue');

class Dijkstra extends Graph {
  constructor() {
    super();
    this.queue = [];
    this.shortestPath = [];
  }
  dijkstra(root) {
    this.nodes.forEach(vertice => this.shortestPath[vertice.identifier] = Infinity);
    let pivot = root;
    this.shortestPath[pivot] = 0;
    this.queue.push(pivot);
    while (this.queue.length > 0) {
      this.queue.splice(this.queue.indexOf(pivot), 1);
      this.nodes[pivot].edges.forEach((edge) => {
        if (this.shortestPath[edge[0]] > this.shortestPath[pivot] + edge[1]) {
          this.shortestPath[edge[0]] = this.shortestPath[pivot] + edge[1];
          this.queue.push(edge[0]);
        }
      });
      let min = Infinity;
      let select = null;
      this.queue.forEach((vertice) => {
        if (this.shortestPath[vertice] < min) {
          min = this.shortestPath[vertice];
          select = vertice;
        }
      })
      pivot = select;
    }
    return this.shortestPath;
  }
}

const graph = new Dijkstra();
graph.add(0, [[1, 4], [7, 8]]);
graph.add(1, [[0, 4], [7, 11], [2, 8]]);
graph.add(2, [[1, 8], [8, 2], [5, 4], [3, 7]]);
graph.add(3, [[2, 7], [5, 11], [4, 9]]);
graph.add(4, [[3, 9], [5, 10]]);
graph.add(5, [[2, 4], [3, 14], [4, 10], [6, 2]]);
graph.add(6, [[5, 2], [7, 1], [8, 6]]);
graph.add(7, [[0, 8], [1,11], [8, 7], [6, 1]]);
graph.add(8, [[2, 2], [6, 6], [7, 7]]);
console.log(graph.dijkstra(0));
