import { ChevronRight } from "lucide-react";
import Banners from "./_components/banners";
import CategoryList from "./_components/category/category-list";
import Header from "./_components/header";
import ProductList from "./_components/products/products-list";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";

const Home = () => {
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
        <ProductList />
      </div>
      <Banners src="/promo_2.png" alt="A partir de R$17,90 em lanches" />
    </div>
  );
};

export default Home;
