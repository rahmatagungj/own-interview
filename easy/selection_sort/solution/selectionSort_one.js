const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function selectionSort(array = []) {
  let idx = 0;

  while (idx < array.length - 1) {
    let smallestIdx = idx;

    for (let i = idx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }

    swap(array, smallestIdx, idx);
    idx++;
  }
  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
