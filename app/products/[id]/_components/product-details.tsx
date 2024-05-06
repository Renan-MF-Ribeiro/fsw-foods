"use client";
import DeliveryInfo from "@/app/_components/deliveryInfo";
import DiscountPercentage from "@/app/_components/discount-bagde";
import ProductList from "@/app/_components/products-list";
import { Button } from "@/app/_components/ui/button";
import { formatCurrency, calculateProductTotalPrice } from "@/app/_helps/price";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
      category: {
        select: {
          name: true;
        };
      };
    };
  }>;
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantify, setQuantify] = useState(1);

  const handleIncreaseQuantifyClick = () =>
    setQuantify((current) => current + 1);
  const handleDecreaseQuantifyClick = () =>
    setQuantify((current) => {
      if (current === 1) return 1;

      return current - 1;
    });

  return (
    <div className="p-5 rounded-t-xl z-10 mt-[-20px] relative bg-white shadow-md shadow-black">
      <div className="flex items-center gap-[0.375rem]">
        <div className="w-6 h-6 relative">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
      <h1 className=" text-xl font-semibold mt-1 mb-3">{product.name}</h1>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              {formatCurrency(calculateProductTotalPrice(product))}
            </h2>
            {product.discountPercentage && (
              <DiscountPercentage product={product} />
            )}
          </div>
          {product.discountPercentage && (
            <span className="text-muted-foreground text-sm">
              De: {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <div className="flex gap-3 items-center">
          <Button
            variant="ghost"
            className="border border-solid border-muted-foreground w-7 h-7 p-0"
            onClick={handleDecreaseQuantifyClick}
          >
            <ChevronLeftIcon className="w-4 h-4 " />
          </Button>
          <span className="w-3 text-xs">{quantify}</span>
          <Button className="w-7 h-7 p-0" onClick={handleIncreaseQuantifyClick}>
            <ChevronRightIcon className="w-4 h-4 " />
          </Button>
        </div>
      </div>
      <DeliveryInfo restaurant={product.restaurant} />
      <div className="mt-6 space-y-3">
        <h3 className="font-semibold">Sobre</h3>
        <p className="text-muted-foreground text-sm">{product.description}</p>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="font-semibold">{product.category.name}</h3>
        <ProductList products={complementaryProducts} />
      </div>
      <div className="mt-6 px-5">
        <Button className="w-full font-semibold">Adicionar à sacola</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
