"use client";
import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantImage = ({ restaurant }: RestaurantDetailsProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();

  return (
    <div className="w-full h-[215px] relative">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        className="absolute left-4 top-8 rounded-full bg-white text-foreground hover:text-white"
        size="icon"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        size="icon"
        className="absolute top-8 right-4 bg-gray-700 rounded-full"
      >
        <HeartIcon className="fill-white" />
      </Button>
    </div>
  );
};

export default RestaurantImage;
