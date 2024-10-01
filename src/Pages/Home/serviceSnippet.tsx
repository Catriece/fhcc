import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { CustomButton } from "../../shared/button";
import { MouseEvent } from "react";

export const ServicesSnippet = () => {
  const services = [
    {
      id: "service-name1",
      name: "Service Name",
      icon: <WaterDropIcon fontSize="large" />,
      description: "Service description will go here.",
    },
    {
      id: "service-name2",
      name: "Service Name",
      icon: <WaterDropIcon fontSize="large" />,
      description: "Service description will go here.",
    },
    {
      id: "service-name3",
      name: "Service Name",
      icon: <WaterDropIcon fontSize="large" />,
      description: "Service description will go here.",
    },
    {
      id: "service-name4",
      name: "Service Name",
      icon: <WaterDropIcon fontSize="large" />,
      description: "Service description will go here.",
    },
    {
      id: "service-name5",
      name: "Service Name",
      icon: <WaterDropIcon fontSize="large" />,
      description: "Service description will go here.",
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
      <Typography variant="h3">
        Struggling with wellness? Find personalized solutions here.
      </Typography>
      <Typography variant="subheading">
        Achieve lasting balance and energy with our personalized wellness
        solutions designed just for you.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {services.map((service) => (
          <Card key={service.id} elevation={5} variant="serviceSmall">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Icon sx={{ width: "100%", height: "40px" }}>{service.icon}</Icon>
              <Typography
                sx={{ fontSize: "18pt", marginTop: 2, textAlign: "center" }}
              >
                {service.name}
              </Typography>
              <Divider sx={{ margin: "10px 0" }} />
              <Typography
                sx={{ fontSize: "13pt", marginTop: 2, textAlign: "center" }}
              >
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <CustomButton
                id={`${service.id}-button`}
                label={"Learn More"}
                func={() => console.log(`Go to ${service.name}`)}
                variant={"primary"}
              />
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
