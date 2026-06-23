import Link from "next/link";
import React from "react";

const AuthLinkMobile = ({
  isAuth,
  setOpen,
}: {
  isAuth: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return isAuth ? (
    <>
      <Link href="/write" onClick={() => setOpen(false)}>
        Write
      </Link>
      <span className="cursor-pointer" onClick={() => setOpen(false)}>
        Logout
      </span>
    </>
  ) : (
    <Link href="/login" onClick={() => setOpen(false)}>
      Login
    </Link>
  );
};

export default AuthLinkMobile;
