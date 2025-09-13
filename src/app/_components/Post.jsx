import PostContent from "./PostContent.jsx"
import Image from 'next/image'

function Post({ children, userData }) {
    return (<div className="rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
        <h2 className="text-2xl">
            {/* <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image> */}
            {userData.user}
        </h2>
        <div>Created: {(new Date(userData.date)).toLocaleDateString()}</div>
        <PostContent content="Hello this is a post"></PostContent>
        <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image>

    </div>);
}


export default Post;
