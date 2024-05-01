import { db } from "@/app/_lib/prisma";
import ProductItem from "./product";

const ProductList = async () => {
  const products = await db.product.findMany({
    where: { discountPercentage: { gt: 0 } },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div className="flex overflow-x-scroll gap-4 [&::-webkit-scrollbar]:hidden mx-[-16px]">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
