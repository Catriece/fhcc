import { Box, Card, CardMedia, Typography } from "@mui/material";

import { mobileView } from "../styles/constants";
import { FC, ReactNode } from "react";

interface TeamMember {
  image: string;
  alt: string;
  bioHeading: ReactNode;
  biography: string;
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
          flexDirection: isMobile
            ? "column"
            : index % 2 === 0
            ? "row"
            : "row-reverse",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Card
          variant="image"
          aria-labelledby={`${alt}-image`}
          sx={{
            backgroundColor: "red",
            width: isMobile ? "300px" : "35%",
            maxWidth: "350px",
            borderRadius: 2,
            height: page ? "300px" : "100%",
          }}
        >
          <CardMedia
            loading="lazy"
            height="100%"
            component="img"
            image={image}
            alt={alt}
          />
        </Card>
        <Box
          id="text"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "90%" : "65%",
            marginLeft: isMobile ? 0 : 3,
          }}
        >
          {isMobile && <Box aria-hidden="true" sx={{ marginTop: 3 }} />}
          <Typography
            id="team-member-bio-heading"
            variant="h3"
            sx={{
              textAlign: isMobile ? "center" : "left",
              marginBottom: 2,
            }}
          >
            {bioHeading}
          </Typography>

          <Box aria-hidden="true" sx={{ marginTop: isMobile ? 2 : 3 }} />
          <Typography
            variant={"body1"}
            sx={{
              textAlign: isMobile ? "center" : "left",
              maxWidth: "800px",
              textIndent: isMobile ? 0 : "40px",
              lineHeight: "1.52rem",
            }}
          >
            {biography}
          </Typography>
          {cta && (
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              {cta}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
