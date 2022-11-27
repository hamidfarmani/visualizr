import { Box, NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { SquareHalf } from "tabler-icons-react";

export const NavMenu = () => {
  const location = useLocation();

  return (
    <Box>
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
