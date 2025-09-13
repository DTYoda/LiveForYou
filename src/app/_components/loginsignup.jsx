import Link from "next/link";

export default function LoginSignup() {
  return (
    <div className="flex flex-col w-fill h-full justify-center items-center gap-8">
      <div className="text-4xl p-16">Life For You</div>
      <Link
        href="/signup"
        className="border rounded-2xl w-32 h-12 flex justify-center items-center"
      >
        SIGN UP
      </Link>
      <Link
        href="/login"
        className="border rounded-2xl w-32 h-12 mb-16 flex justify-center items-center"
      >
        LOG IN
      </Link>
    </div>
  );
}
