"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function LogInForm() {
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
  };
  return (
    <div className="h-full w-full flex flex-col gap-8 items-center rounded-xl hover:scale-[1.20] border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col w-full items-center h-full justify-center gap-16"
      >
        <p className="text-3xl"> Login!</p>
        <input name="email" className="border w-64 h-16" type="Email"></input>
        <input
          name="password"
          className="border w-64 h-16"
          type="Password"
        ></input>
        <button className="border w-64 h-16" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
