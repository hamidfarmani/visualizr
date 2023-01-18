import { Box, Button, Center, Group, SegmentedControl } from "@mantine/core";
import { HourglassLow, MailFast, WaveSine } from "tabler-icons-react";
import { useAppContext } from "../context/AppContext";

export function SortButton({ handleOnclick }) {
  const { infoState, setSpeed } = useAppContext();

  return (
    <Group noWrap spacing={0}>
      <SegmentedControl
        py={2}
        size="sm"
        value={infoState.speed}
        onChange={setSpeed}
        data={[
          {
            label: (
              <Center>
                <HourglassLow size={16} />
                <Box ml={10}>Slow</Box>
              </Center>
            ),
            value: 400,
          },
          {
            label: (
              <Center>
                <WaveSine size={16} />
                <Box ml={10}>Medium</Box>
              </Center>
            ),
            value: 100,
          },
          {
            label: (
              <Center>
                <MailFast size={16} />
                <Box ml={10}>Fast</Box>
              </Center>
            ),
            value: 1,
          },
        ]}
      />

      <Button
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        onClick={handleOnclick}
      >
        Sort
      </Button>
    </Group>
  );
}
