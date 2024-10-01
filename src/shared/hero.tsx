import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { CustomButton } from "./button";
import { mobileView } from "../styles/constants";

interface HeroProps {
  img: string;
  size: "cover" | "contain";
  position: string;
  page: string;
  children: ReactNode;
}

export const Hero: FC<HeroProps> = ({
  img,
  size,
  position,
  page,
  children,
}) => {
  const { isMobile } = mobileView();
  return (
    <Box
      id={`hero-img-${page}`}
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: size,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        minHeight: isMobile ? "457px" : "609px",
        height: isMobile ? "105dvh" : "80dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
