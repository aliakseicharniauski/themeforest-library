import * as React from "react";
import {
  Stack,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import { CardWrapper, StyledButton, StyledToggleButtonGroup } from "./styled";
import Icon from "../Icon";
import theme from "../../styles/theme";
import { PriceCardProps } from "./types";
import { ButtonVariant } from "../Button/types";
import { Variant } from "@mui/material/styles/createTypography";
import { useState } from "react";

const PriceCard = ({
  title,
  price,
  description,
  services,
  variant = "thin",
  onClick,
}: PriceCardProps) => {
  /* TODO: add logic */
  const [period, setPeriod] = useState<string>("Mo");
  const handlePeriodChange = (
    _e: React.MouseEvent<HTMLElement>,
    updatedPeriod: string
  ) => {
    setPeriod(updatedPeriod);
  };

  const serviceVariant = {
    thick: "p2Regular",
    thin: "p3Regular",
  }[variant];

  const titleVariant = {
    thick: "h4Bold",
    thin: "h6Bold",
  }[variant];

  const priceVariant = {
    thick: "h2ExtraBold",
    thin: "h4ExtraBold",
  }[variant];

  const buttonVariant = {
    thick: "outlined",
    thin: "contained",
  }[variant];

  return (
    <ThemeProvider theme={theme}>
      <CardWrapper variant={variant}>
        <Typography mb="16px" variant={titleVariant as Variant}>
          {title}
        </Typography>
        <Stack
          width="100%"
          mb="16px"
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant={priceVariant as Variant}>
            {price[0].price}
          </Typography>
          {/* TODO: add logic */}
          <StyledToggleButtonGroup
            exclusive
            onChange={handlePeriodChange}
            value={period}
            size="small"
            color="primary"
          >
            <ToggleButton value="Mo">Mo</ToggleButton>
            <ToggleButton value="Yr">Yr</ToggleButton>
          </StyledToggleButtonGroup>
        </Stack>
        {description && (
          <Typography mb="30px" variant={titleVariant as Variant}>
            {description}
          </Typography>
        )}
        <StyledButton variant={buttonVariant as ButtonVariant}>
          Choose plan
        </StyledButton>
        <Stack mt="30px" gap="16px">
          {services.map((service) => (
            <Stack direction="row">
              <Icon.IconCheckmark />
              <Typography ml="7px" variant={serviceVariant as Variant}>
                {service}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardWrapper>
    </ThemeProvider>
  );
};

export default PriceCard;
