import { Box, NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { CheckupList } from "tabler-icons-react";

export const NavMenu = () => {
  const location = useLocation();

  return (
    <Box>
      <NavLink
        label="Merge Sort"
        component={Link}
        to="/merge-sort"
        icon={<CheckupList />}
        active={location.pathname === "/resume/list"}
      />
    </Box>
  );
};
