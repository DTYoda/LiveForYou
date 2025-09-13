import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-end  w-32 h-fill">
      <div className="flex fixed md:relative md:flex-col w-full gap-7 h-[100vh] text-2xl pt-8">
        <Link href="">Feed</Link>
        <Link href="">Digest</Link>
        <Link href="">Friends</Link>
        <Link href="">Profile</Link>
        <Link href="">Settings</Link>
      </div>
    </div>
  );
}

export default Navbar;
