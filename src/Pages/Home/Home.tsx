import { Box, Card, CardMedia, Button } from "@mui/material";
import elijah from "../../assets/react.svg";

export const HomePage = () => {
  return (
    <>
      <Button variant="primary">Hello</Button>
      <Box sx={{ mb: 5 }} />
      <Button variant="secondary">Hello</Button>
      <Box sx={{ mb: 5 }} />
      <Button variant="tertiary">Hello</Button>
      <Box sx={{ mb: 5 }} />
      <Box sx={{ h: "150px", width: "150px" }}>
        <Card variant="image">
          <CardMedia component="img" alt="green iguana" image={elijah} />
        </Card>
      </Box>
      <Box sx={{ h: "150px", width: "150px" }}>
        <Card variant="image">
          <CardMedia component="img" alt="green iguana" image={elijah} />
        </Card>
      </Box>
      <Box sx={{ h: "150px", width: "150px" }}>
        <Card variant="image">
          <CardMedia component="img" alt="green iguana" image={elijah} />
        </Card>
      </Box>
      <Box sx={{ h: "150px", width: "150px" }}>
        <Card variant="image">
          <CardMedia component="img" alt="green iguana" image={elijah} />
        </Card>
      </Box>
      <Box sx={{ h: "150px", width: "150px" }}>
        <Card variant="image">
          <CardMedia component="img" alt="green iguana" image={elijah} />
        </Card>
      </Box>
      <Box sx={{ h: "150px", width: "150px" }}>
        <Card variant="image">
          <CardMedia component="img" alt="green iguana" image={elijah} />
        </Card>
      </Box>
    </>
  );
};
