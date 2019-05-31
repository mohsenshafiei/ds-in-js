class Queue {
  constructor(queue) {
    this.queue = queue || [];
  }
  enqueue (item) {
    this.queue.push(item);
  }
  dequeue() {
    if(this.isEmpty()) {
      const err = new Error("Underflow");
      throw err;
    }
    return this.queue.shift();
  }
  front() {
    if(this.isEmpty()) {
      console.log("No elements in Queue");
      return null
    }
    return this.queue[0];
  }
  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    }
    return false;
  }
  print() {
    console.log(this.queue);
  }
}

const queue = new Queue(['mostafa', 'jeff', 'amir', 'idin', 'mohammad hossein']);
queue.enqueue('mohsen');
queue.print();
