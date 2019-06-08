const merge = (firstArray, secondArray) => {
  let thirdArray = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < firstArray.length && index2 < secondArray.length ) {
    if (firstArray[index1] === secondArray[index2]) {
      thirdArray.push(firstArray[index1]);
      thirdArray.push(secondArray[index2]);
      index1++;
      index2++;
    }
    if (firstArray[index1] < secondArray[index2]) {
      thirdArray.push(firstArray[index1]);
      index1++;
    }
    if (firstArray[index1] > secondArray[index2]) {
      thirdArray.push(secondArray[index2]);
      index2++;
    }
  }
  while (index1 < firstArray.length) {
    thirdArray.push(firstArray[index1]);
    index1++;
  }
  while (index2 < secondArray.length) {
    thirdArray.push(secondArray[index2]);
    index2++;
  }
  return thirdArray;
}

const mergeSort = (array) => {
  if (array.length <= 1 ) {
    return array;
  }
  const middle = Math.round((0 + array.length)/2);
  return merge(
    mergeSort(array.slice(0, middle), 0, middle),
    mergeSort(array.slice(middle, array.length), middle, array.length)
  );
}
