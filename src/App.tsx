import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        {" "}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mb: 50 }} />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
