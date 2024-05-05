import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!product) {
    return notFound();
  }

  const complementaryProducts = await db.product.findMany({
    where: { categoryId: { equals: product.categoryId } },
    take: 10,
    include: {
      restaurant: true,
    },
  });

  return (
    <div>
      <ProductImage product={product} />
      <ProductDetails
        product={product}
        complementaryProducts={complementaryProducts}
      />
    </div>
  );
};

export default ProductPage;
