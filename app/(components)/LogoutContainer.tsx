"use client";
import { signOut } from "next-auth/react";

export default function LogoutContainer() {
  const handleLogOut = async () => {};
  return <button onClick={handleLogOut}>로그아웃</button>;
}
