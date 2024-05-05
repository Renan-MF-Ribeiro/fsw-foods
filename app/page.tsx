import { ChevronRight } from "lucide-react";
import Banners from "./_components/banners";
import CategoryList from "./_components/category/category-list";
import Header from "./_components/header";
import ProductList from "./_components/products-list";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import RestaurantsList from "./_components/restaurants/restaurants-list";
import { db } from "./_lib/prisma";

const Home = async () => {
  const products = await db.product.findMany({
    where: { discountPercentage: { gt: 0 } },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4">
      <Header />
      <Search />
      <CategoryList />
      <Banners src="/promo_1.png" alt="Até 30% de desconto em pizzas" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-sm m-0">Pedidos recomendados</h2>
          <Button
            variant="ghost"
            className="text-primary p-0 hover:bg-transparent"
          >
            Ver todos
            <ChevronRight size={16} />
          </Button>
        </div>
        <ProductList products={products} />
      </div>
      <Banners src="/promo_2.png" alt="A partir de R$17,90 em lanches" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-sm m-0">
            Restaurantes recomendados
          </h2>
          <Button
            variant="ghost"
            className="text-primary p-0 hover:bg-transparent"
          >
            Ver todos
            <ChevronRight size={16} />
          </Button>
        </div>
        <RestaurantsList />
      </div>
    </div>
  );
};

export default Home;
