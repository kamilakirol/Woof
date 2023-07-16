import { NavLink } from "react-router-dom";
import PetIcon from "./PetIcon";

const Menu = () => {
  const inactiveLink = "text-primary ";
  const activeLink = " text-active ";

  return (
    <nav className="bg-secondary rounded-tl-md fixed w-full bottom-0">
      <ul className="flex items-center justify-center  gap-16 h-20 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            <PetIcon className="currentColor" height="50" width="50" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="currentColor"
              height="36"
              width="36"
            >
              <rect width="256" height="256" fill="none" />
              <circle
                cx="116"
                cy="116"
                r="84"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <line
                x1="175.4"
                y1="175.4"
                x2="224"
                y2="224"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
