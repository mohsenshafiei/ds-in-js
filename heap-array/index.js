class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class BinaryHeap {
  constructor() {
    this.list = [];
  }
  buildHeap(keys, values) {
    if (typeof values !== `undefined` && values.length !== keys.length) {
      throw new Error('Key array must be the same length as value array');
    }
    let nodeArray = [];
    for (let i = 0 ; i < keys.length; i++) {
      nodeArray.push(new Node(keys[i], values ? values[i] : undefined));
    }
    this.buildHeapFromNodeArray(nodeArray);
  }
  clear() {
    this.list = [];
  }
  extractMinimum() {
    if (!this.list.length) {
      return undefined;
    }
    if (this.list.length === 1) {
      return this.list.shift();
    }
    const min = this.list[0];
    this.list[0] = this.list.pop();
    this.heapify(0);
    return min;
  }
  findMinimum() {
    return this.isEmpty() ? undefined : this.list[0];
  }
  insert(key, value) {
    let i = this.list.length;
    const node = new Node(key, value);
    this.list.push(node);
    let parent = this.getParent(i);
    while(typeof parent !== `undefined` && this.compare(this.list[i], this.list[parent]) < 0) {
      this.swap(i, parent);
      i = parent;
      parent = this.getParent(i);
    }
    return node;
  }
  isEmpty() {
    return !this.list.length;
  }
  size() {
    return this.list.length;
  }
  union(other) {
    const array = this.list.concat(other.list);
    this.buildHeapFromNodeArray(array);
  }
  compare(a, b) {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1
    }
    return 0;
  }
  heapify(i) {
    const left = this.getLeft(i);
    const right = this.getRight(i);
    let smallest = i;
    if (left < this.list.length && this.compare(this.list[left], this.list[i]) < 0) {
      smallest = left;
    }
    if (right < this.list.length && this.compare(this.list[right], this.list[smallest]) < 0) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }
  buildHeapFromNodeArray(nodeArray) {
    this.list = nodeArray;
    for (let i = Math.floor(this.list.length / 2); i >= 0; i-- ) {
      this.heapify(i);
    }
  }
  swap(a, b) {
    let temp = this.list[a];
    this.list[a] = this.list[b];
    this.list[b] = temp;
  }
  getParent(i) {
    if (i === 0) {
      return undefined;
    }
    return Math.floor((i-1)/2);
  }
  getLeft(i) {
    return 2*i + 1;
  }
  getRight(i) {
    return 2*i + 2;
  }
  print() {
    console.log(this.list);
  }
}

const binaryHeap = new BinaryHeap();
binaryHeap.buildHeap([5, 4, 3, 1, 7], ['mohsen', 'mostafa', 'jeff', 'idin', 'amir']);
binaryHeap.print();
console.log(binaryHeap.extractMinimum());
binaryHeap.insert(2, 'mohammad hossein');
binaryHeap.print();
