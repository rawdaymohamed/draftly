import Link from "next/link";
import React from "react";

const AuthLinkDesktop = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? (
    <>
      <Link href="/write" className="hidden sm:block">
        Write
      </Link>
      <button className="cursor-pointer hidden sm:block">Logout</button>
    </>
  ) : (
    <Link href="/login" className="">
      Login
    </Link>
  );
};

export default AuthLinkDesktop;
