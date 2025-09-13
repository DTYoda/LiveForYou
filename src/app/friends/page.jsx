// "use client"

import Navbar from "../_components/Navbar.jsx";
import FriendBox from "../_components/FriendBox.jsx";
import { Suspense } from "react";
import FakeText from "../_components/FakeText.jsx";
import FriendContainer from "./FriendContainer.jsx"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function addFriends() {
  // const prisma = new PrismaClient();

  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }
  // console.log(session.user.email);
  // const response = await fetch("/api/friends", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: session.user.email
  //   }),
  // });

  // let friends = response.friends.map((e) => { <FriendBox userData={{ user: e.name, date: e.date }}></FriendBox > });

  // return friends;
  return <div>Hello</div>;
}

export default async function Friends() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }


  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Suspense fallback={<PlaceholderElements />}>
          <FriendContainer userData={{ email: session.user.email }} r></FriendContainer>
          {/* <FriendBox userData={{ user: "Hayden", date: (new Date().toLocaleDateString()) }}></FriendBox> */}
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
