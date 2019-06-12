class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }
  _insertNode(node, newNode) {
    if (node.data < newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
    node.height = Math.max(this.height(node.right), this.height(node.left)) + 1;
    const balance = this.getBalance(node);
    // Left Left Case
    if (balance > 1 && node.data < node.left.data) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && node.data > node.right.data) {
      return this.rotateLeft(node);
    }
    // Left Right Case
    if (balance > 1 && node.data > node.left.data) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    // Right Left Case
    if (balance < -1 && node.data < node.right.data) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }
  }
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data, node.height);
      this.inorder(node.right);
    }
  }
  postorder(node) {
    if (node) {
      console.log(node.data, node.height);
      this.postorder(node.left);
      this.postorder(node.right);
    }
  }
  preorder(node) {
    if (node) {
      this.preorder(node.left);
      this.preorder(node.right);
      console.log(node.data, node.height);
    }
  }
  height(node) {
    if (node === null) {
      return 0
    } else {
      return node.height;
    }
  }
  rotateLeft(node) {
    let x = node;
    let y = node.right;
    let t2 = y.left;
    y.left = x;
    x.right = t2;
    x.height = Math.max(this.height(x.right), this.height(x.left)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    if (x === this.root) {
      this.root = y;
    }
    return y;
  }
  rotateRight(node) {
    let y = node;
    let x = node.left;
    let t2 = x.right;
    x.right = y
    y.left = t2;
    y.height = Math.max(this.height(y.right), this.height(y.left)) + 1;
    x.height = Math.max(this.height(x.right), this.height(x.left)) + 1;
    if (y === this.root) {
      this.root = x;
    }
    return x;
  }
  getBalance(node) {
    if (node === null) {
      return 0;
    } else {
      return (this.height(node.left) - this.height(node.right));
    }
  }
  getRoot() {
    return this.root;
  }
}

const avl = new AVL();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);
avl.preorder(avl.getRoot());
