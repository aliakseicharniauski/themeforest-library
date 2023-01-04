import * as React from "react";
import { Stack, ThemeProvider, Typography } from "@mui/material";

import { CardWrapper, StyledButton } from "./styled";
import Icon from "../Icon";
import theme from "../../styles/theme";

const PriceCard: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CardWrapper>
      <Typography mb="1rem" variant="h6Bold">
        Lite
      </Typography>
      <Stack mb="1.8rem" direction="row">
        <Typography>$99</Typography>
      </Stack>
      <StyledButton label="Choose plan" />
      <Stack mt="1.8rem" gap="1rem">
        <Stack direction="row">
          <Icon.IconCheckmark />
          <Typography ml="0.5rem" variant="p3Regular">
            For small teams – 15 users
          </Typography>
        </Stack>
        <Stack direction="row">
          <Icon.IconCheckmark />
          <Typography ml="0.5rem" variant="p3Regular">
            Individual support
          </Typography>
        </Stack>
        <Stack direction="row">
          <Icon.IconCheckmark />
          <Typography ml="0.5rem" variant="p3Regular">
            Individual support
          </Typography>
        </Stack>
        <Stack direction="row">
          <Icon.IconCheckmark />
          <Typography ml="0.5rem" variant="p3Regular">
            Individual support
          </Typography>
        </Stack>
        <Stack direction="row">
          <Icon.IconCheckmark />
          <Typography ml="0.5rem" variant="p3Regular">
            Individual support
          </Typography>
        </Stack>
        <Stack direction="row">
          <Icon.IconCheckmark />
          <Typography ml="0.5rem" variant="p3Regular">
            Individual support
          </Typography>
        </Stack>
      </Stack>
    </CardWrapper>
  </ThemeProvider>
);

export default PriceCard;
