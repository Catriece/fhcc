import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import { CustomButton } from "../../shared/button";

export const OurProcessSnippet = () => {
  const process = [
    {
      id: "step-one",
      name: "Process Step",
      step: "1",
      description: "Process description will go here.",
    },
    {
      id: "step-two",
      name: "Process Step",
      step: "2",
      description: "Process description will go here.",
    },
    {
      id: "step-three",
      name: "Process Step",
      step: "3",
      description: "Process description will go here.",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        How We Nurture Your Wellness Journey
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Our step-by-step approach ensures personalized and effective care,
        guiding you towards optimal wellness and balance.
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {process.map((step) => (
          <Card key={step.id} elevation={0} variant="processSmall">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ width: "100%", textAlign: "center", fontSize: "30pt" }}
              >
                {step.step}
              </Typography>
              <Typography
                sx={{ fontSize: "18pt", marginTop: 2, textAlign: "center" }}
              >
                {step.name}
              </Typography>
              <Divider sx={{ margin: "10px 0" }} />
              <Typography
                sx={{ fontSize: "13pt", marginTop: 2, textAlign: "center" }}
              >
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
