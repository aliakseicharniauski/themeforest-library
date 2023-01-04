export interface BenefitsCardProps {
    icon: JSX.Element;
    link?: JSX.Element;
    title: string;
    description: string;
    variant: "right-text" | "center-text" | "stretched" | "small";
    onClick?: () => void;
  }
  