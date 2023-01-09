interface Price {
  price: string;
  period?: string;
}

export interface PriceCardProps {
  title: string;
  price: [Price, Price?];
  description?: string;
  services: string[];
  variant?: "thick" | "thin";
  onClick?: () => void;
}
