import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/Button";
import Icon from "../components/Icon";

export default {
  title: "Themeforest/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "outlined",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  startIcon: <Icon.IconPlayCircle />,
  variant: "contained",
  children: "Watch the demo",
};
