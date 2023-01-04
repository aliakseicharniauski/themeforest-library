import styled from "styled-components";
import { BlogCardProps } from "./types";

export const CardWrapper = styled.div<Pick<BlogCardProps, "variant" | "size">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* TODO: add theme */
  background: #ffffff;
  box-shadow: ${(props) =>
    props.size === "medium" && "0px 4px 12px rgba(12, 68, 204, 0.1)"};
  border-radius: 6px;
  max-width: ${(props) => {
    switch (props.size) {
      case "big":
        return "635px";
      case "medium":
        return "540px";
      case "small":
        return "350px";
    }
  }}; ;
`;

export const CardImg = styled.div<Pick<BlogCardProps, "img" | "size">>`
  width: 100%;
  height: ${(props) => {
    switch (props.size) {
      case "big":
        return "285px";
      case "medium":
        return "300px";
      case "small":
        return "200px";
    }
  }};
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 6px;
`;
