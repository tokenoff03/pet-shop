import hs from "./Header.module.css";
import as from "../../App.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <div className={hs.container}>
        <span className={as.headTitle}>Mew</span>
        <nav>
          <ul className={hs.ul}>
            <li>
              <NavLink
                to="/"
                className={(navData) => (navData.isActive ? hs.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(navData) => (navData.isActive ? hs.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={(navData) => (navData.isActive ? hs.active : " ")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/facilities"
                className={(navData) => (navData.isActive ? hs.active : " ")}
              >
                Facilities
              </NavLink>
            </li>
          </ul>
        </nav>

        <NavLink to="/sign-in">
          <button className={hs.headerButton}>Sign in</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
