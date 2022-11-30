import { Button } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { selectionSortAlgorithm } from "../utils/SelectionSort";
import Visualize from "./Visualizr";

const SelectionSortPage = () => {
  const { infoState } = useAppContext();

  const [data, setData] = useState([]);
  const [steps, setSteps] = useState([]);

  const [step, setStep] = useState(0);
  const interval = useInterval(() => setStep((s) => s + 1), 50);

  useEffect(() => {
    const nextData = data && data.length > 0 && apply(steps[step], data);
    setData(nextData);
    if (data === undefined) {
      interval.stop();
      setData([...infoState.objectArray]);
    }
  }, [step]);

  const doSelectionSort = () => {
    setData([...infoState.objectArray]);
    const steps = selectionSortAlgorithm(infoState.array);
    setSteps(steps);
    setStep(0);
    interval.start();
  };

  function apply(stepItem, toUpdate) {
    if (stepItem === undefined) return;

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
      toUpdate[index].color = "blue";
    }
    return toUpdate;
  }

  return (
    <>
      <Visualize data={infoState.objectArray} />
      <Button fullWidth onClick={doSelectionSort}>
        Sort
      </Button>
      {infoState &&
        infoState.objectArray &&
        infoState.objectArray.map((item) => item.number + " ")}
    </>
  );
};
export default SelectionSortPage;
