import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { mobileView } from "../styles/constants";
import { FC, ReactNode } from "react";

interface TeamMember {
  image: string;
  alt: string;
  bioHeading: ReactNode;
  biography: string[];
  cta?: ReactNode;
  index: number;
  page?: string;
}

export const TeamMemberBio: FC<TeamMember> = ({
  image,
  alt,
  bioHeading,
  biography,
  cta,
  index,
  page,
}) => {
  const { isMobile } = mobileView();
  return (
    <Box
      role="region"
      aria-labelledby="team-member-bio-heading"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",

          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Card
          aria-labelledby={`${alt}-image`}
          sx={{
            display: isMobile ? "flex" : "",
            flexDirection: isMobile ? "column" : "",
            justifyContent: isMobile ? "center" : "",
            alignItems: isMobile ? "center" : "",
            padding: 2,
            backgroundColor: "transparent",
            maxWidth: "1200px",
          }}
          elevation={0}
        >
          <CardMedia
            loading="lazy"
            component="img"
            image={image}
            alt={alt}
            sx={{
              width: 250,
              height: "auto",
              float: index % 2 === 0 ? "left" : "right",
              backgroundColor: "green",
              marginRight: index % 2 === 0 ? 2 : 0,
              marginBottom: 0.5,
              marginLeft: index % 2 === 0 ? 0 : 2,
              borderRadius: 2,
            }}
          />

          <Box sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                id="team-member-bio-heading"
                variant="h4"
                component="div"
                gutterBottom
              >
                {bioHeading}
              </Typography>
              <Typography id="team-member-biography" variant="body1">
                {page === "home" ? (
                  <Typography
                    component="p"
                    key={index}
                    sx={{
                      textIndent: "40px",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {biography[0]}
                  </Typography>
                ) : (
                  biography.map((paragraph, index) => (
                    <Typography
                      component="p"
                      key={index}
                      sx={{
                        textIndent: "40px",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))
                )}
              </Typography>
            </CardContent>
            {cta && (
              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <CardActions>{cta}</CardActions>
              </Box>
            )}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
