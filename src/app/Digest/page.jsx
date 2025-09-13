import Navbar from "../_components/Navbar.jsx";
import DigestMain from "../_components/DigestMain.tsx";

export default function Digest() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <DigestMain></DigestMain>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
