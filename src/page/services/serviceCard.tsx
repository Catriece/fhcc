import React, { ReactNode } from "react";
import { Paper, Typography, Icon, Divider, Box } from "@mui/material";

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  sx?: {};
  func?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  sx,
  func,
}) => {
  return (
    <Paper elevation={3} sx={sx} onClick={func}>
      {icon && <Icon sx={{ fontSize: 40, mb: 2, height: "45px" }}>{icon}</Icon>}
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>
      <Box component="span" sx={{ display: "flex", justifyContent: "center" }}>
        {icon && (
          <Divider
            variant="middle"
            sx={{ width: "50%", marginTop: 0.5, marginBottom: 2 }}
          />
        )}
      </Box>
      <Typography variant="body1">{description}</Typography>
    </Paper>
  );
};
