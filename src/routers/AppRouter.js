import {
  AppShell,
  Burger,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";

import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import BubbleSortPage from "../components/BubbleSortPage";
import DashboardPage from "../components/DashboardPage";
import InsertionSortPage from "../components/InsertionSortPage";
import MainHeader from "../components/MainHeader";
import MergeSortPage from "../components/MergeSortPage";
import { NavMenu } from "../components/NavMenu";
import SelectionSortPage from "../components/SelectionSortPage";

const AppRouter = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const [colorScheme, setColorScheme] = useState(
    localStorage.getItem("color") ? localStorage.getItem("color") : "dark"
  );

  const toggleColorScheme = () => {
    localStorage.color = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  const dark = colorScheme === "dark";

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <HashRouter basename={process.env.REACT_APP_BASE_NAME}>
        <MantineProvider
          theme={{
            loader: "oval",
            colorScheme,
          }}
          emotionOptions={{ key: "mantine" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <AppShell
            styles={{
              main: {
                background: dark ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={<NavMenu opened={opened} />}
            header={
              <Header height={70} p="md" background={theme.colors.gray[6]}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  <MainHeader
                    toggleColorScheme={toggleColorScheme}
                    dark={dark}
                  />
                </div>
              </Header>
            }
          >
            <Routes>
              <Route path="/" element={<DashboardPage />} exact />
              <Route path="/dashboard" element={<DashboardPage />} exact />
              <Route path="/merge-sort" element={<MergeSortPage />} exact />
              <Route path="/bubble-sort" element={<BubbleSortPage />} exact />
              <Route
                path="/selection-sort"
                element={<SelectionSortPage />}
                exact
              />
              <Route
                path="/insertion-sort"
                element={<InsertionSortPage />}
                exact
              />
            </Routes>
          </AppShell>
        </MantineProvider>
      </HashRouter>
    </ColorSchemeProvider>
  );
};

export default AppRouter;
