import Header from "@/app/_components/header";
import ProductItem from "@/app/_components/product-item";
import { db } from "@/app/_lib/prisma";

const RecommendedProduct = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 20,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div className="p-3 pt-6 space-y-2">
      <Header />

      <h2 className="font-bold text-base">Items Recomendados</h2>
      <div className="flex w-full flex-wrap gap-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            className="h-full grow"
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedProduct;
