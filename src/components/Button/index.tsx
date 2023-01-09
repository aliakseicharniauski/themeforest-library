import React from "react";
import { Button as ButtonMui, ThemeProvider, Typography } from "@mui/material";

import { Props } from "./types";
import theme from "../../styles/theme";

const Button = ({
  variant = "contained",
  size = "medium",
  children,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonMui
        variant={variant}
        size={size}
        {...props}
      >
        <Typography variant="h7SemiBold">{children}</Typography>
      </ButtonMui>
    </ThemeProvider>
  );
};

export default Button;
