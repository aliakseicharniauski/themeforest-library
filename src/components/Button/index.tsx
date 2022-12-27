import React from "react";
import { Button as ButtonMui, Typography } from "@mui/material";

import { ButtonProps } from "./types";

const Button = ({
  variant = "contained",
  disabled = false,
  size = "medium",
  backgroundColor,
  label,
  startIcon,
  ...props
}: ButtonProps) => {
  return (
    <ButtonMui
      startIcon={startIcon}
      disabled={disabled}
      variant={variant}
      size={size}
      {...props}
    >
      {label}
      {/* <Typography variant="h7SemiBold">{label}</Typography> */}
    </ButtonMui>
  );
};

export default Button;
