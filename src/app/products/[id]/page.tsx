import { getProductById, getProducts } from "@/src/lib/api/dummyjson";
import BreadCrumb from "@/src/components/shared/product-details/breadcrumb";
import ImageGallery from "@/src/components/shared/product-details/product-image-gallery";
import ProductInfo from "@/src/components/shared/product-details/product-info";
import ProductTabs from "@/src/components/shared/product-details/products-tabs";
import SimilarProducts from "@/src/components/shared/product-details/similar-products";
import DetailsSelector from "@/src/components/shared/product-details/product-details-selector";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const id = (await params).id;

  const product = await getProductById(id);
  const { total } = await getProducts();
  if (id > total) {
    notFound();
  }
  return (
    <div className="mx-6 md:mx-8 xl:mx-20">
      <BreadCrumb product={product} />
      <div className="md:flex md:gap-6 xl:gap-8">
        <div className="flex-1 ">
          <ImageGallery product={product} />
        </div>
        <div className="flex-2 xl:flex-1 lg:flex lg:flex-col lg:justify-between">
          <ProductInfo product={product} />
          <DetailsSelector product={product} />
        </div>
      </div>
      <ProductTabs product={product} />
      <SimilarProducts category={product.category} products={product} />
    </div>
  );
}
