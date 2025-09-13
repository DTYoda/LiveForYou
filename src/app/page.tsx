import { redirect } from "next/navigation";
import Navbar from "./_components/Navbar.jsx";
import LoginSignup from "./_components/loginsignup.jsx";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    redirect("/feed");
  }
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full border rounded-2xl">
        <LoginSignup></LoginSignup>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
