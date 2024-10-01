import { Box, Card, Typography } from "@mui/material";
import { mobileView } from "../styles/constants";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { isMobile } = mobileView();
  return (
    <>
      <Card
        id="freedom-health-care-center-footer"
        sx={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-evenly",
          alignItems: isMobile ? "center" : "flex-start",
          backgroundColor: "#1C3A3E",
          borderRadius: 0,
          color: "#fff",
        }}
      >
        <Box
          sx={{
            marginTop: 3,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Footer Here</Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography>Footer Here</Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography>Footer Here</Typography>
        </Box>
      </Card>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#1C3A3E",
          color: "#fff",
          paddingBottom: 3,
        }}
      >
        <Typography variant="body1" textAlign="center" gutterBottom>
          &copy; {new Date().getFullYear()} Freedom Health Care Center, LLC. All
          rights reserved.
        </Typography>
        <Box
          id={"footer-bottom"}
          sx={{
            color: "#fff",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={"/privacy-policy"}>
            <Typography
              sx={{
                textDecoration: "underline",
                marginRight: 2,
                color: "#fff",
              }}
            >
              Privacy Policy
            </Typography>
          </Link>
          {" | "}
          <Link to={"/terms"}>
            <Typography
              sx={{
                textDecoration: "underline",
                marginRight: 2,
                marginLeft: 2,
                color: "#fff",
              }}
            >
              Terms & Conditions
            </Typography>
          </Link>
          {" | "}
          <Link to={"/disclaimer"}>
            <Typography
              sx={{ textDecoration: "underline", marginLeft: 2, color: "#fff" }}
            >
              Disclaimer
            </Typography>
          </Link>
        </Box>
        <Typography sx={{ textAlign: "center", paddingTop: 1 }}>
          Powered by{" "}
          <Link
            to={"http://catriecegilbert.dev"}
            style={{ textDecoration: "none" }}
          >
            <Box
              component="span"
              sx={({ ...theme }) => ({
                color: theme.palette.primary.light,
                textDecoration: "underline",
              })}
            >
              Ann Loraine Web Studio
            </Box>
          </Link>
        </Typography>
      </Box>
    </>
  );
};
