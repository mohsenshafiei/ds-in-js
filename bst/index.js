class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(item) {
    const node = new Node(item);
    if (this.root === null) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }
  _insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    }
    else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right,newNode);
      }
    }
  }
  remove(item) {
    this.root = this._removeNode(this.root, item);
  }
  _removeNode(node, key) {
    if (node === null) {
      return null;
    }
    else if (key < node.data) {
      node.left = this._removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this._removeNode(node.right, key);
      return node;
    }
    else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }
    }
  }
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node);
      this.inorder(node.right);
    }
  }
  postorder(node) {
    if (node) {
      console.log(node);
      this.postorder(node.left);
      this.postorder(node.right);
    }
  }
  isEmpty() {
    return (this.root === null);
  }
  getRoot() {
    return(this.root);
  }
  findMin(node) {
    if (!node.left) {
      return node;
    } else {
      this.findMin(node.left);
    }
  }
  findMax(node) {
    if (!node.right) {
      return node;
    } else {
      this.findMax(node.right);
    }
  }
  search(node, item) {
    if (node === null) {
      return null;
    } else if (item < node.data) {
      return this.search(node.left , item);
    } else if (item > node.data) {
      return this.search(node.right , item);
    } else {
      return node;
    }
  }
}
