export function mergeSortAlgorithm(array) {
  const steps = [];
  mergeSort(array, [], steps, 0, array.length - 1);

  return steps;
}

function mergeSort(array, temp, steps, leftStart, rightEnd) {
  if (leftStart >= rightEnd) return;
  const midIndex = Math.floor((leftStart + rightEnd) / 2);
  mergeSort(array, temp, steps, leftStart, midIndex);
  mergeSort(array, temp, steps, midIndex + 1, rightEnd);
  mergeHalves(array, temp, steps, leftStart, rightEnd);
}

function mergeHalves(array, temp, steps, leftStart, rightEnd) {
  const leftEnd = Math.floor((leftStart + rightEnd) / 2);
  const rightStart = leftEnd + 1;

  let currentIndex = leftStart;
  let leftIndex = leftStart;
  let rightIndex = rightStart;

  while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
    steps.push([leftIndex, rightIndex]);
    steps.push([leftIndex, rightIndex]);

    if (array[leftIndex] <= array[rightIndex]) {
      steps.push([currentIndex, array[leftIndex]]);

      temp[currentIndex] = array[leftIndex];
      leftIndex++;
    } else {
      steps.push([currentIndex, array[rightIndex]]);

      temp[currentIndex] = array[rightIndex];
      rightIndex++;
    }
    currentIndex++;
  }

  while (leftIndex <= leftEnd) {
    steps.push([leftIndex, leftIndex]);
    steps.push([leftIndex, leftIndex]);
    steps.push([currentIndex, array[leftIndex]]);

    temp[currentIndex] = array[leftIndex];
    leftIndex++;
    currentIndex++;
  }

  while (rightIndex <= rightEnd) {
    steps.push([rightIndex, rightIndex]);
    steps.push([rightIndex, rightIndex]);
    steps.push([currentIndex, array[rightIndex]]);

    temp[currentIndex] = array[rightIndex];
    rightIndex++;
    currentIndex++;
  }

  for (let i = 0; i < temp.length; i++) {
    array[i] = temp[i];
  }
}
