export interface ReviewCardProps {
  img: string;
  name: string;
  role: string;
  description: string;
  variant: "img-outside" | "img-inside";
  onClick?: () => void;
}
