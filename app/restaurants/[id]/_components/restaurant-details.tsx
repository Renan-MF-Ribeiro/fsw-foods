// import ProductList from "@/app/_components/products-list";
import DeliveryInfo from "@/app/_components/deliveryInfo";
import ProductList from "@/app/_components/products-list";
import { Prisma } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface RestaurantDetailsProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      categories: {
        select: {
          name: true;
          id: true;
          products: {
            take: 10;
            include: {
              restaurant: {
                select: {
                  name: true;
                };
              };
            };
          };
        };
      };
      products: {
        take: 10;
        include: {
          restaurant: {
            select: {
              name: true;
            };
          };
        };
      };
    };
  }>;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  return (
    <div className="p-5 rounded-t-xl z-10 mt-[-20px] relative bg-white shadow-md shadow-black">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[0.375rem]">
          <div className="w-12 h-12 relative">
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <span className="text-lg font-semibold">{restaurant.name}</span>
        </div>
        <div className="flex items-center gap-[3px] rounded-full bg-foreground text-white px-2 py-[2px]">
          <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold">5.0</span>
        </div>
      </div>
      <DeliveryInfo restaurant={restaurant} />
      <div className="mt-6 flex overflow-scroll items-center gap-4 [&::-webkit-scrollbar]:hidden">
        {restaurant.categories.map((category) => (
          <span
            className="py-2 px-5 bg-[#f4f4f4] rounded-full text-muted-foreground flex justify-center
              text-xs items-center"
            key={category.id}
          >
            {category.name}
          </span>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        <h2 className="font-semibold">Mais pedidos</h2>
        <ProductList products={restaurant.products} />
      </div>
      {restaurant.categories.map((category) => (
        <div className="mt-6 space-y-3" key={category.id}>
          <h2 className="font-semibold">{category.name}</h2>
          <ProductList products={category.products} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
