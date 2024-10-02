import { alpha, createTheme } from "@mui/material";
import "@fontsource/open-sans";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    navigation: true;
    cta: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    image: true;
    quote: true;
    serviceSmall: true;
    processSmall: true;
    cta: true;
  }
}

interface PaperProps {
  variant: string;
}

interface PaperOwnerState extends PaperProps {
  elevation: number;
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heroSubtitle: true;
    quote: true;
    serviceSmall: true;
    subheading: true;
    navigation: true;
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#2E8B57",
      light: "#83DC99",
      dark: "#084239",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2E5A85 ",
      light: "#D1F9FD",
      dark: "#194070",
      contrastText: "#FFFFFF",
    },
    error: { main: "#DB293E", contrastText: "#FFFFFF" },
    warning: { main: "#C68F03", contrastText: "#000000" },
    info: { main: "#0273DD", contrastText: "#FFFFFF" },
    success: { main: "#22B754", contrastText: "#FFFFFF" },
  },
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: [
          {
            zIndex: 1,
            height: "125px",
            width: "100%",
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
          },
        ],
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "36pt",
          margin: "0 8px",
          textTransform: "none",
          letterSpacing: ".1rem",
          fontSize: "1.1725rem",
          fontWeight: 650,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.075)",
          },
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: 50,
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            border: `.5px solid ${theme.palette.primary.main}`,
            borderRadius: 50,
            color: theme.palette.primary.main,
          },
        },
        {
          props: { variant: "tertiary" },
          style: {
            color: theme.palette.primary.main,
            borderBottom: `.5px solid ${theme.palette.primary.main}`,
            borderRadius: 0,
          },
        },
        {
          props: { variant: "navigation" },
          style: {
            borderRadius: 0,
            "&:hover": {
              borderBottom: ".5px solid #FFFFFF",
            },
          },
        },
        {
          props: { variant: "cta" },
          style: {
            borderRadius: 50,
            border: `.5px solid ${theme.palette.secondary.main}`,
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      ],
    },

    MuiPaper: {
      variants: [
        {
          props: { variant: "image" },
          style: {},
        },
        {
          props: { variant: "serviceSmall" },
          style: ({ ownerState }: { ownerState: PaperOwnerState }) => ({
            height: "250px",
            width: "225px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 10px",
            boxShadow: theme.shadows[ownerState.elevation ?? 0],
          }),
        },
        {
          props: { variant: "processSmall" },
          style: ({ ownerState }: { ownerState: PaperOwnerState }) => ({
            height: "400px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 10px",
            boxshadow: theme.shadows[ownerState.elevation ?? 0],
            [theme.breakpoints.up("md")]: {
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.025)",
              },
            },
          }),
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
        {
          props: { variant: "quote" },
          style: {
            minHeight: "150px",
            width: "100%",
            padding: "20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: theme.palette.primary.main,
            textAlign: "center",
          },
        },
        {
          props: { variant: "cta" },
          style: {
            height: "200px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            backgroundColor: theme.palette.primary.main,

            textAlign: "center",
          },
        },
        {
          props: { variant: "serviceSmall" },
          style: ({ ownerState }: { ownerState: PaperOwnerState }) => ({
            height: "300px",
            width: "85%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 10px",
            boxshadow: theme.shadows[ownerState.elevation ?? 0],
            [theme.breakpoints.up("md")]: {
              width: "250px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.025)",
              },
            },
          }),
        },
        {
          props: { variant: "processSmall" },
          style: ({ ownerState }: { ownerState: PaperOwnerState }) => ({
            height: "250px",
            width: "85%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 5px",
            boxShadow: theme.shadows[ownerState.elevation ?? 0],
            [theme.breakpoints.up("md")]: {
              width: "300px",
              height: "400px",
              margin: "20px 10px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.025)",
              },
            },
          }),
        },
      ],
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color: "rgb(55, 65, 81)",
          boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          "& .MuiMenu-list": {
            padding: "4px 0",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
          },
          "&:active": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  },
  typography: {
    h2: {
      fontWeight: 800,
      textAlign: "left",
      fontSize: "50pt",
      color: theme.palette.primary.dark,
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "36pt",
        padding: "0 20pt",
      },
    },
    h3: {
      fontSize: "30pt",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "24pt",
      },
    },
    string: {
      color: theme.palette.primary.contrastText,
    },
    heroSubtitle: {
      textAlign: "left",
      fontSize: "20pt",
      lineHeight: 1.25,
      color: theme.palette.primary.dark,
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "16pt",
      },
    },
    quote: {
      fontSize: "22pt",
      color: theme.palette.primary.contrastText,
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 400,
      fontStyle: "italic",
      lineHeight: 1.5,
      letterSpacing: ".025rem",
      width: "90%",
    },
    subheading: {
      fontSize: "15pt",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: ".025rem",
      textAlign: "center",
    },
    navigation: {
      color: "#ffffff",
    },
  },
});
