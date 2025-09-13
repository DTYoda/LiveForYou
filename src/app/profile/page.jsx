import Navbar from "../_components/Navbar.jsx";
import ProfileMain from "../_components/ProfileMain.jsx";
import { Suspense } from "react";

const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient();
export default function Digest() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Suspense fallback={<ProfileSuspense />}>
          {/* {(prisma.users.findMany()).then((e) => { console.log(e); })} */}
          <ProfileMain user=""></ProfileMain>
        </Suspense>
      </div>
      <div className="w-32"></div>
    </div>
  );
}

function ProfileSuspense() {
  return (<div className="bg-gray-400"></div>);
}