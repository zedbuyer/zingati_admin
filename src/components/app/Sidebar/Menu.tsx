import { Link, useNavigate } from "@tanstack/react-router";
import { useContext } from "react";
import { HiHome, HiDatabase, HiPhone, HiUser, HiLogout } from "react-icons/hi";
import AuthContext from "../../../utils/state/contexts/AuthContext";

const Menu = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: { loggedIn: false } });
    navigate({
      to: "/auth",
      replace: true,
    });
  };
  return (
    <ul className="menu menu-lg rounded-box">
      <li>
        <a href="/">
          <HiHome />
          Dashboard
        </a>
      </li>

      <li>
        <details open>
          <summary>
            <HiDatabase />
            Product Management
          </summary>
          <ul>
            <li>
              <a href="">Supplier Products</a>
            </li>
            <li>
              <a href="">Main Products</a>
            </li>
            <li>
              <a href="">Link Products</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary>
            <HiPhone />
            App Management
          </summary>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <a href="">Notifications</a>
            </li>
            <li>
              <a href="">Promotions</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="">
          <HiUser />
          Your profile
        </a>
      </li>
      <li>
        <button onClick={handleLogout} className="text-red-500 font-bold">
          <HiLogout /> Log out
        </button>
      </li>
    </ul>
  );
};

export default Menu;
