import Navbar from "../_components/Navbar.jsx";
import FriendBox from "../_components/FriendBox.jsx";
import { Suspense } from "react";
const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient();
export default function Friends() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Suspense fallback={<PlaceholderElements />}>
          {(prisma.relationships.findMany()).then((e) => { console.log(e); })}
          <FriendBox user="Hayden" ></FriendBox>
        </Suspense>
      </div>
      <div className="w-32"></div>
    </div >
  );
}

function PlaceholderElements() {
  return ((<div className="rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
    <h2 className="text-xl">
      {/* <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image> */}
      <button className="text-red-500 float-right hover:text-red-700/10 transition hover:scale-130"> X </button>
    </h2>
    <div className="rounded-xl border-gray-500/10 border shadow-lg border-solid p-1 m-2 ">              { }</div>
  </div>));
}