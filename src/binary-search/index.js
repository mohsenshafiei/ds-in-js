const bs = (array, key, lowerBound, upperBound) => {
  const middle = Math.round((lowerBound + upperBound) / 2);
  if (array[middle] === key) {
    return(middle);
  }
  if (key > array[middle]) {
    bs(array, key, middle, upperBound);
  }
  if (key < array[middle]) {
    bs(array, key, lowerBound, middle);
  }
}

const binarySearch = (array, key) => {
  return bs(array, key, 0, array.length);
}
