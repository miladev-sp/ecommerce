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
  }[];
};
