import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PriceCard from "../components/PriceCard";

export default {
  title: "Themeforest/PriceCard",
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>;

const Template: ComponentStory<typeof PriceCard> = (args) => (
  <PriceCard {...args} />
);

export const Thick = Template.bind({});
Thick.args = {
  title: "Starter",
  price: [{ price: "$20" }],
  description: "Trial plan for starters",
  variant: "thick",
  services: [
    "For small teams – 5 users",
    "Community support",
    "Individual data – 20GB",
  ],
};

export const Thin = Template.bind({});
Thin.args = {
  title: "Free trial",
  price: [{ price: "$99.9" }],
  variant: "thin",
  services: [
    "For small teams – 5 users",
    "Community support",
    "Individual data – 20GB",
  ],
};
