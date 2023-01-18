import { Center } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { bubbleSortAlgorithm } from "../utils/BubbleSort";
import { updateColors } from "../utils/CommonUtils";
import { SortButton } from "./SortButton";
import Visualize from "./Visualizr";

let correctPlaces = 0;
const BubbleSortPage = () => {
  const { infoState, generateNewArray } = useAppContext();

  const [data, setData] = useState([]);
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);

  const interval = useInterval(() => setStep((s) => s + 1), infoState.speed);

  useEffect(() => {
    setData(generateNewArray(20));
  }, []);

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
      <Center pt={15}>
        <SortButton handleOnclick={doBubbleSort} />
      </Center>
    </>
  );
};
export default BubbleSortPage;
