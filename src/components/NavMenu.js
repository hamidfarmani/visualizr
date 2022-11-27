import { Box, NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, SquareHalf } from "tabler-icons-react";

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
        to="/visualizr"
        icon={<SquareHalf />}
        active={location.pathname === "/visualizr"}
      />
    </Box>
  );
};
