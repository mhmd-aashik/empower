import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <RiMenu3Line className="fill-white text-3xl cursor-pointer " />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-[#020617] md:hidden">
          <Link href="/" className="flex gap-3">
            <p className="text-3xl font-poppins font-bold text-ijlal-500 ">
              <span className="">E</span>
              <span className="text-blue-500">m</span>
              <span className="text-purple-500">p</span>
            </p>
            <Image
              src="/assets/icons/logo.svg"
              width={32}
              height={32}
              alt="Evently logo"
              className="overflow-hidden scale-[1.9]"
            />
            <p className="text-3xl font-poppins font-bold text-ijlal-500 ">
              <span className="text-pink-500">w</span>
              <span className="text-yellow-500">e</span>
              <span className="text-red-500">r</span>
            </p>
          </Link>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
