import { ActionIcon, Anchor, Group, Text, Title, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";
import { MoonStars, Sun } from "tabler-icons-react";

const MainHeader = ({ dark, toggleColorScheme }) => {
  return (
    <Group position="apart" style={{ width: "100%" }}>
      <Group>
        <Anchor component={Link} to="/" style={{ textDecoration: "none" }}>
          <Title order={2}>Visualizr</Title>
        </Anchor>
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
