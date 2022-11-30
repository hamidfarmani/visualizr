export function selectionSortAlgorithm(array) {
  const steps = [];

  selectionSort(array, steps);

  return steps;
}

function selectionSort(array, steps) {
  let currentIndex = 0;
  let minIndex = 0;
  while (currentIndex < array.length - 1) {
    minIndex = currentIndex;

    for (let i = currentIndex + 1; i < array.length; i++) {
      steps.push([minIndex, i]);
      steps.push([minIndex, i]);

      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
      steps.push([currentIndex, array[minIndex]]);
    }
    swap(array, currentIndex, minIndex);

    currentIndex++;
  }

  return steps;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
