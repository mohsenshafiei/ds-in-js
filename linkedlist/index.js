class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(item) {
    let node = new Node(item);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  appendAt(item , index) {
    let node = new Node(item);
    let count = 1;
    let pivot = this.head;
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      while (count < index && pivot.next !== null ) {
        count++;
        pivot = pivot.next;
      }
      node.next = pivot.next;
      pivot.next = node;
      if (node.next === null) {
        this.tail = node;
      }
    }
  }

  remove(item) {
    let pivot = this.head;
    let prev = null;
    while (pivot !== null) {
      if (pivot.data === item) {
        if (prev === null) {
          this.head = pivot.next;
        } else {
            prev.next = pivot.next;
        }
        return pivot.data
      }
      prev = pivot;
      pivot = pivot.next;
    }
  }
  removeAt(index) {
    let pivot = this.head;
    let prev = null;
    let count = 1;
    if (index > this.length()) {
      console.log('index is bigger than size of linked list');
      return false;
    }
    while (count < index && pivot !== null) {
      prev = pivot;
      pivot = pivot.next;
      count++;
    }
    prev.next = pivot.next
  }
  isEmpty()  {
    return this.length() < 1;
  }
  length()  {
    if (!this.head) {
      return 0;
    } else {
      let length = 0;
      let temp = this.head;
      if (temp.next === null) {
        return 1;
      }
      while(temp.next !== null) {
        temp = temp.next;
        length++;
      }
      return length;
    }
  }

  traverse()  {
    if (!this.head) {
      return 0;
    } else {
      let pivot = this.head;
      while(pivot !== null) {
        console.log(pivot.data);
        pivot = pivot.next;
      }
    }
  }

  search(item) {
    if (!this.head) {
      return false;
    } else {
      let pivot = this.head;
      let index = 0;
      while (pivot !== null) {
        if (pivot.data === item) {
          return index;
        } else {
          index++;
          pivot = pivot.next;
        }
      }
      return ('Not Found');
    }
  }
}
// Example
const linkedList = new LinkedList();

linkedList.append('mohsen');
linkedList.append('jeff');

linkedList.appendAt('mostafa', 4);
linkedList.appendAt('idin', 1);
linkedList.traverse();

linkedList.remove('mostafa');
console.log('after remove: ');
linkedList.traverse();

linkedList.removeAt(4);
console.log('after removeAt: ');
linkedList.traverse();

const index = linkedList.search('idin');
console.log(index);
console.log(linkedList.length());
