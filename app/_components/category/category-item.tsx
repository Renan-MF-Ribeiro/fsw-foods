import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div
      className="flex gap-3 justify-center items-center w-auto rounded-full bg-white px-4 py-3
        shadow-md min-w-fit"
    >
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />

      <span className="font-semibold text-sm">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
