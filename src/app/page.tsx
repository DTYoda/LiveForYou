import Navbar from "./_components/Navbar.jsx";
import LoginSignup from "./_components/loginsignup.jsx";

export default function Home() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full border rounded-2xl">
        <LoginSignup></LoginSignup>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
