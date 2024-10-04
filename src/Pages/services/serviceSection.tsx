import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { ServiceCard } from "./serviceCard";
import { mobileView } from "../../styles/constants";

const services = [
  {
    id: "service-name-1",
    icon: "build",
    title: "Service One",
    description: "Description of service one.",
  },
  {
    id: "service-name-2",
    icon: "code",
    title: "Service Two",
    description: "Description of service two.",
  },
  {
    id: "service-name-3",
    icon: "design_services",
    title: "Service Three",
    description: "Description of service three.",
  },
];

export const ServicesSection = () => {
  const { isMobile } = mobileView();
  const scrollToSection = (id: string) => {
    console.log(id, "ID");
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "center", // This ensures the section appears in the center of the screen
    });
  };
  return (
    <Box sx={{ backgroundColor: "red" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxWidth: "1200px",
              marginBottom: 2,
              backgroundColor: "green",
            }}
            key={service.id}
          >
            <ServiceCard
              title={service.title}
              func={() => scrollToSection(`${service.id}-section`)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                minWidth: isMobile ? "70%" : "200px",
                height: "100px",
                marginRight: "5px",
                marginLeft: "5px",
                transition: "transform 0.3s ease-in",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
