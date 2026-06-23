import React from "react";
import Facebook from "./icons/Facebook";
import X from "./icons/X";
import Instagram from "./icons/Instagram";
import Link from "next/link";
import AuthLink from "./AuthLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 w-full">
      {/* Social icons */}
      <div className="flex items-center gap-2 flex-1">
        <Facebook />
        <X />
        <Instagram />
      </div>
      {/* Logo */}
      <div className="flex-1 text-center">
        <Link href="/" className="text-2xl font-bold">
          Draftly
        </Link>
      </div>
      {/* Items */}
      <div className="flex gap-6 items-center flex-1 text-lg">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
