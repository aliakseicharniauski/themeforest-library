import styled, { css } from "styled-components";
import { BlogCardProps } from "./types";

export const CardWrapper = styled.div<Pick<BlogCardProps, "variant" | "size">>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* TODO: add theme */
  background: #ffffff;
  border-radius: 6px;

  ${({ size = "big" }) =>
    ({
      big: css`
        max-width: 635px;
      `,
      medium: css`
        max-width: 540px;
        /* TODO: add theme */
        box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
      `,
      small: css`
        max-width: 350px;
      `,
    }[size])}
`;

export const CardImg = styled.div<Pick<BlogCardProps, "img" | "size">>`
  width: 100%;
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 6px;
  height: ${({ size = "big" }) =>
    ({
      big: "285px",
      medium: "300px",
      small: "200px",
    }[size])};
`;
