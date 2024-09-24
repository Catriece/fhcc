import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    image: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2E8B57",
      light: "#83DC99",
      dark: "#084239",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#87CEEB",
      light: "#D1F9FD",
      dark: "#194070",
      contrastText: "#FFFFFF",
    },
    error: { main: "#DB293E", contrastText: "#FFFFFF" },
    warning: { main: "#C68F03", contrastText: "#000000" },
    info: { main: "#0273DD", contrastText: "#FFFFFF" },
    success: { main: "#22B754", contrastText: "#FFFFFF" },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: [
          {
            zIndex: 99999,
            height: "100px",
            width: "100%",
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
          },
          ({ theme }) => ({
            boxShadow: `0 0 10px 10px ${theme.palette.primary.main}`,
          }),
        ],
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "36pt",
          textTransform: "none",
          letterSpacing: ".1rem",
          fontSize: "1.1725rem",
          fontWeight: 650,
          transition: "transform 0.6s ease",
          "&:hover": {
            transform: "scale(1.075)",
          },
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: 50,
          }),
        },
        {
          props: { variant: "secondary" },
          style: ({ theme }) => ({
            border: `.5px solid ${theme.palette.primary.main}`,
            borderRadius: 50,
            color: theme.palette.primary.main,
          }),
        },
        {
          props: { variant: "tertiary" },
          style: ({ theme }) => ({
            color: theme.palette.primary.main,
            borderBottom: `.5px solid ${theme.palette.primary.main}`,
            borderRadius: 0,
          }),
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "image" },
          style: {},
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "image" },
          style: {
            height: "100%",
            width: "100%",
          },
        },
      ],
    },
  },
});
