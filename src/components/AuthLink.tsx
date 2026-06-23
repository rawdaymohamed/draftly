"use client";
import React, { useState } from "react";
import Link from "next/link";

const AuthLink = () => {
  const [isAuth, setIsAuth] = useState(true);

  return isAuth ? (
    <>
      <Link href="/write">Write</Link>
      <button className="cursor-pointer">Logout</button>
    </>
  ) : (
    <Link href="/login">Login</Link>
  );
};

export default AuthLink;
