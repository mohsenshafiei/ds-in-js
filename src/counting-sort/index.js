const countingSort = (array, range) => {
  let temp = [];
  let result = [];
  for (let index = 0 ; index < range ; index++) {
    temp.push(0);
  }
  for (let index = 0 ; index < array.length ; index++) {
    result.push(0);
  }
  for (let index = 0; index < array.length; index++) {
    temp[array[index]] = temp[array[index]] + 1;
  }
  console.log(temp);
  for (let index = 1 ; index < range ; index++) {
    temp[index] = temp[index] + temp[index - 1];
  }
  for (let index = 0; index < array.length ; index++ ) {
    result[temp[array[index]]] = array[index];
    temp[array[index]] = temp[array[index]] - 1;
  }
  return result;
}
