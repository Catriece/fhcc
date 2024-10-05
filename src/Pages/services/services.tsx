import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Hero } from "../../shared/hero";
import heroPhoto from "../../assets/hero-photo.jpg";
import { mobileView } from "../../styles/constants";
import { QuoteCard } from "../../shared/quote";
import { Approach } from "../about/approach";
import { holleyBio } from "../../lib/holleyBio";
import { TeamMemberBio } from "../../shared/teamMemberBiography";
import holley from "../../assets/holley.jpeg";
import harold from "../../assets/harold.jpg";
import { haroldBio } from "../../lib/haroldBio";
import { CTACard } from "../../shared/cta";
import { Footer } from "../../shared/footer";

const ServicesPage: FC = () => {
  const { isMobile } = mobileView();

  return (
    <Box
      className="top-box"
      sx={{ height: "inherit", width: "inherit", overflow: "scroll" }}
    >
      <Hero
        img={heroPhoto}
        size={"cover"}
        position={"center top 20%"}
        page={"services"}
        webHeight={isMobile ? "400px" : "40dvh"}
        children={
          <Box>
            <Box
              sx={{
                display: "flex",
                textShadow: isMobile ? "0 0 10px #000" : "",
              }}
            >
              <Typography variant="h2" color={isMobile ? "white" : "black"}>
                Our Services
              </Typography>
            </Box>
          </Box>
        }
      />
      <QuoteCard
        quote={
          "Revitalize your health and well-being and move from overwhelmed to empowered at Freedom Health Care Center."
        }
        page={"home"}
        num={1}
      />
      <Box aria-hidden="true" sx={{ marginTop: 5 }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Meet the Team
        </Typography>
        <Box
          sx={{
            width: "800px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Box>
            <Box
              sx={{
                backgroundImage: `url(${holley})`,
                backgroundSize: "cover",
                backgroundPosition: "center left 25%",
                backgroundRepeat: "no-repeat",
                height: isMobile ? "300px" : "375px",
                width: isMobile ? "250px" : "275px",
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: "center",
                borderRadius: 2,
              }}
            />
            <Typography
              sx={{
                fontSize: "1.75rem",
                marginTop: 2,
                fontWeight: 750,
              }}
            >
              Holley
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "1.25rem", fontStyle: "italic" }}
            >
              Naturopathy Practictioner
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundImage: `url(${harold})`,
                backgroundSize: "cover",
                backgroundPosition: "center left 25%",
                backgroundRepeat: "no-repeat",
                height: isMobile ? "300px" : "375px",
                width: isMobile ? "250px" : "275px",
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: "center",
                borderRadius: 2,
              }}
            />
            <Typography
              sx={{
                fontSize: "1.75rem",
                marginTop: 2,
                fontWeight: 750,
              }}
            >
              Harold Gilbert
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "1.25rem", fontStyle: "italic" }}
            >
              Biorequency Technician
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box aria-hidden="true" sx={{ marginTop: 5 }} />
      <Approach />
      <Box aria-hidden="true" sx={{ marginTop: 4 }} />

      <TeamMemberBio
        image={holley}
        alt={"Naturopathy-Expert-Holley"}
        bioHeading={
          <>
            <Typography
              variant={"h4"}
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Holley
            </Typography>
            <Box aria-hidden="true" sx={{ marginTop: isMobile ? 0 : 1 }} />
            <Typography
              variant={"body1"}
              sx={{
                textAlign: isMobile ? "center" : "left",
                fontSize: "1.25rem",
                color: "gray",
              }}
            >
              Naturopathy Practitioner
            </Typography>
          </>
        }
        biography={holleyBio}
        index={0}
      />
      <Box aria-hidden="true" sx={{ marginTop: 4 }} />
      <CTACard
        cta={"Experience Holistic Healing Today"}
        label={"Get Started Today"}
        page={"about"}
        num={1}
      />
      <Box aria-hidden="true" sx={{ marginTop: 3 }} />
      <TeamMemberBio
        image={harold}
        alt={"Biofrequency-Technician"}
        bioHeading={
          <>
            <Typography
              variant={"h4"}
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Harold Gilbert
            </Typography>
            <Box aria-hidden="true" sx={{ marginTop: isMobile ? 0 : 1 }} />
            <Typography
              variant={"body1"}
              sx={{
                textAlign: isMobile ? "center" : "left",
                fontSize: "1.25rem",
                color: "gray",
              }}
            >
              Bio-Frequency Technician
            </Typography>
          </>
        }
        biography={haroldBio}
        index={1}
      />
      <Box aria-hidden="true" sx={{ marginTop: 4 }} />
      <Footer />
    </Box>
  );
};

export default ServicesPage;
