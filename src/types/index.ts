export type LayoutProps = {
  children: React.ReactNode;
};
export type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  discountPercentage: number;
  description: string;
  reviews: {
    rating: number;
    comment: string;
    reviewerName: string;
    date: string;
  }[];
  category: string;
  images: string[];
  brand: string;
  weight: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
};
