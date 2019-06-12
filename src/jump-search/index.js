class JumpSearch {
  constructor(elements) {
    this.elements = elements;
  }
  length() {
    return this.elements.length;
  }
  search(key, length) {
    let counter = 0;
    while (counter * length < this.length()) {
      if (key === this.elements[counter * length]) {
        return counter * length;
      } else {
        if (key > this.elements[counter * length]) {
          counter += 1;
        } else {
          break;
        }
      }
    }
    for (let i = (counter - 1) * length; i < counter * length; i++) {
      if (key === this.elements[i]) {
        return i;
      }
    }
    return false;
  }
}

const js = new JumpSearch([1, 3, 5, 7, 12, 23, 25, 28, 33, 37]);
console.log(js.search(23, 3));
console.log(js.search(1, 3));
console.log(js.search(7, 12));
console.log(js.search(33, 2));
console.log(js.search(12, 4));
