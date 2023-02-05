import { useState } from "react";

import style from "./Navbar.module.scss";

/* importing the icons */
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlOptions } from "react-icons/sl";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const NavUrl = ({ url, icon, description }) => {
    const checkWindowSize = () => {
      if (window.innerWidth < 1024) setNav(!nav);
    };
    return (
      <li className={style.li_navlink}>
        <NavLink
          to={`${url}`}
          onClick={() => checkWindowSize()}
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          {icon}
          <span className={style.description}>{description}</span>
        </NavLink>
      </li>
    );
  };

  return (
    <div
      className={`${style.navbar_container} ${
        nav ? style.navbar_mobile_active : undefined
      }`}
    >
      <nav className={nav ? undefined : style.nav_small}>
        <div className={style.logo}>
          <CgProfile
            className="scale-90 text-c_nav_not_active"
            onClick={() => setNav(!nav)}
          />
        </div>
        <div className="flex justify-center">
          {nav ? (
            <>
              <p id="sidebarUserName" className="text-c_nav_txt mt-5 text-xl">
                No Name
              </p>
            </>
          ) : undefined}
        </div>

        <ul className={style.menu_container}>
          <span className={`${style.categories}`}>
            {nav ? "Menu" : undefined}
          </span>

          <NavUrl
            url="/dashboard"
            icon={<MdOutlineDashboard />}
            description="Dashboard"
          ></NavUrl>

          <span className={`${style.categories} ${style.second_category}`}>
            {nav ? "Options" : <SlOptions />}
          </span>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
