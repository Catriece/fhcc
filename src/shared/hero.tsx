import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { mobileView } from "../styles/constants";

interface HeroProps {
  img: string;
  size: "cover" | "contain";
  position: string;
  page: string;
  children: ReactNode;
  webHeight: string;
}

export const Hero: FC<HeroProps> = ({
  img,
  size,
  position,
  page,
  children,
  webHeight,
}) => {
  const { isMobile } = mobileView();
  return (
    <Box
      id={`hero-img-${page}`}
      role="banner"
      aria-label={`Hero section for ${page} page`}
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: size,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        minHeight: "309px",
        height: webHeight,
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
