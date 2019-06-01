class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Heap {
  constructor() {
    this.root = null;
  }
  swap(nodeA, nodeB) {
    let temp = nodeA.data;
    nodeA.data = nodeB.data;
    nodeB.data = temp;
  }
  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return true;
    }
    this._insertNode(this.root, node);
  }
  _insertNode(root, node) {
    if(root.left === null) {
      root.left = node;
      return;
    } else {
      this._insertNode(root.left, node);
      return;
    }
    if(root.right === null) {
      root.right = node;
    } else {
      this._insertNode(root.right,node);
    }
  }
  heapify(node) {
    const min = (node.left && (node.right.data > node.left.data)) || node.right === null ? node.left : node.right;
    if (min && node.data > min.data) {
      swap(node, min)
      this.heapify(min);
    }
  }
  postorder(node) {
    if (!node) {
      return null;
    }
    console.log(node.data);
    this.postorder(node.left);
    this.postorder(node.right);
  }
  getRoot() {
    return this.root;
  }
}


const heap = new Heap();
heap.insert(1);
heap.insert(2)
heap.insert(4);
heap.insert(3);
heap.insert(7);
heap.insert(6);
heap.insert(5);
heap.postorder(heap.getRoot());
