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
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

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
    <Box className={"navbar__actions navbar__responsive"}>
      <ActiveLink href="/auth/login">
        <Typography variant="overline" onClick={() => setClicked(true)}>
          Inicia sesión
        </Typography>
      </ActiveLink>
      <Divider orientation="vertical" flexItem />
      <ActiveLink href="/auth/signup">
        <Button variant="outlined" onClick={() => setClicked(true)}>
          Regístrate
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
  const router = useRouter();

  const [clicked, setClicked] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [activeLanding, setActiveLanding] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { sidebar, landingPosition } = useAppSelector((state) => state.ux);

  const { ludicas, modulos, proyecto } = landingPosition;
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

  useEffect(() => {
    if (!logged && modulos !== 0 && ludicas !== 0 && proyecto !== 0) {
      const handleScroll = () => {
        const scrollValue =
          document.querySelector(".index__container")!.scrollTop;

        if (scrollValue + 400 >= ludicas && scrollValue + 400 < proyecto) {
          return setActiveLanding("ludicas");
        }
        if (scrollValue + 400 >= proyecto && scrollValue + 400 < modulos) {
          return setActiveLanding("proyecto");
        }
        if (scrollValue + 400 >= modulos) {
          return setActiveLanding("modulos");
        } else {
          return setActiveLanding(null);
        }
      };
      document
        .querySelector(".index__container")
        ?.addEventListener("scroll", handleScroll);
      return () => {
        removeEventListener("scroll", handleScroll);
      };
    }
  }, [logged, router, ludicas, modulos, proyecto]);

  return (
    <AppBar
      position={"static"}
      elevation={0}
      className={logged ? "navbar__appbar navbar__connected" : "navbar__appbar"}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "space-between" }}
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
              sx={{
                textDecoration: "none",
                color: "#fff",
              }}
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
        {!logged && (
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              startIcon={<MenuIcon />}
              onClick={handleOpenNavMenu}
              sx={{
                backgroundColor: "white",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Typography variant="overline">Menú</Typography>
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
              <MenuItem>
                <ActiveLink href="/#ludicas">Lúdicas</ActiveLink>
              </MenuItem>
              <MenuItem>
                <ActiveLink href="/#proyecto">Proyecto</ActiveLink>
              </MenuItem>
              <MenuItem>
                <ActiveLink href="/#modulos">Módulos</ActiveLink>
              </MenuItem>
              <MenuItem>
                <ActiveLink href="/auth/login">Iniciar sesión</ActiveLink>
              </MenuItem>
              <MenuItem>
                <ActiveLink href="/auth/signup">Regístrate</ActiveLink>
              </MenuItem>
            </Menu>
          </Box>
        )}
        {!logged && (
          <Box
            sx={{
              width: "50%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <ActiveLink href="/#ludicas">
              <Button sx={{ my: 1, color: "white", display: "block" }}>
                <Typography
                  variant="caption"
                  sx={
                    activeLanding === "ludicas"
                      ? { color: "#1e90ff" }
                      : { color: "white" }
                  }
                >
                  Lúdicas
                </Typography>
              </Button>
            </ActiveLink>
            <ActiveLink href="/#proyecto">
              <Button sx={{ my: 1, color: "white", display: "block" }}>
                <Typography
                  sx={
                    activeLanding === "proyecto"
                      ? { color: "#1e90ff" }
                      : { color: "white" }
                  }
                  variant="caption"
                >
                  Proyecto
                </Typography>
              </Button>
            </ActiveLink>
            <ActiveLink href="/#modulos">
              <Button sx={{ my: 1, color: "white", display: "block" }}>
                <Typography
                  sx={
                    activeLanding === "modulos"
                      ? { color: "#1e90ff" }
                      : { color: "white" }
                  }
                  variant="caption"
                >
                  Módulos
                </Typography>
              </Button>
            </ActiveLink>
          </Box>
        )}
        {logged ? <ModuleLogged /> : <ModuleAuth setClicked={setClicked} />}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
