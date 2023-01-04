import React from "react";
import { Button as ButtonMui, ThemeProvider, Typography } from "@mui/material";

import { ButtonProps } from "./types";
import theme from "../../styles/theme";

const Button = ({
  variant = "contained",
  disabled = false,
  size = "medium",
  backgroundColor,
  label,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonMui
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        variant={variant}
        size={size}
        {...props}
      >
        <Typography variant="h7SemiBold">{label}</Typography>
      </ButtonMui>
    </ThemeProvider>
  );
};

export default Button;
