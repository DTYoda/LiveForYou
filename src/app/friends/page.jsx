import Navbar from "../_components/Navbar.jsx";
import FriendBox from "../_components/FriendBox.jsx";
import { Suspense } from "react";
import FakeText from "../_components/FakeText.jsx";
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const prisma = new PrismaClient();
async function addFriends() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  let data = await prisma.relationships.findMany({ where: { first_id_joined: { endsWith: '' } } });
  console.log(data);
  let components;
  data.map((e) => { });
  for (let i = 0; i < data.length; i++) {

  }
  let str = (<FriendBox userData={{ user: "Hayden", date: (new Date().toLocaleDateString()) }}></FriendBox >);
  return str;
}
export default function Friends() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Suspense fallback={<PlaceholderElements />}>
          {addFriends()}
          <FriendBox userData={{ user: "Hayden", date: (new Date().toLocaleDateString()) }}></FriendBox>
        </Suspense>
      </div>
      <div className="w-32"></div>
    </div >
  );
}

function PlaceholderElements() {

  return ((<div className="rounded-xl border cursor-wait border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
    <h2 className="text-xl justify-between flex">
      {/* <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image> */}
      <FakeText ></FakeText>
      <button className="text-red-800 hover:text-gray-900 transition hover:scale-80"> X </button>
    </h2>
    <div className="rounded-xl border-gray-500/10 border shadow-lg border-solid p-1 m-2 ">     <FakeText></FakeText><FakeText></FakeText></div>
  </div>));
}
