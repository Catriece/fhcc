import { Button } from "@mui/material";
import { FC, ReactNode, MouseEvent } from "react";

interface CustomButtonProps {
  id: string;
  label: string;
  ariaLabel: string;
  func: (e: MouseEvent<HTMLButtonElement>) => void;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  variant:
    | "text"
    | "outlined"
    | "contained"
    | "primary"
    | "secondary"
    | "tertiary"
    | "navigation"
    | "cta";
}

export const CustomButton: FC<CustomButtonProps> = ({
  id,
  label,
  func,
  endIcon,
  startIcon,
  variant,
  ariaLabel,
}) => {
  return (
    <Button
      id={id}
      variant={variant}
      onClick={func}
      endIcon={endIcon}
      startIcon={startIcon}
      aria-label={ariaLabel}
    >
      {label}
    </Button>
  );
};
