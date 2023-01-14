export function insertionSortAlgorithm(array) {
  const steps = [];

  insertionSort(array, steps);

  return steps;
}

function insertionSort(array, steps) {
  let item = 0;

  for (let i = 1; i < array.length; i++) {
    let j = i;

    steps.push({ type: "COMPARE", left: j - 1, right: j });
    while (j > 0 && array[j] < array[j - 1]) {
      steps.push({
        type: "SWAP",
        left: j - 1,
        right: j,
        leftValue: array[j - 1],
        rightValue: array[j],
      });

      swap(array, j, j - 1);
      j = j - 1;
    }
    steps.push({ type: "CHECKED", itemIndex: item });
    item++;
  }
  return steps;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
