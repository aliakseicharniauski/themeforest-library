import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReviewCard from "../components/ReviewCard";
import ImgPerson from "../assets/images/img_person.png";

export default {
  title: "Themeforest/ReviewCard",
  component: ReviewCard,
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
);

export const ImgInside = Template.bind({});
ImgInside.args = {
  img: ImgPerson,
  name: "Alex Bern",
  role: "CEO by PixelPerfect",
  description:
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.",
  variant: "img-inside",
};

export const ImgOutside = Template.bind({});
ImgOutside.args = {
  ...ImgInside.args,
  variant: "img-outside",
};
