export interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  startIcon?: JSX.Element;
  onClick?: () => void;
}
