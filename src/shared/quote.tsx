import { Card, Typography } from "@mui/material";
import { FC } from "react";

interface QuoteProps {
  quote: string;
  page: string;
  num: number;
}

export const QuoteCard: FC<QuoteProps> = ({ quote, page, num }) => {
  return (
    <Card id={`${page}-page-quote-${num}`} variant="quote">
      <Typography variant="quote">{quote}</Typography>
    </Card>
  );
};
