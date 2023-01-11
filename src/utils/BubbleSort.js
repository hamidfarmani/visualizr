export function bubbleSortAlgorithm(array) {
  const steps = [];

  bubbleSort(array, steps);

  return steps;
}

function bubbleSort(array, steps) {
  let isSorted = false;
  let item = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - item; i++) {
      steps.push({ type: "COMPARE", left: i, right: i + 1 });

      if (array[i] > array[i + 1]) {
        isSorted = false;
        steps.push({
          type: "SWAP",
          left: i,
          right: i + 1,
          leftValue: array[i],
          rightValue: array[i + 1],
        });
        swap(array, i, i + 1);
      }
    }
    steps.push({ type: "CHECKED", itemIndex: array.length - 1 - item });
    item++;
  }

  return steps;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
