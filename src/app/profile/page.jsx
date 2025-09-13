import Navbar from "../_components/Navbar.jsx";
import ProfileMain from "../_components/ProfileMain.jsx";

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
