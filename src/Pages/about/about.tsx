import { Box, Paper, Typography } from "@mui/material";
import { Hero } from "../../shared/hero";
import { QuoteCard } from "../../shared/quote";
import teamPic from "../../assets/teamPic.jpg";
import { largeView, mobileView } from "../../styles/constants";
import { COMPANY_NAME } from "../../lib";
import { Approach } from "./approach";

export const AboutPage = () => {
  const { isMobile } = mobileView();
  const { isLargeScreen } = largeView();

  return (
    <Box sx={{ height: "inherit", width: "inherit" }}>
      <Hero
        img={teamPic}
        size={"cover"}
        position={"center top"}
        page={"home"}
        children={
          <Paper
            elevation={3}
            sx={{
              mt: 25,
              padding: isMobile ? "20px 0" : 0,
              width: isMobile ? "80%" : isLargeScreen ? "325px" : "400px",
              marginLeft: isMobile ? 0 : isLargeScreen ? 15 : 10,
              minHeight: isLargeScreen ? "400px" : "300px",
              maxWidth: "700px",
              opacity: 0.7,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography sx={{ paddingRight: 3, paddingLeft: 3 }} variant="h4">
              {COMPANY_NAME}
            </Typography>
            <Typography
              sx={{ paddingRight: 3, paddingLeft: 3 }}
              variant="body2"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              faucibus sapien nec sapien interdum. Aenean varius, nisl ac
              vehicula dapibus, erat lorem fermentum velit. Curabitur efficitur,
              nisl vitae sollicitudin aliquam, erat libero tempus nulla. Nam
              malesuada lacus non ligula posuere, at gravida sem suscipit.
            </Typography>
          </Paper>
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
      <Approach />
      <Box aria-hidden="true" sx={{ marginTop: 5 }} />
    </Box>
  );
};
