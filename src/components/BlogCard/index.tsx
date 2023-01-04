import * as React from "react";
import { Stack, ThemeProvider, Typography } from "@mui/material";

import { CardImg, CardWrapper } from "./styled";
import theme from "../../styles/theme";
import { BlogCardProps } from "./types";

const BlogCard = ({
  img,
  date,
  title,
  description,
  variant,
  size = "small",
  link,
  onClick,
}: BlogCardProps) => {
  const contentTextPadding = () => {
    switch (size) {
      case "big":
        return "25px 0 0 0";
      case "medium":
        return "30px 35px";
      case "small":
        return "20px 0 0 0";
    }
  };

  const contentTextGap = () => {
    switch (size) {
      case "big":
        return "15px";
      case "medium":
        return "17px";
      case "small":
        return "12px";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CardWrapper variant={variant} size={size}>
        <Stack>
          <CardImg size={size} img={img} />
          <Stack
            padding={contentTextPadding()}
            gap={contentTextGap()}
            alignItems="flex-start"
          >
            <Typography variant="p3Regular">{date}</Typography>
            <Typography variant="h4Bold">{title}</Typography>
            <Typography variant="p2Regular">{description}</Typography>
            {link}
          </Stack>
        </Stack>
      </CardWrapper>
    </ThemeProvider>
  );
};

export default BlogCard;
