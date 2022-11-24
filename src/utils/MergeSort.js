import { Button } from "@mantine/core";
import { useForceUpdate } from "@mantine/hooks";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { useAppContext } from "../context/AppContext";

const MergeSort = () => {
  const { infoState, setArray } = useAppContext();
  const forceUpdate = useForceUpdate();

  const doMergeSort = () => {
    const res = mergeSort(infoState.array);
    console.log(res);
  };

  return (
    <>
      <ResponsiveContainer height="50%" width="100%">
        <BarChart
          width={500}
          height={300}
          data={infoState && infoState.objectArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="number" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <Button onClick={doMergeSort}>Sort</Button>
    </>
  );

  function mergeSort(array) {
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
};
export default MergeSort;
