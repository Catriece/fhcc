import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { CustomButton } from "./shared/button";
import { mobileView } from "./styles/constants";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";

function App() {
  const { isMobile } = mobileView();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleNavigate = (path: string) => () => {
    const top = document.getElementById("top");
    top?.scrollTo({ top: 0, left: 0 });
    console.log("Top: ", top);
    navigate(path);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <ScrollToTop /> */}
      <Box
        sx={{
          width: "100%",
          zIndex: 0,
          position: "static",
          top: 0,
        }}
      >
        <AppBar id="top" position="sticky" sx={{ top: 0 }}>
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
                  <MenuItem onClick={handleNavigate("/")}>
                    <HomeRoundedIcon />
                    Home
                  </MenuItem>
                  <MenuItem onClick={handleNavigate("/services")}>
                    <MedicalServicesRoundedIcon />
                    Services
                  </MenuItem>
                  <MenuItem onClick={handleNavigate("/about")}>
                    <InfoRoundedIcon />
                    About
                  </MenuItem>
                  <MenuItem onClick={handleNavigate("/contact")}>
                    <ContactSupportRoundedIcon />
                    Contact Us
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <CustomButton
                  ariaLabel="nav-home-button"
                  id={"nav-home"}
                  variant={"navigation"}
                  label={"Home"}
                  func={handleNavigate("/")}
                />
                <CustomButton
                  ariaLabel="nav-services-button"
                  id={"nav-services"}
                  variant={"navigation"}
                  label={"Services"}
                  func={handleNavigate("/services")}
                />
                <CustomButton
                  ariaLabel="nav-about-button"
                  id={"nav-about"}
                  variant={"navigation"}
                  label={"About"}
                  func={handleNavigate("/about")}
                />
                <CustomButton
                  ariaLabel="nav-contact-button"
                  id={"nav-contact"}
                  variant={"cta"}
                  label={"Contact Us"}
                  func={handleNavigate("/contact")}
                />
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
