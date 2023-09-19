import { HiHome, HiDatabase, HiPhone, HiUser } from "react-icons/hi";

const Menu = () => {
  return (
    <ul className="menu menu-lg rounded-box">
      <li>
        <a href="">
          <HiUser />
          Your profile
        </a>
      </li>
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
              <a href="">Customers</a>
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
    </ul>
  );
};

export default Menu;
