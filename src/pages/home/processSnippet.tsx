import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

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
      role="region"
      aria-labelledby="wellness-journey-heading"
      sx={[
        {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        },
        (theme) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      ]}
    >
      <Typography
        id="wellness-journey-heading"
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          marginTop: 7,
          width: "95%",
        }}
      >
        How We Nurture Your Wellness Journey
      </Typography>
      <Typography
        variant="subheading"
        gutterBottom
        component="p"
        sx={{
          width: "95%",
        }}
      >
        Our step-by-step approach ensures personalized and effective care,
        guiding you towards optimal wellness and balance.
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 8,
        }}
      >
        {process.map((step) => (
          <Card
            key={step.id}
            elevation={0}
            variant="processSmall"
            role="article"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                id={`process-step-number-${step.id}`}
                component="h2"
                sx={{ width: "100%", textAlign: "center", fontSize: "30pt" }}
              >
                {step.step}
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: "18pt", marginTop: 2, textAlign: "center" }}
              >
                {step.name}
              </Typography>
              <Divider sx={{ margin: "10px 0" }} />
              <Typography
                component="p"
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
