import * as React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import { CardWrapper } from "./styled";
import Icon from "../Icon";
import theme from "../../styles/theme";
import { BenefitsCardProps } from "./types";

const BenefitsCard = ({
  icon,
  title,
  description,
  variant = "small",
  link,
  onClick,
}: BenefitsCardProps) => (
  <ThemeProvider theme={theme}>
    <CardWrapper variant={variant}>
      {icon}
      <Typography
        mt={variant === "small" ? "15px" : "30px"}
        variant={variant === "small" ? "h5Bold" : "h4Bold"}
      >
        {title}
      </Typography>
      <Typography
        mt={variant === "small" ? "10px" : "16px"}
        variant={variant === "small" ? "p3Regular" : "p2Regular"}
      >
        {description}
      </Typography>
      {link}
    </CardWrapper>
  </ThemeProvider>
);

export default BenefitsCard;
