import Navbar from "../_components/Navbar.jsx";
import ProfileMain from "../_components/ProfileMain.jsx";
import { Suspense } from "react";
import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function Profile() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Suspense fallback={<ProfileSuspense />}>
          {/* {(prisma.users.findMany()).then((e) => { console.log(e); })} */}
          <ProfileMain userData={{ "email": session.user.email, "name": session.user.name }}></ProfileMain>
        </Suspense>
      </div>
      <div className="w-32"></div>
    </div >
  );
}

function ProfileSuspense() {
  return (<div className="bg-gray-400"></div>);
}