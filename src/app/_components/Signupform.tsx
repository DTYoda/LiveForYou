"use client";

import { FormEvent } from "react";

export default function SignupForm() {
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
        username: formData.get("username"),
      }),
    });
  };

  return (
    <form
      onSubmit={handlesubmit}
      className="flex flex-col w-full items-center h-full justify-center gap-16"
    >
      <p className="text-3xl"> Register!</p>
      <input name="name" className="border w-64 h-16" type="Full Name"></input>
      <input
        name="username"
        className="border w-64 h-16"
        type="Username"
      ></input>
      <input name="email" className="border w-64 h-16" type="Email"></input>
      <input
        name="password"
        className="border w-64 h-16"
        type="Password"
      ></input>
      <button className="border w-64 h-16" type="submit">
        Sign Up
      </button>
    </form>
  );
}
