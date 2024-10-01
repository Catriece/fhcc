import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import { CustomButton } from "./shared/button";
import { useState } from "react";
import { mobileView } from "./styles/constants";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./shared/scrollToTop";

function App() {
  const { isMobile } = mobileView();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    navigate(`${path}`);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <AppBar>
        {" "}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                id="mobile-navigation-button"
                aria-controls={open ? "mobile-navigation-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
              <Menu
                id="mobile-navigation-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "mobile-navigation-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <HomeRoundedIcon />
                  Home
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MedicalServicesRoundedIcon />
                  Services
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <InfoRoundedIcon />
                  About
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ContactSupportRoundedIcon />
                  Contact Us
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <CustomButton
                id={"nav-home"}
                variant={"navigation"}
                label={"Home"}
                func={handleNavigate("/")}
              />
              <CustomButton
                id={"nav-services"}
                variant={"navigation"}
                label={"Services"}
                func={() => console.log("To services")}
              />
              <CustomButton
                id={"nav-about"}
                variant={"navigation"}
                label={"About"}
                func={handleNavigate("/about")}
              />
              <CustomButton
                id={"nav-contact"}
                variant={"cta"}
                label={"Contact Us"}
                func={() => console.log("To contact")}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
