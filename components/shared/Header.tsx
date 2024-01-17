import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex  items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <nav className="md:flex-between hidden flex-1 mr-auto">
              <NavItems />
            </nav>
          </SignedIn>

          <SignedIn>
            <div className="mr-12">
              <UserButton afterSignOutUrl="/" />
            </div>
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="  bg-purple-600 px-6 py-2 text-white rounded-full"
              size="lg"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
