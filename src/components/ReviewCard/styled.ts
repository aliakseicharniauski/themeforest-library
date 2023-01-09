import { Box } from "@mui/material";
import styled, { css } from "styled-components";
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
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;

  ${({ variant = "img-inside" }) =>
    ({
      "img-inside": css``,
      "img-outside": css`
        position: fixed;
        top: 0;
      `,
    }[variant])}
`;
