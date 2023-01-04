import * as React from "react";
import { Stack, ThemeProvider, Typography } from "@mui/material";

import { CardImg, CardWrapper } from "./styled";
import theme from "../../styles/theme";
import { ReviewCardProps } from "./types";

const ReviewCard = ({
  img,
  name,
  role,
  description,
  variant = "img-inside",
  onClick,
}: ReviewCardProps) => {
  const nameRole = (
    <Stack>
      <Typography variant="h6Bold">{name}</Typography>
      <Typography variant="h7SemiBold">{role}</Typography>
    </Stack>
  );

  return (
    <ThemeProvider theme={theme}>
      <CardWrapper mt={variant === "img-outside" ? "25px" : undefined}>
        <Stack gap="1.5rem" direction="row">
          <CardImg variant={variant} img={img} />
          {variant === "img-inside" && nameRole}
        </Stack>
        <Typography variant="p2Regular">“{description}”</Typography>
        {variant === "img-outside" && nameRole}
      </CardWrapper>
    </ThemeProvider>
  );
};

export default ReviewCard;
