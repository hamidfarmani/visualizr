import { ActionIcon, NumberInput, Slider } from "@mantine/core";
import { useState } from "react";
import { Check } from "tabler-icons-react";
import { useAppContext } from "../context/AppContext";
import { useArraySizeStyle } from "../styles/arraySizeStyle";

export function ArraySize() {
  const { classes } = useArraySizeStyle();
  const infoState = useAppContext();
  const [arraySize, setArraySize] = useState(
    infoState && infoState.array ? infoState.array.length : 20
  );

  const onGenerateClick = () => {
    infoState.generateNewArray(arraySize);
  };

  return (
    <div className={classes.wrapper}>
      <NumberInput
        value={arraySize}
        onChange={setArraySize}
        label="Array size"
        placeholder="20"
        step={1}
        min={4}
        max={100}
        hideControls
        classNames={{ input: classes.input, label: classes.label }}
        rightSection={
          <ActionIcon variant="subtle" onClick={() => onGenerateClick()}>
            <Check size={18} />
          </ActionIcon>
        }
        rightSectionWidth={42}
      />
      <Slider
        max={100}
        step={1}
        min={4}
        label={null}
        value={arraySize}
        onChange={setArraySize}
        size={2}
        radius={0}
        className={classes.slider}
        classNames={{ thumb: classes.thumb, track: classes.track }}
      />
    </div>
  );
}
