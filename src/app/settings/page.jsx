import Navbar from "../_components/Navbar.jsx";
import SettingsForm from "../_components/SettingsForm.jsx";

export default function Digest() {
  return (
    <div className="flex justify-center flex-col md:flex-row">
      <Navbar></Navbar>
      <div className="max-w-2xl w-full">
        <SettingsForm></SettingsForm>
      </div>
      <div className="w-32"></div>
    </div>
  );
}
