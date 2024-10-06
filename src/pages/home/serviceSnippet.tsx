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
      role="region"
      aria-labelledby="services-heading"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography id="services-heading" variant="h3" gutterBottom>
          Struggling with wellness? Find personalized solutions here.
        </Typography>
        <Typography variant="subheading">
          Achieve lasting balance and energy with our personalized wellness
          solutions designed just for you.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            elevation={5}
            variant="serviceSmall"
            role="article"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Icon sx={{ width: "100%", height: "40px" }}>{service.icon}</Icon>
              <Typography
                id={`${service.id}-service-heading`}
                component="h4"
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
                ariaLabel={`Learn more about ${service.name}`}
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
