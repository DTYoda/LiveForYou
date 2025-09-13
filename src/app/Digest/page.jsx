import Navbar from "../_components/Navbar.jsx";
import DigestMain from "../_components/DigestMain.tsx";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Digest() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <DigestMain></DigestMain>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
