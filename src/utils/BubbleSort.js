export function bubbleSortAlgorithm(array) {
  const steps = [];

  bubbleSort(array, steps);

  return steps;
}

function bubbleSort(array, steps) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      steps.push([i, i + 1]);
      steps.push([i, i + 1]);

      if (array[i] > array[i + 1]) {
        isSorted = false;
        swap(array, i, i + 1);
      }
      steps.push([i, array[i]]);
    }
  }

  return steps;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
