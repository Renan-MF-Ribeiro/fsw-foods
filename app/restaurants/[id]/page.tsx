import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import RestaurantDetails from "./_components/restaurant-details";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    include: {
      categories: {
        select: {
          name: true,
          id: true,
          products: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  if (!restaurant) {
    return notFound();
  }

  //   const complementaryRestaurants = await db.restaurant.findMany({});

  return (
    <>
      <RestaurantImage restaurant={restaurant} />
      <RestaurantDetails
        restaurant={restaurant}
        // complementaryRestaurants={complementaryRestaurants}
      />
    </>
  );
};

export default RestaurantPage;
