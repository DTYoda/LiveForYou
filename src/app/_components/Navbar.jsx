import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-end  w-[33vw] h-fill">
      <div className="flex lg:flex-col gap-7 h-[100vh]">
        <Link href="">Feed</Link>
        <Link href="">Digest</Link>
        <Link href="">Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
