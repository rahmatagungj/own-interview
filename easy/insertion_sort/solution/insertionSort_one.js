const swap = (x, y, array) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

function insertionSort(array = []) {
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
