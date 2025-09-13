import Navbar from "../_components/Navbar.jsx";
import ProfileMain from "../_components/ProfileMain.jsx";
const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient();
export default function Digest() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <ProfileMain user="Hello"></ProfileMain>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
