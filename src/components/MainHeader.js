import {
  ActionIcon,
  Anchor,
  Button,
  Container,
  Group,
  Slider,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MoonStars, Sun } from "tabler-icons-react";
import { useAppContext } from "../context/AppContext";

const MainHeader = ({ dark, toggleColorScheme }) => {
  const [arraySize, setArraySize] = useState(20);
  const infoState = useAppContext();

  const onGenerateClick = () => {
    infoState.generateNewArray(arraySize);
  };

  return (
    <Group position="apart" style={{ width: "100%" }}>
      <Group>
        <Anchor component={Link} to="/" style={{ textDecoration: "none" }}>
          <Title order={2}>Visualizr</Title>
        </Anchor>
      </Group>

      <Group position="center">
        <Container size={400}>
          <Text>Select the size of array</Text>
          <Slider
            min={4}
            max={100}
            radius="lg"
            value={arraySize}
            onChange={setArraySize}
            onChangeEnd={setArraySize}
          />
        </Container>

        <Button onClick={() => onGenerateClick()}>Generate new numbers</Button>
      </Group>

      <Group>
        {
          <Anchor
            component={Link}
            to="/login"
            style={{ textDecoration: "none" }}
          >
            <Text>To GitHub</Text>
          </Anchor>
        }

        <Tooltip
          label={dark ? "Light mode" : "Dark mode"}
          radius="md"
          position="bottom"
          withArrow
          transition="fade"
          transitionDuration={200}
        >
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

export default MainHeader;
