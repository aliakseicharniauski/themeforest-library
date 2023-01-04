import styled from "styled-components";
import { BenefitsCardProps } from "./types";

export const CardWrapper = styled.div<Pick<BenefitsCardProps, "variant">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) =>
    props.variant === "center-text" ? "center" : "flex-start"};
  text-align: ${(props) =>
    props.variant === "center-text" ? "center" : "start"};
  padding: ${(props) => {
    switch (props.variant) {
      case "small":
        return "25px";
      case "center-text":
        return "35px";
      case "right-text":
        return "46px 35px";
      case "stretched":
        return "20px 35px";
    }
  }};
  /* TODO: add theme */
  background: #ffffff;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
  width: ${(props) => {
    switch (props.variant) {
      case "small":
        return "255px";
      case "center-text":
      case "right-text":
        return "350px";
    }
  }};
  button {
    margin-top: ${(props) => {
      switch (props.variant) {
        case "small":
        case "stretched":
          return "20px";
        case "center-text":
        case "right-text":
          return "30px";
      }
    }};
  }
`;
