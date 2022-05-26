import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import NextLink from "next/link";

// Icons
import DiamondIcon from "@mui/icons-material/Diamond";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";

// Redux
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  incrementClicks,
  turnOffRender,
  openSidebar,
  closeSidebar,
  logout,
} from "../../reducers";

// Components
// UI
import { ActiveLink } from "./";

// NextAuth
import { signOut } from "next-auth/react";

interface ModuleAuthProps {
  setClicked: (boolean: boolean) => void;
}

const ModuleAuth = ({ setClicked }: ModuleAuthProps) => {
  return (
    <Box className={"navbar__actions"}>
      <ActiveLink href="/auth/login">
        <Typography variant="overline" onClick={() => setClicked(true)}>
          Log in
        </Typography>
      </ActiveLink>
      <Divider orientation="vertical" flexItem />
      <ActiveLink href="/auth/signup">
        <Button variant="outlined" onClick={() => setClicked(true)}>
          Sign up
        </Button>
      </ActiveLink>
    </Box>
  );
};

const ModuleLogged = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { hierarchy } = user;

  const handleLogout = () => {
    dispatch(turnOffRender());
    dispatch(logout());
    signOut();
  };

  return (
    <Box className={"navbar__actions"}>
      <Typography variant="overline" display={"flex"} alignItems={"center"}>
        {hierarchy}
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Tooltip title="Logout">
        <IconButton
          onClick={handleLogout}
          aria-label="Logout"
          color="primary"
          size="small"
        >
          <LogoutIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { sidebar } = useAppSelector((state) => state.ux);

  const { logged } = user;

  const turnOffUxRender = () => {
    dispatch(turnOffRender());
  };

  const handleOpenSideBar = () => {
    dispatch(openSidebar());
  };

  const handleCloseSideBar = () => {
    dispatch(closeSidebar());
  };

  const handleOpenNavMenu = () => {
    setNavMenu(!navMenu);
  };

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  return (
    <AppBar
      position={"static"}
      elevation={0}
      className={logged ? "navbar__appbar navbar__connected" : "navbar__appbar"}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
      >
        <Box display={"flex"} alignItems={"center"}>
          {logged ? (
            sidebar.open ? (
              <Icon
                sx={{ marginRight: 1, cursor: "pointer" }}
                onClick={handleCloseSideBar}
              >
                <CloseIcon />
              </Icon>
            ) : (
              <Icon
                sx={{ marginRight: 1, cursor: "pointer" }}
                onClick={handleOpenSideBar}
              >
                <MenuIcon />
              </Icon>
            )
          ) : (
            <Icon sx={{ marginRight: 1 }}>
              <DiamondIcon />
            </Icon>
          )}
          <NextLink href={logged ? "/home" : "/#landing"} passHref>
            <Link
              sx={{ textDecoration: "none", color: "#fff" }}
              onClick={turnOffUxRender}
            >
              <Typography
                variant="h6"
                sx={{ userSelect: "none", cursor: "pointer" }}
              >
                VIRTUS
              </Typography>
            </Link>
          </NextLink>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button startIcon={<MenuIcon />} onClick={handleOpenNavMenu}>
            Menú
          </Button>
          <Menu
            open={navMenu}
            keepMounted
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{
              display: { xs: "block", md: "none" },
            }}
            onClose={handleOpenNavMenu}
          >
            <MenuItem>Nosotros</MenuItem>
            <MenuItem>Lúdicas</MenuItem>
            <MenuItem>Teoría</MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: { xs: "none", md: "flex" },
            justifyContent: "space-evenly",
          }}
        >
          <ActiveLink href="/#nosotros">
            <Button
              onClick={handleOpenNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Nosotros
            </Button>
          </ActiveLink>
          <ActiveLink href="/#ludicas">
            <Button
              onClick={handleOpenNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Lúdicas
            </Button>
          </ActiveLink>
          <ActiveLink href="/#teoria">
            <Button
              onClick={handleOpenNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Teoría
            </Button>
          </ActiveLink>
        </Box>
        {logged ? <ModuleLogged /> : <ModuleAuth setClicked={setClicked} />}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
