import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Image src="/logo.png" alt="FSW Foods" height={30} width={100} />
      <Button
        size="icon"
        variant="outline"
        className="bg-trasparent border-none"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
