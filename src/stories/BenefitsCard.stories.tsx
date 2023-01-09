import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BenefitsCard from "../components/BenefitsCard";
import { Button, Icon } from "../components";

export default {
  title: "Themeforest/BenefitsCard",
  component: BenefitsCard,
} as ComponentMeta<typeof BenefitsCard>;

const Template: ComponentStory<typeof BenefitsCard> = (args) => (
  <BenefitsCard {...args} />
);

const defaultArgs = {
  title: "Machine learning",
  description:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  icon: <Icon.IconBrainCircuit />,
};

export const RightText = Template.bind({});
RightText.args = {
  ...defaultArgs,
  variant: "right-text",
};

export const CenterText = Template.bind({});
CenterText.args = {
  ...defaultArgs,
  variant: "center-text",
  link: (
    <Button variant="text" endIcon={<Icon.IconArrowRight />}>
      Read more
    </Button>
  ),
};

export const Stretched = Template.bind({});
Stretched.args = {
  ...defaultArgs,
  variant: "stretched",
  link: (
    <Button variant="text" endIcon={<Icon.IconArrowRight />}>
      Read more
    </Button>
  ),
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  variant: "small",
};
