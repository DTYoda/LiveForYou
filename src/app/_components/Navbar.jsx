import Link from "next/link";
import { getServerSession } from "next-auth";
import Logout from "./logout.jsx";

async function logout() {}

async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="flex justify-end  w-32 h-fill">
      <div className="flex fixed md:relative md:flex-col w-full gap-7 h-[100vh] text-2xl pt-8">
        <div className="group w-fit">
          <Link href="/feed">Feed</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/digest">Digest</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/friends">Friends</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/profile">Profile</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/settings">Settings</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        {!!session && <Logout></Logout>}
      </div>
    </div>
  );
}

export default Navbar;
