import FakeText from "../_components/FakeText.jsx";
import Navbar from "../_components/Navbar.jsx";
import Post from "../_components/Post.jsx"
import PostContent from "../_components/PostContent.jsx";
import { Suspense } from "react";
const { PrismaClient } = require('../../generated/prisma')

const prisma = new PrismaClient();

async function createPosts(e) {
  let data = await prisma.posts.findMany();

}

export default function Feed() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Suspense fallback={<PlaceholderElements />}>
          {prisma.posts.findMany().then((e) => { console.log(e); createPosts(e); }).catch((e) => (<div>{JSON.stringify(e)}</div>))}
          <Post user="ahhh"></Post>
        </Suspense>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
function PlaceholderElements() {
  return (<div className="rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
    <h2 className="text-2xl">
      {/* <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image> */}
      {<FakeText></FakeText>}
    </h2>
    <PostContent content=""><FakeText></FakeText></PostContent></div>);
}