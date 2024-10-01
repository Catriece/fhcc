import { Card, Typography } from "@mui/material";
import { FC, MouseEvent } from "react";
import { CustomButton } from "./button";

interface CTAProps {
  cta: string;
  label: string;
  page: string;
  num: number;
}

export const CTACard: FC<CTAProps> = ({ cta, label, page, num }) => {
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
        id={`${page}-page-cta-button-${num}`}
        label={label}
        func={() => console.log("Go to contact us")}
        variant={"cta"}
      />
    </Card>
  );
};
