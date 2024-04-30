import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4 bg-white p-4">
      <Header />
      <Search />
    </div>
  );
};

export default Home;
