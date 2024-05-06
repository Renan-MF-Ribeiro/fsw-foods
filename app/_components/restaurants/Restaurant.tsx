import { formatCurrency } from "@/app/_helps/price";
import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
interface RestaurantProps {
  restaurant: Restaurant;
}
const RestaurantItem = ({ restaurant }: RestaurantProps) => {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="min-w-[266px] max-w-[266px] pb-6"
    >
      <div className="w-full h-[136px] relative">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="object-cover rounded-lg"
        />
        <div
          className="absolute top-2 left-2 rounded-full bg-white px-2 py-[2px] flex items-center
            gap-[2px]"
        >
          <Star size={12} className="fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-semibold">5.0</span>
        </div>
        <Button
          size="icon"
          className="absolute top-2 right-2 bg-gray-700 rounded-full w-7 h-7"
        >
          <HeartIcon size={16} className="fill-white" />
        </Button>
      </div>

      <h3 className="font-semibold text-sm">{restaurant.name}</h3>
      <div className="flex gap-3">
        <div className="flex gap-1">
          <BikeIcon className="text-primary" size={14} />
          <span className="text-xs text-muted-foreground block">
            {Number(restaurant.deliveryFee) === 0
              ? "Entrega Grátis"
              : formatCurrency(Number(restaurant.deliveryFee))}
          </span>
        </div>
        <div className="flex gap-1">
          <TimerIcon className="text-primary" size={14} />
          <span className="text-xs text-muted-foreground block">
            {restaurant.deliveryTimeMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
