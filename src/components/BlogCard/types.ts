export interface BlogCardProps {
  img: string;
  link?: JSX.Element;
  tags?: JSX.Element[];
  date: string;
  title: string;
  description: string;
  variant?: "right-text";
  size: "big" | "medium" | "small";
  onClick?: () => void;
}
