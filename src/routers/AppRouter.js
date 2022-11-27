import {
  AppShell,
  Burger,
  Button,
  ColorSchemeProvider,
  Divider,
  Header,
  MantineProvider,
  MediaQuery,
  Menu,
  Navbar,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MapPin, MoodSmile, User } from "tabler-icons-react";
import DashboardPage from "../components/DashboardPage";
import MainHeader from "../components/MainHeader";
import { NavMenu } from "../components/NavMenu";
import Visualizr from "../components/Visualizr";
import MergeSort from "../utils/MergeSort";

const AppRouter = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useState(preferredColorScheme);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  const dark = colorScheme === "dark";

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <BrowserRouter>
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
            navbar={
              <Navbar
                p="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                width={{ sm: 200, lg: 300 }}
              >
                <Navbar.Section mt="xs">
                  <Menu shadow="md" size="xl" placement="center">
                    <Menu.Target>
                      <Button>Something useful</Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>Actions</Menu.Label>

                      <Menu.Item
                        component={Link}
                        to={"/action1"}
                        icon={<User size={14} />}
                      >
                        Action 1
                      </Menu.Item>

                      <Menu.Item
                        component={Link}
                        to={"/action2"}
                        icon={<MapPin size={14} />}
                      >
                        Action 2
                      </Menu.Item>

                      <Menu.Item
                        component={Link}
                        to={"/action3"}
                        icon={<MoodSmile size={14} />}
                      >
                        Action 3
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Navbar.Section>

                <Divider my="sm" />

                <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                  <NavMenu />
                </Navbar.Section>
              </Navbar>
            }
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
              <Route path="/visualizr" element={<Visualizr />} exact />
            </Routes>
          </AppShell>
        </MantineProvider>
      </BrowserRouter>
    </ColorSchemeProvider>
  );
};

export default AppRouter;
