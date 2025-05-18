import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Style from "@mui/icons-material/Style";
import Link from "next/link";
import React from "react";

export default function MobileNavigation({
  openDrawer,
  cartDrawer,
}: {
  openDrawer: () => void;
  cartDrawer: () => void;
}) {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: 600,
          borderRadius: 4, // or '16px'
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
        elevation={0}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            borderRadius: 4,
          }}
        >
          <BottomNavigationAction
            label="Menu"
            icon={<MenuIcon />}
            onClick={openDrawer}
          />
          <BottomNavigationAction
            label="Search"
            component={Link}
            icon={<SearchIcon />}
            href="/search"
          />
          <BottomNavigationAction
            label="Collection"
            component={Link}
            icon={<Style />}
            href="/collection"
          />
          <BottomNavigationAction
            label="Cart"
            onClick={cartDrawer}
            icon={<ShoppingCartIcon to="/cart" />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
