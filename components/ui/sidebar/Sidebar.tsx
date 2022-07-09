import { useEffect, useState } from "react";
import { Box, CSSObject, Divider, List, styled, Theme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

// Redux
import { useAppSelector } from "../../../hooks";

// SideBarData
import { AdminSideBarStore, TeacherSideBarStore } from "../../../store";

// Interfaces - Types - Enum
import { SideBarData } from "../../../interfaces";
import { Hierarchy } from "../../../enum";

// Components
import { SidebarItem } from "./SidebarItem";

const DRAWER_WIDTH = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  backgroundColor: "#091621",
  position: "static",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  position: "static",
  backgroundColor: "#091621",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const [data, setData] = useState<SideBarData[]>([]);

  const { sidebar } = useAppSelector((state) => state.ux);
  const { user } = useAppSelector((state) => state.auth);
  const { role } = user;

  useEffect(() => {
    switch (role) {
      case Hierarchy.admin:
        return setData(AdminSideBarStore);
      case Hierarchy.teacher:
        return setData(TeacherSideBarStore);
      default:
        return setData([]);
    }
  }, [role]);

  return (
    <Drawer
      variant="permanent"
      open={sidebar.open}
      className={
        sidebar.open
          ? "sidebar__main sidebar__expanded"
          : "sidebar__main sidebar__compressed"
      }
    >
      <List>
        {data?.map((item, index) => {
          return (
            <Box key={index}>
              <SidebarItem item={item} open={sidebar.open} />
              { index % 2 === 0 && <Divider />}
            </Box>
          );
        })}
      </List>
    </Drawer>
  );
};

export { Sidebar };
