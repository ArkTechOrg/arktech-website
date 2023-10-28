import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import NavContent from "../../assets/data/NavContent";

const NavBar = () => {
  return (
    <nav className="navbar disable-select">
      <NavLink to="/">
        <img src={NavContent.navLogo} alt="logo" />
      </NavLink>
      <ul className="navbar__links">
        {
          NavContent.navLinks.map(
            (link, index) => {
              return (
                <li key={index}>
                  <NavLink to={link.link}>{link.text}</NavLink>
                </li>
              );
            }
          )
        }
      </ul>
      <a
        className="navbar__github__icon="
        href={NavContent.github.link}
        target={"_blank"} rel={"noopener noreferrer"}
      >
        <img src={NavContent.github.icon} alt="github" />
      </a>
    </nav>
  );
};

export default NavBar;