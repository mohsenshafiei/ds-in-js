const bubbleSort = (array) => {
  for (let index = 0 ; index < array.length - 1 ; index++) {
    for (let target = array.length ; target > index + 1 ; target--) {
      if (array[target] < array[target-1]) {
        const temp = array[target];
        array[target] = array[target - 1];
        array[target - 1] = temp;
      }
    }
  }
  return array;
}
