"use client";
import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "./icons/Burger";
import Close from "./icons/Close";
import ThemeToggle from "./ThemeToggle";
import AuthLinkDesktop from "./AuthLinkDesktop";
import AuthLinkMobile from "./AuthLinkMobile";

const AuthLink = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {/* Desktop Links */}
      <AuthLinkDesktop isAuth={isAuth} />
      {/* Mobile Nav */}
      <div className="flex gap-3 sm:hidden relative">
        <ThemeToggle />
        {open ? (
          <button onClick={handleOpenClick}>
            <Close />
          </button>
        ) : (
          <button onClick={handleOpenClick}>
            <BurgerMenu />
          </button>
        )}
        {open && (
          <div className="fixed inset-x-0 top-16 z-50 flex h-[calc(100dvh-4rem)] flex-col items-center justify-center gap-7 bg-gray-100 text-2xl dark:bg-gray-900">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <AuthLinkMobile isAuth={isAuth} setOpen={setOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLink;
