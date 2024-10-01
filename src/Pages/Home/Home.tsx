import { Box, Typography } from "@mui/material";
import heroPhoto from "../../assets/hero-photo.jpg";
import { Hero } from "../../shared/hero";
import { QuoteCard } from "../../shared/quote";
import { ServicesSnippet } from "./serviceSnippet";
import { OurProcessSnippet } from "./processSnippet";
import { TeamMemberBio } from "../../shared/teamMemberBiography";
import { CTACard } from "../../shared/cta";
import { Footer } from "../../shared/footer";
import { mobileView } from "../../styles/constants";
import { CustomButton } from "../../shared/button";
import holley from "../../assets/holley.jpeg";
import { holleyBio } from "../../lib/holleyBio";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { isMobile } = mobileView();
  const navigate = useNavigate();
  return (
    <Box sx={{ height: "inherit", width: "inherit" }}>
      <Hero
        img={heroPhoto}
        size={"cover"}
        position={"center left 25%"}
        page={"home"}
        children={
          <Box
            id={"hero-text-home"}
            sx={{
              marginLeft: isMobile ? 0 : 8,
            }}
          >
            <Box sx={{ marginTop: isMobile ? "4rem" : "6rem" }} />
            <Typography variant={"h2"} component={"h1"} gutterBottom>
              Fuel your{" "}
              <Box component="span" sx={{ color: "gold", fontStyle: "italic" }}>
                body
              </Box>
              , <br /> transform your{" "}
              <Box component="span" sx={{ color: "gold", fontStyle: "italic" }}>
                life
              </Box>
              .
            </Typography>
            <Box
              id={"hero-description-home"}
              sx={{
                width: isMobile ? "90%" : "65%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: isMobile ? "auto" : "0",
              }}
            >
              <Typography variant={"heroSubtitle"} gutterBottom>
                We create personalized nutrition plans for individuals seeking
                lasting health and freedom from wellness struggles.
              </Typography>
            </Box>
            <Box
              id={"hero-button-home"}
              sx={{
                marginTop: 5,
                marginLeft: isMobile ? 0 : -1,
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
                alignItems: "center",
              }}
            >
              <CustomButton
                id={"contact-button-home-page"}
                variant={"cta"}
                label={"Contact Us Today!"}
                func={() => console.log("To contact")}
              />
            </Box>
          </Box>
        }
      />
      <QuoteCard
        quote={
          "We work with you to support your body's natural healing process."
        }
        page={"home"}
        num={1}
      />
      <Box aria-hidden="true" sx={{ marginTop: 8 }} />
      <ServicesSnippet />
      <Box aria-hidden="true" sx={{ marginTop: 5 }} />
      <OurProcessSnippet />
      <Box aria-hidden="true" sx={{ marginTop: 3 }} />
      <TeamMemberBio
        image={holley}
        alt={"Naturopathy-Expert-Holley"}
        bioHeading={
          <>
            <Typography
              variant={"h4"}
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Nurtured by nature: <br />
              Get to know your healing expert
            </Typography>
            <Box aria-hidden="true" sx={{ marginTop: isMobile ? 2 : 1 }} />
            <Typography
              variant={"h3"}
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              I'm Holley, your Naturopathy Practitioner
            </Typography>
          </>
        }
        biography={holleyBio.slice(0, 510)}
        index={0}
        cta={
          <CustomButton
            id={"holley-home-page-snippet"}
            label={"Learn More About Us"}
            func={() => navigate("/about")}
            endIcon={<ChevronRightIcon />}
            variant={"secondary"}
          />
        }
      />
      <Box aria-hidden="true" sx={{ marginTop: 5 }} />
      <CTACard
        cta={"Experience Holistic Healing Today"}
        label={"Get Started Today"}
        page={"home"}
        num={1}
      />
      <Footer />
    </Box>
  );
};
