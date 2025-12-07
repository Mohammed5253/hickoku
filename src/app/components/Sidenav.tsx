"use client";
import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import OpenMenuListing from "./OpenMenuListing";
import Style from "@mui/icons-material/Style";
import { useTheme, useMediaQuery } from "@mui/material";
import MobileNavigation from "./MobileNavigation";
import { useDrawer } from "../context/DrawerContext";

const drawerWidth = 380;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Sidenav() {
  const [open, setOpen] = React.useState(false);
  const { openDrawer } = useDrawer();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // 600px - 900px
  // console.log("isTablet", isTablet);
  return (
    <>
      <Box sx={{ display: isTablet ? "flex" : "none" }}>
        <MobileNavigation
          openDrawer={handleDrawerOpen}
          cartDrawer={openDrawer}
        />
      </Box>
      <Box
        sx={{
          display: isTablet && !open ? "none" : "flex",
          alignItems: "center",
          justifyContent: !open ? "center" : "flex-end",
        }}
      >
        <CssBaseline />
        {!open ? (
          <Drawer variant="permanent" open={open}>
            <DrawerHeader
              sx={{ padding: 0, justifyContent: !open ? "center" : "flex-end" }}
            >
              {open ? (
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={handleDrawerOpen}
                    disableRipple
                    sx={{ width: "10px", padding: 0 }}
                  >
                    <MenuIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                </div>
              )}
            </DrawerHeader>

            <List>
              {open ? (
                <OpenMenuListing />
              ) : (
                [
                  {
                    label: "Search",
                    link: "/search",
                    icon: SearchIcon,
                    isDrawer: false,
                  },
                  {
                    label: "Collection",
                    link: "/collection",
                    icon: Style,
                    isDrawer: false,
                  },
                  {
                    label: "Cart",
                    link: "#",
                    icon: ShoppingCartIcon,
                    isDrawer: true,
                  },
                ].map(({ label, link, icon: IconCopmponent, isDrawer }) => (
                  <ListItem
                    key={label}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    {/* {isDrawer ? <Button onClick={onCartClick}> {label}</Button> : */}
                    <Link href={link} passHref>
                      <ListItemButton
                        onClick={isDrawer ? openDrawer : () => {}}
                        sx={[
                          {
                            minHeight: 48,
                            px: 2.5,
                          },
                          open
                            ? {
                                justifyContent: "initial",
                              }
                            : {
                                justifyContent: "center",
                              },
                        ]}
                      >
                        <ListItemIcon
                          sx={[
                            {
                              minWidth: 0,
                              justifyContent: "center",
                            },
                            open
                              ? {
                                  mr: 3,
                                }
                              : {
                                  mr: "auto",
                                },
                          ]}
                        >
                          <IconCopmponent />
                        </ListItemIcon>
                        <ListItemText
                          primary={label}
                          sx={[
                            open
                              ? {
                                  opacity: 1,
                                }
                              : {
                                  opacity: 0,
                                },
                          ]}
                        />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))
              )}
            </List>
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Pushes bottom content down
              },
            }}
          >
            <DrawerHeader
              sx={{ padding: 0, justifyContent: !open ? "center" : "flex-end" }}
            >
              {open ? (
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={handleDrawerOpen}
                    disableRipple
                    sx={{ width: "15px", padding: 0 }}
                  >
                    <MenuIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                  <Typography variant="caption">Menu</Typography>
                </div>
              )}
            </DrawerHeader>
            <OpenMenuListing />
          </Drawer>
        )}
      </Box>
    </>
  );
}
