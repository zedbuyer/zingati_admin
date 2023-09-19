import logo from "../../../assets/zingati_logo.png";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="h-screen w-80 py-5 px-3">
      <img className="w-36 mb-10" src={logo} />
      <Menu />
    </div>
  );
};

export default Sidebar;
