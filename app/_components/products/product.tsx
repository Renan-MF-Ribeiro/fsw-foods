import { calculateProductTotalPrice, formatCurrency } from "@/app/_helps/price";
import { Prisma } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include?: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="space-y-2 w-[150px] min-w-[150px]">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage && (
          <div
            className="absolute top-2 left-2 rounded-full bg-primary px-2 py-[2px] text-white flex
              items-center gap-[2px]"
          >
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>
      <div className="">
        <h2 className="text-sm truncate">{product.name}</h2>
        <div className="flex gap-1 justify-start items-center">
          <h3 className="font-semibold">
            {formatCurrency(Number(calculateProductTotalPrice(product)))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="line-through text-[#7e8392] text-xs">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="text-xs text-muted-foreground block">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
