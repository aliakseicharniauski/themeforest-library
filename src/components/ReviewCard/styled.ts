import { Box } from "@mui/material";
import styled from "styled-components";
import { ReviewCardProps } from "./types";

export const CardWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2.2rem;
  /* TODO: add theme */
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
`;

export const CardImg = styled.div<Pick<ReviewCardProps, "img" | "variant">>`
  width: 80px;
  height: 80px;
  position: ${(props) => props.variant === "img-outside" && "fixed"};
  top: ${(props) => props.variant === "img-outside" && "0"};
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
