import { Button, Center } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { mergeSortAlgorithm } from "../utils/MergeSort";
import { SortButton } from "./SortButton";
import Visualize from "./Visualizr";

const MergeSortPage = () => {
  const { infoState, generateNewArray } = useAppContext();

  const [data, setData] = useState([]);
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);

  const interval = useInterval(() => setStep((s) => s + 1), infoState.speed);

  useEffect(() => {
    setData(generateNewArray(20));
  }, []);

  useEffect(() => {
    if (infoState && infoState.objectArray) {
      setData([...infoState.objectArray]);
    } else {
      setData([]);
    }
  }, [infoState.objectArray]);

  useEffect(() => {
    const nextData = apply(steps[step], data);
    setData(nextData);
    if (data === undefined) {
      interval.stop();
      setData([...infoState.objectArray]);
    }
  }, [step]);

  const doMergeSort = () => {
    setData([...infoState.objectArray]);
    const steps = mergeSortAlgorithm(infoState.array);
    setSteps(steps);
    setStep(0);
    interval.start();
  };

  function apply(stepItem, toUpdate) {
    if (stepItem === undefined || toUpdate === undefined) return;

    const shouldChangeColor = step % 3 !== 2;

    if (shouldChangeColor) {
      const [leftBarIndex, rightBarIndex] = stepItem;

      const color = step % 3 === 0 ? "red" : "green";

      toUpdate[leftBarIndex].color = color;
      toUpdate[rightBarIndex].color = color;
    } else {
      const [index, newNumber] = stepItem;
      toUpdate[index].index = index;
      toUpdate[index].number = newNumber;
    }
    return toUpdate;
  }

  return (
    <>
      <Visualize data={data} />
      <Center pt={15}>
        <SortButton handleOnclick={doMergeSort} />
      </Center>
    </>
  );
};
export default MergeSortPage;
