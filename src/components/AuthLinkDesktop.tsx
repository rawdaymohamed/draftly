import Link from "next/link";
import React from "react";

const AuthLinkDesktop = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? (
    <>
      <Link
        href="/write"
        className="hidden sm:block hover:text-black hover:dark:text-white"
      >
        Write
      </Link>
      <button className="cursor-pointer hidden sm:block hover:text-black hover:dark:text-white">
        Logout
      </button>
    </>
  ) : (
    <Link href="/login" className="hover:text-black hover:dark:text-white">
      Login
    </Link>
  );
};

export default AuthLinkDesktop;
