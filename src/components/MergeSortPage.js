import { Button } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { mergeSortAlgorithm } from "../utils/MergeSort";
import Visualize from "./Visualizr";

const MergeSortPage = () => {
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

  const doMergeSort = () => {
    setData([...infoState.objectArray]);
    const steps = mergeSortAlgorithm(infoState.array);
    setSteps(steps);
    setStep(0);
    interval.start();

    // for (let i = 0; i < steps.length; i++) {
    //   const bars = document.getElementsByClassName("bar-chart");
    //   const shouldChangeColor = i % 3 !== 2;

    //   if (shouldChangeColor) {
    //     const [leftBarIndex, rightBarIndex] = steps[i];
    //     const leftBarStyle = bars[leftBarIndex].style;
    //     const rightBarStyle = bars[rightBarIndex].style;
    //     const color = i % 3 === 0 ? "red" : "green";

    //     setTimeout(() => {
    //       leftBarStyle.backgroundColor = color;
    //       rightBarStyle.backgroundColor = color;
    //     }, i * 10);
    //   } else {
    //     setTimeout(() => {
    //       const [index, newNumber] = steps[i];
    //       const barStyle = bars[index].style;
    //       barStyle.height = `${newNumber}px`;
    //     }, i * 10);
    //   }
    // }
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
    }
    return toUpdate;
  }

  return (
    <>
      <Visualize data={infoState.objectArray} />
      <Button fullWidth onClick={doMergeSort}>
        Sort
      </Button>
      {infoState &&
        infoState.objectArray &&
        infoState.objectArray.map((item) => item.number + " ")}

      {/* <Paper shadow="md" p="md">
        <Container className="array-container">
          {infoState &&
            infoState.array &&
            infoState.array.map((value, index) => (
              <div
                className="bar-chart"
                key={index}
                style={{ height: `${value}px` }}
              ></div>
            ))}
        </Container>

        <Button fullWidth onClick={doMergeSort}>
          Sort
        </Button>
      </Paper> */}
    </>
  );
};
export default MergeSortPage;
