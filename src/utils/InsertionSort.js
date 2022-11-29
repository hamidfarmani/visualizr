export function insertionSortAlgorithm(array) {
  const steps = [];

  insertionSort(array, steps);

  return steps;
}

function insertionSort(array, steps) {
  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0 && array[j] < array[j - 1]) {
      steps.push([j, j - 1]);
      steps.push([j, j - 1]);
      steps.push([j - 1, array[j - 1]]);

      swap(array, j, j - 1);
      j = j - 1;
    }
  }
  return steps;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
