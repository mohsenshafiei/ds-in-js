class ExponentialSearch {
  constructor(elements) {
    this.elements = elements;
  }
  search(key) {
    if (this.elements[0] === key) {
      return 0;
    }
    let counter = 1;
    let location = -1;
    while (counter < this.elements.length && this.elements[counter] < key) {
      counter = counter * 2;
      location = this.bs(counter/2, Math.min(counter, this.elements.length), key);
    }
    return location;
  }
  bs(lowerBound, upperBound, key) {
    const middle = Math.round(lowerBound + ((upperBound - lowerBound) / 2));
    if (upperBound >= lowerBound) {
      if (this.elements[middle] === key) {
        return middle;
      }
      if (key > this.elements[middle]) {
        return this.bs(middle + 1, upperBound, key);
      } else {
        return this.bs(lowerBound, middle - 1, key);
      }
    } else {
      return -1;
    }
  }
}

const expoSearch = new ExponentialSearch([2, 3, 4, 10, 40, 55]);
console.log(expoSearch.search(40));
console.log(expoSearch.search(55));
