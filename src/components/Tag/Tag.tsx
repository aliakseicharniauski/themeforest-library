import React from "react";

export interface TagProps {
  label: string;
}

const Tag = (props: TagProps) => {
  return <button>{props.label}</button>;
};

export default Tag;
