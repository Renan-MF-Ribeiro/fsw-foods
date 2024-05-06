import Header from "@/app/_components/header";
import ProductItem from "@/app/_components/product-item";
import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";

interface CategoriesPageProps {
  params: {
    id: string;
  };
}
const CategoriesPage = async ({ params: { id } }: CategoriesPageProps) => {
  const category = await db.category.findUnique({
    where: {
      id,
    },
    include: {
      products: {
        include: {
          restaurant: {
            select: { name: true },
          },
        },
      },
    },
  });

  if (!category) {
    return notFound();
  }
  return (
    <div className="p-3 pt-6 space-y-2">
      <Header />

      <h2 className="font-bold text-base">{category?.name}</h2>
      <div className="flex w-full flex-wrap gap-4">
        {category?.products.map((product) => (
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

export default CategoriesPage;
