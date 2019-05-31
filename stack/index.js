class Stack {
  constructor() {
    this.stack = [];
  };
  push(item) {
    this.stack.push(item)
    return true;
  }
  pop() {
    if (this.size() === 0) {
      const err = new Error('Underflow');
      throw err;
    }
    return this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
  print() {
    console.log(this.stack);
  }
  peek() {
    if (this.size() === 0) {
      console.log('Stack is empty');
      return null;
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    if (this.size() === 0) {
      return true;
    }
    return false;
  }
}

const stack = new Stack();
stack.push('mohsen');
