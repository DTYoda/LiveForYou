import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-end  w-32 h-fill">
      <div className="flex fixed md:relative md:flex-col w-full gap-7 h-[100vh] text-2xl pt-8">
        <div className="group w-fit">
          <Link href="">Feed</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/digest">Digest</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/digest">Friends</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/digest">Profile</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
        <div className="group w-fit">
          <Link href="/settings">Settings</Link>{" "}
          <span className="block max-w-0 group-hover:max-w-full w-full transition-all duration-500 h-0.5 bg-white"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
