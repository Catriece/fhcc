import { FC } from "react";
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

const HomePage: FC = () => {
  const { isMobile } = mobileView();
  const navigate = useNavigate();
  return (
    <Box
      className="top-box"
      role="main"
      sx={{ width: "inherit", overflow: "auto" }}
    >
      <Hero
        img={heroPhoto}
        size={"cover"}
        position={"center left 25%"}
        page={"home"}
        webHeight={isMobile ? "75dvh" : "60dvh"}
        children={
          <Box
            id={"hero-text-home"}
            sx={{
              marginLeft: isMobile ? 0 : 8,
            }}
          >
            <Box sx={{ marginTop: isMobile ? "4rem" : "1.5rem" }} />
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
              <Typography
                variant={"heroSubtitle"}
                aria-label="Description of the practice"
                gutterBottom
              >
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
                ariaLabel={"Contact button"}
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
      <Box aria-hidden="true" sx={{ marginTop: 10 }} />
      <ServicesSnippet />
      <Box aria-hidden="true" sx={{ marginTop: 7 }} />
      <OurProcessSnippet />
      <Box aria-hidden="true" sx={{ marginTop: 7 }} />
      <TeamMemberBio
        page="home"
        image={holley}
        alt={"Naturopathy-Practitioner-Holley"}
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
        biography={holleyBio}
        index={0}
        cta={
          <CustomButton
            id={"holley-home-page-snippet"}
            label={"Learn More"}
            ariaLabel={"Learn More Button"}
            func={() => navigate("/about")}
            endIcon={<ChevronRightIcon />}
            variant={"primary"}
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

export default HomePage;
