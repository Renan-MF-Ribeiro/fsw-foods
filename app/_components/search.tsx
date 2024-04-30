import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <Input
        placeholder="Buscar Restaurantes"
        className="rounded-e-none border-none focus-visible:ring-0 focus-visible:ring-offset-0
          focus-visible:border-solid focus-visible:border-red-600 focus-visible:border-2"
      />
      <Button size="icon" className="rounded-s-none">
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};

export default Search;
