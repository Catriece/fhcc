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
          <Typography>Logo and Name</Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: isMobile ? 1 : 0,
              marginBottom: isMobile ? 1 : 2,
            }}
          >
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 1,
                fontWeight: 800,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Contact Us
            </Box>
            <Box id="address-label" sx={{ marginBottom: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 750,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Address:
              </Typography>
            </Box>
            <Box id="address">
              <Typography
                variant="body2"
                sx={{
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                2375 Professional Heights Drive Ste. 250
                <br />
                Lexington, Kentucky 40503
              </Typography>
            </Box>
            <Box
              id="p.o-box-address-label"
              sx={{
                marginTop: 1.5,
                marginBottom: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 750,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                P.O. Box Address:
              </Typography>
            </Box>
            <Box id="p.o-box-address">
              <Typography
                variant="body2"
                sx={{
                  marginTop: 0.5,
                  marginBottom: 1,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                P.o. Box 23148
                <br />
                Lexington, Kentucky 40523
              </Typography>
              <Box
                id="phone-number-label"
                sx={{ marginTop: isMobile ? 1.5 : 0.5, marginBottom: 1 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 750,
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Phone Number:
                </Typography>
              </Box>
              <Box id="phone-number">
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  (859) 447-4140
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: isMobile ? 1 : 0,
              marginBottom: isMobile ? 1 : 2,
            }}
          >
            <Box
              sx={{
                marginTop: 2,
                marginBottom: 1,
                fontWeight: 800,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Our Services
            </Box>
          </Box>
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
        {/* <Typography sx={{ textAlign: "center", paddingTop: 1 }}>
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
        </Typography> */}
      </Box>
    </>
  );
};
