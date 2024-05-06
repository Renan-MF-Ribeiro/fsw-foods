"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    router.push(`/restaurants?search=${query}`);
  };

  return (
    <form
      className="flex items-center justify-center"
      onSubmit={handleSearchSubmit}
    >
      <Input
        placeholder="Buscar Restaurantes"
        className="rounded-e-none border-none focus-visible:ring-0 focus-visible:ring-offset-0
          focus-visible:border-solid focus-visible:border-red-600 focus-visible:border-2"
        onChange={handleChange}
        value={query}
      />
      <Button size="icon" className="rounded-s-none" type="submit">
        <SearchIcon size={18} />
      </Button>
    </form>
  );
};

export default Search;
