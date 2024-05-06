import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="relative h-[30px] w-[100px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="FSW Foods"
            fill
            className="object-cover"
          />
        </Link>
      </div>
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
