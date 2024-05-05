import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";

interface DiscountPercentageProps {
  product: Pick<Product, "discountPercentage">;
}

const DiscountPercentage = ({ product }: DiscountPercentageProps) => {
  return (
    <div className="rounded-full bg-primary px-2 py-[2px] text-white flex items-center gap-[2px]">
      <ArrowDownIcon size={12} />
      <span className="text-xs font-semibold">
        {product.discountPercentage}%
      </span>
    </div>
  );
};

export default DiscountPercentage;
