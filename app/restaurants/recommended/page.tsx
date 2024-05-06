import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurants/Restaurant";
import { db } from "@/app/_lib/prisma";

const RecommendedRestaurant = async () => {
  const restaurants = await db.restaurant.findMany({});
  return (
    <div className="p-3 pt-6 space-y-2">
      <Header />

      <h2 className="font-bold text-base">Restaurantes Recomendados</h2>
      <div className="flex w-full flex-col">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            className="min-w-full min-h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedRestaurant;
