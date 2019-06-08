export const insertionSort = (array) => {
  for (let index = 2 ; index < array.length ; index++) {
    let key = array[index];
    let target = index - 1;
    while (target > 0 && array[target] > key) {
      array[target+1] = array[target];
      target = target-1;
    }
    array[target+1] = key;
  }
  return (array);
}
