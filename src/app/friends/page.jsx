import Navbar from "../_components/Navbar.jsx";
import FriendBox from "../_components/FriendBox.jsx";

export default function Friends() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <FriendBox user="Hayden"></FriendBox>
      </div>
      <div className="w-32"></div>
    </div >
  );
}
