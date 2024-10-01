import { useMediaQuery } from "@mui/material";
import { theme } from ".";

export const mobileView = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return { isMobile };
};

export const largeView = () => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return { isLargeScreen };
};
