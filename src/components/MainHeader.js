import {
  ActionIcon,
  Anchor,
  Group,
  MediaQuery,
  Title,
  Tooltip,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { MoonStars, Sun } from "tabler-icons-react";
import { ArraySize } from "./ArraySize";

const MainHeader = ({ dark, toggleColorScheme }) => {
  const location = useLocation();

  return (
    <Group position="apart" style={{ width: "100%" }}>
      <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
        <Group position="left">
          <Anchor component={Link} to="/" style={{ textDecoration: "none" }}>
            <Title order={2}>Visualizr</Title>
          </Anchor>
        </Group>
      </MediaQuery>

      {location && location.pathname.includes("sort") && (
        <Group position="center">
          <ArraySize />
        </Group>
      )}

      <Group position="right">
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
