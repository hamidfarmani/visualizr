import { Box, NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import {
  ChartBubble,
  ColumnInsertRight,
  LayoutDashboard,
  Select,
  SquareHalf,
} from "tabler-icons-react";

export const NavMenu = () => {
  const location = useLocation();

  return (
    <Box>
      <NavLink
        label="Dashboard"
        component={Link}
        to="/dashboard"
        icon={<LayoutDashboard />}
        active={location.pathname === "/dashboard"}
      />
      <NavLink
        label="Merge Sort"
        component={Link}
        to="/merge-sort"
        icon={<SquareHalf />}
        active={location.pathname === "/merge-sort"}
      />
      <NavLink
        label="Bubble Sort"
        component={Link}
        to="/bubble-sort"
        icon={<ChartBubble />}
        active={location.pathname === "/bubble-sort"}
      />
      <NavLink
        label="Insertion Sort"
        component={Link}
        to="/insertion-sort"
        icon={<ColumnInsertRight />}
        active={location.pathname === "/insertion-sort"}
      />
      <NavLink
        label="Selection Sort"
        component={Link}
        to="/selection-sort"
        icon={<Select />}
        active={location.pathname === "/selection-sort"}
      />
    </Box>
  );
};
