import Navbar from "../_components/Navbar.jsx";
import Post from "../_components/Post.jsx"

export default function Feed() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <Post user="ahhh"></Post>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
