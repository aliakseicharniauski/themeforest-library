import React from "react";
import { MemoryRouter } from 'react-router';
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/styles/theme";

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
