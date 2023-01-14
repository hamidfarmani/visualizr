import { Group, Navbar, NavLink, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import {
  ChartBubble,
  ColumnInsertRight,
  ExternalLink,
  LayoutDashboard,
  Select,
  SquareHalf,
} from "tabler-icons-react";
import { navStyles } from "../styles/navStyles";

export const NavMenu = ({ opened, setOpened }) => {
  const location = useLocation();
  const { classes } = navStyles();

  return (
    <Navbar
      width={{ sm: 200, lg: 300 }}
      p="md"
      className={classes.navbar}
      hiddenBreakpoint="sm"
      hidden={!opened}
    >
      <Navbar.Section className={classes.section}>
        <NavLink
          label="Dashboard"
          component={Link}
          to="/dashboard"
          icon={<LayoutDashboard />}
          active={location.pathname === "/dashboard"}
          onClick={() => setOpened(false)}
        />
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader}>
          <Text size="xs" weight={500} color="dimmed">
            Logarithmic algorithms
          </Text>
        </Group>
        <div className={classes.collections}>
          <NavLink
            label="Merge Sort"
            component={Link}
            to="/merge-sort"
            icon={<SquareHalf />}
            active={location.pathname === "/merge-sort"}
            onClick={() => setOpened(false)}
          />
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader}>
          <Text size="xs" weight={500} color="dimmed">
            Quadratic algorithms
          </Text>
        </Group>

        <div className={classes.collections}>
          <NavLink
            label="Bubble Sort"
            component={Link}
            to="/bubble-sort"
            icon={<ChartBubble />}
            active={location.pathname === "/bubble-sort"}
            onClick={() => setOpened(false)}
          />
          <NavLink
            label="Insertion Sort"
            component={Link}
            to="/insertion-sort"
            icon={<ColumnInsertRight />}
            active={location.pathname === "/insertion-sort"}
            onClick={() => setOpened(false)}
          />
          <NavLink
            label="Selection Sort"
            component={Link}
            to="/selection-sort"
            icon={<Select />}
            active={location.pathname === "/selection-sort"}
            onClick={() => setOpened(false)}
          />
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <NavLink
          label="To GitHub repo"
          component="a"
          href="https://github.com/hamidfarmani/visualizr"
          target="_blank"
          variant="outline"
          icon={<ExternalLink />}
          onClick={() => setOpened(false)}
        />
      </Navbar.Section>
    </Navbar>
  );
};
