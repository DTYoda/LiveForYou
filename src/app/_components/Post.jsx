import PostContent from "./PostContent.jsx"
import Image from 'next/image'

function Post({ children, user }) {
    return (<div class="rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
        <h2>
            {/* <Image alt="profile picture" width="25" height="25" class="inline" src=""></Image> */}
            {user}
        </h2>
        <PostContent content="Hello this is a post"></PostContent>
    </div>);
}


export default Post;
