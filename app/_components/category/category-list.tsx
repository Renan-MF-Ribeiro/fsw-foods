import Link from "next/link";
import { db } from "../../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="flex overflow-auto flex-nowrap gap-2 py-2 [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <Link key={category.id} href={`categories/${category.id}/products`}>
          <CategoryItem category={category}></CategoryItem>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
