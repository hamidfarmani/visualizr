export function mergeSort(array) {
  if (array.length === 1) return array;
  const midIndex = Math.floor(array.length / 2);
  const leftSide = array.slice(0, midIndex);
  const rightSide = array.slice(midIndex);

  return mergeSortedArrays(mergeSort(leftSide), mergeSort(rightSide));
}

function mergeSortedArrays(leftSide, rightSide) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if (leftSide[leftIndex] < rightSide[rightIndex]) {
      sortedArray.push(leftSide[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightSide[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftSide.length) {
    sortedArray.push(leftSide[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightSide.length) {
    sortedArray.push(rightSide[rightIndex]);
    rightIndex++;
  }

  return sortedArray;
}
