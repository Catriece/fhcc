import { Card, Typography } from "@mui/material";
import { FC } from "react";
import { CustomButton } from "./button";
import { useNavigate } from "react-router-dom";

interface CTAProps {
  cta: string;
  label: string;
  page: string;
  num: number;
}

export const CTACard: FC<CTAProps> = ({ cta, label, page, num }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Card
      sx={{ display: "flex", flexDirection: "column" }}
      id={`${page}-page-cta-${num}`}
      variant="cta"
    >
      <Typography variant="quote" sx={{ marginBottom: 2 }}>
        {cta}
      </Typography>

      <CustomButton
        ariaLabel="Contact us button"
        id={`${page}-page-cta-button-${num}`}
        label={label}
        func={() => handleNavigation("/contact")}
        variant={"cta"}
      />
    </Card>
  );
};
