import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BlogCard from "../components/BlogCard";
import { Button, Icon } from "../components";
import ImgBlog from "../assets/images/img_blog_1.png";

export default {
  title: "Themeforest/BlogCard",
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
);

const defaultArgs = {
  img: ImgBlog,
  date: "22 June 2022",
  title: "Staffing software: key capabilities and top products",
  description:
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...",
};

export const Big = Template.bind({});
Big.args = {
  ...defaultArgs,
  size: "big",
  link: (
    <Button variant="text" endIcon={<Icon.IconArrowRight />}>
      Read more
    </Button>
  ),
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: "small",
  link: (
    <Button variant="text" endIcon={<Icon.IconArrowRight />}>
      Read more
    </Button>
  ),
};
