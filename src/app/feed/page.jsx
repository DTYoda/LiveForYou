import Navbar from "../_components/Navbar.jsx";
import Post from "../_components/Post.jsx"
import { PrismaClient } from '@prisma/client'

//const prisma = new PrismaClient();

export default function Feed() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        {/* {prisma.posts.findMany().then((e) => { console.log(e) })} */}
        <Post user="ahhh"></Post>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
