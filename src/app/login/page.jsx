import Navbar from "../_components/Navbar.jsx";
import LoginForm from "../_components/LoginForm.jsx";

export default function Login() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <LoginForm></LoginForm>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
