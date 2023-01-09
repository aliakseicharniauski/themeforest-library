import { ToggleButtonGroup } from "@mui/material";
import styled, { css } from "styled-components";
import Button from "../Button";
import { PriceCardProps } from "./types";

export const CardWrapper = styled.div<Pick<PriceCardProps, "variant">>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* TODO: add theme */
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;

  ${({ variant = "thin" }) =>
    ({
      thick: css`
        min-height: 558px;
        width: 350px;
        padding: 50px 35px;
      `,
      thin: css`
        min-height: 525px;
        width: 255px;
        padding: 35px 20px;
      `,
    }[variant])}
`;

export const StyledButton = styled(Button)`
  align-self: stretch;
`;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  /* TODO: customize styles */
`;
