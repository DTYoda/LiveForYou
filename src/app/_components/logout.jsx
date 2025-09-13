"use client";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div className="group w-fit">
      <button onClick={signOut}>Logout</button>{" "}
      <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
    </div>
  );
}
