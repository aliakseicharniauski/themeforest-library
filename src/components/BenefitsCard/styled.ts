import styled, { css } from "styled-components";
import { BenefitsCardProps } from "./types";

export const CardWrapper = styled.div<Pick<BenefitsCardProps, "variant">>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* TODO: add theme */
  background: #ffffff;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;

  ${({ variant = "right-text" }) =>
    ({
      "right-text": css`
        padding: 46px 35px;
        width: 350px;

        button {
          margin-top: 30px;
        }
      `,
      "center-text": css`
        padding: 35px;
        align-items: center;
        text-align: center;
        width: 350px;

        button {
          margin-top: 30px;
        }
      `,
      stretched: css`
        padding: 20px 35px;
        button {
          margin-top: 20px;
        }
      `,
      small: css`
        padding: 25px;
        width: 255px;
        button {
          margin-top: 20px;
        }
      `,
    }[variant])}
`;
