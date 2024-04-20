import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="w-full bg-[#020617] sticky top-0 z-30">
      <nav className="max-w-7xl flex items-center justify-between  lg:mx-auto p-5 md:px-10 xl:px-0">
        <Link href="/" className="w-fit font-ds flex gap-3 items-center">
          <p className="text-3xl font-bold">
            <span className="text-blue-500">E</span>
            <span className="text-purple-500">m</span>
            <span className="text-green-500">p</span>
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

        <SignedIn>
          <nav className="md:flex md:justify-between md:items-center hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
