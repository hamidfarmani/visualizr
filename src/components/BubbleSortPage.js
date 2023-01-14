import { Button } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { bubbleSortAlgorithm } from "../utils/BubbleSort";
import Visualize from "./Visualizr";

let correctPlaces = 0;
const BubbleSortPage = () => {
  const { infoState } = useAppContext();

  const [data, setData] = useState([]);
  const [steps, setSteps] = useState([]);

  const [step, setStep] = useState(0);
  const interval = useInterval(() => setStep((s) => s + 1), 120);

  useEffect(() => {
    correctPlaces = 0;
    if (infoState && infoState.objectArray) {
      setData([...infoState.objectArray]);
    } else {
      setData([]);
    }
  }, [infoState.objectArray]);

  useEffect(() => {
    const nextData = apply(
      steps[step],
      updateColors(
        data,
        "purple",
        0,
        infoState.objectArray
          ? infoState.objectArray.length - correctPlaces - 2
          : 0
      )
    );
    if (nextData === undefined) {
      interval.stop();
      setData(
        updateColors(
          data,
          "green",
          0,
          infoState.objectArray
            ? infoState.objectArray.length - correctPlaces - 1
            : 0
        )
      );
    } else {
      setData(nextData);
    }
  }, [step]);

  const doBubbleSort = () => {
    setData([...infoState.objectArray]);
    const steps = bubbleSortAlgorithm(infoState.array);
    setSteps(steps);
    setStep(0);
    interval.start();
  };

  const updateColors = (array, newColor, startIndex, endIndex) => {
    if (!array) return;
    const updatedObjects = array.slice(startIndex, endIndex + 1).map((item) => {
      return { ...item, color: newColor };
    });

    return [
      ...array.slice(0, startIndex),
      ...updatedObjects,
      ...array.slice(endIndex + 1),
    ];
  };

  function apply(stepItem, toUpdate) {
    if (stepItem === undefined || toUpdate === undefined) return;

    const { type } = stepItem;

    if (type === "COMPARE") {
      const color = "red";
      toUpdate[stepItem.left].color = color;
      toUpdate[stepItem.right].color = color;
    } else if (type === "SWAP") {
      const color = "yellow";
      toUpdate[stepItem.left].color = color;
      toUpdate[stepItem.right].color = color;

      toUpdate[stepItem.left].index = stepItem.left;
      toUpdate[stepItem.left].number = stepItem.rightValue;

      toUpdate[stepItem.right].index = stepItem.right;
      toUpdate[stepItem.right].number = stepItem.leftValue;
    } else if (type === "CHECKED") {
      const color = "green";
      toUpdate[stepItem.itemIndex].color = color;
      correctPlaces++;
    }

    return toUpdate;
  }

  return (
    <>
      <Visualize data={data} />
      <Button fullWidth onClick={doBubbleSort}>
        Sort
      </Button>
    </>
  );
};
export default BubbleSortPage;
