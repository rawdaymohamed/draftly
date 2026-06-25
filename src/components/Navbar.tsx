import React from "react";
import Facebook from "./icons/Facebook";
import X from "./icons/X";
import Instagram from "./icons/Instagram";
import Link from "next/link";
import AuthLink from "./AuthLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-6 lg:px-0">
      {/* Social icons */}
      <div className="hidden md:flex items-center gap-2 flex-1 ">
        <Facebook />
        <X />
        <Instagram />
      </div>
      {/* Logo */}
      <div className="flex-1 text-left md:text-center">
        <Link href="/" className="text-xl md:text-2xl font-light">
          Draftly
        </Link>
      </div>
      {/* Items */}
      <div className="gap-4 md:gap-6 flex items-center flex-1 text-md md:text-lg justify-end relative text-gray-600 dark:text-gray-300">
        <Link
          href="/"
          className="hidden sm:flex hover:text-black hover:dark:text-white"
        >
          Home
        </Link>
        <Link
          className="hidden sm:flex hover:text-black hover:dark:text-white"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          href="/about"
          className="hidden sm:flex hover:text-black hover:dark:text-white"
        >
          About
        </Link>
        <AuthLink />
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
