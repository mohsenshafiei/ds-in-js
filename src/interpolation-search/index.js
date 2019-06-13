class InterpolationSearch {
  constructor(elements) {
    this.elements = elements;
  }
  search(key) {
    let lowerBound = 0;
    let upperBound = this.elements.length - 1;
    while (
      lowerBound <= upperBound &&
      key >= this.elements[lowerBound] &&
      key <= this.elements[upperBound]
    ) {
      if (lowerBound === upperBound) {
        if (this.elements[lowerBound] === key) {
          return lowerBound;
        } else {
          return false;
        }
      }
      const position = lowerBound +
       Math.round(((
         (upperBound - lowerBound) /
         (this.elements[upperBound] - this.elements[lowerBound])) *
         (key - this.elements[lowerBound])));
      if (this.elements[position] === key) {
        return position;
      }
      if (this.elements[position] < key) {
        lowerBound = position + 1;
      } else {
        upperBound = position - 1;
      }
    }
  }
}

let interpolationSearch = new InterpolationSearch([10, 12, 13, 16, 18, 19, 20, 21, 35, 42, 47]);
console.log(interpolationSearch.search(18));
console.log(interpolationSearch.search(42));
