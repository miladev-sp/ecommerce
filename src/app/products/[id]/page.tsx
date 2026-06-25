import { getProductById } from "@/src/lib/api/dummyjson";
import BreadCrumb from "@/src/components/shared/product-details/breadcrumb";
import ImageGallery from "@/src/components/shared/product-details/product-image-gallery";
import ProductInfo from "@/src/components/shared/product-details/product-info";
import ColorSelector from "@/src/components/shared/product-details/color-selector";
import SizeSelector from "@/src/components/shared/product-details/size-selector";
import QuantitySelector from "@/src/components/shared/product-details/quantity-selector";
import ProductTabs from "@/src/components/shared/product-details/products-tabs";
import SimilarProducts from "@/src/components/shared/product-details/similar-products";
import { Suspense } from "react";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const id = (await params).id;

  const product = await getProductById(id);
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className="mx-6 md:mx-8 xl:mx-20">
        <BreadCrumb product={product} />
        <div className="md:flex md:gap-6 xl:gap-8">
          <div className="flex-1 ">
            <ImageGallery product={product} />
          </div>
          <div className="flex-2 xl:flex-1 lg:flex lg:flex-col lg:justify-between">
            <ProductInfo product={product} />
            <ColorSelector />
            <SizeSelector />
            <QuantitySelector />
          </div>
        </div>
        <ProductTabs product={product} />
        <SimilarProducts product={product} />
      </div>
    </Suspense>
  );
}
