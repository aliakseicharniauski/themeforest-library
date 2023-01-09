import { ButtonProps } from "@mui/material";

export type ButtonVariant = "contained" | "outlined" | "text";

export interface Props extends ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  backgroundColor?: string;
}
