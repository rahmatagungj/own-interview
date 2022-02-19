const binarySearchHelper = (array, target, left, right) => {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midVal = array[mid];
  
      if (midVal === target) {
        return mid;
      } else if (midVal > target) {
        right = mid - 1;
      } else {
        right = mid + 1;
      }
    }
  
    return -1;
  };
  
 function binarySearch(array = [], target = 0) {
    return binarySearchHelper(array, target, 0, array.length - 1);
 }
  
 exports.binarySearch = binarySearch