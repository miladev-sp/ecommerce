import { getProducts } from "@/src/lib/api/dummyjson";
import TestimonialsClient from "@/src/components/ui/testimonials-scroll";

export default async function Testimonials() {
  const products = await getProducts(12);

  return <TestimonialsClient products={products.products} />;
}
