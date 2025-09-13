import PostContent from "./PostContent.jsx"

function Post({ children, user }) {
    return (<div class="rounded-xl border border-black shadow-lg border-solid p-3 m-5 bg-green-500/25">
        <h2>
            {user}
        </h2>
        <PostContent content="Hello this is a post"></PostContent>
    </div>);
}


export default Post;
