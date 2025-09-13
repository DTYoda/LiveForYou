import { FormEvent } from "react";
import Navbar from "../_components/Navbar";
import SignupForm from "../_components/Signupform";

export default async function Signup() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full  border">
        <SignupForm></SignupForm>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
