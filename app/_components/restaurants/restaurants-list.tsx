import { db } from "@/app/_lib/prisma";
import RestaurantItem from "./Restaurant";

const RestaurantsList = async () => {
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="flex overflow-x-scroll gap-4 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantsList;
