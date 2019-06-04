const { Graph } = require('../graph');

class DFS extends Graph {
  constructor() {
    super();
  }
  dfs(identifier) {
    console.log(identifier);
    this.nodes[identifier].visited = true;
    this.nodes[identifier].edges.forEach((vertice) => {
      if (!this.nodes[vertice].visited) {
        this.dfs(vertice);
      }
    });
  }
}

const graph = new DFS();

graph.add(0, [1, 2]);
graph.add(1, [3, 4, 5]);
graph.add(2, [6]);
graph.add(3, []);
graph.add(4, []);
graph.add(5, []);
graph.add(6, []);

graph.print();
graph.dfs(0);
