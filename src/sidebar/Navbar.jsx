import { useState } from "react";

import style from "./Navbar.module.scss";

/* importing the icons */
import { MdOutlineDashboard } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { RiWindyFill, RiSettings4Line } from "react-icons/ri";
import { AiOutlineCloud } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlOptions } from "react-icons/sl";
import {DiDocker } from "react-icons/di";
import { NavLink } from "react-router-dom";
import {VscAccount} from "react-icons/all.js";

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
          <DiDocker
            className="scale-90 text-c_nav_not_active text-purple-600"
            onClick={() => setNav(!nav)}
          />
        </div>
        
        <div className="flex justify-center">
          {nav ? (
            <>
              <p id="sidebarUserName" className="text-c_nav_txt mt-5 text-xl text-purple-500" >
               P5 Projekt
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

          <NavUrl
            url="/co2"
            icon={<AiOutlineCloud />}
            description="Co2"
          ></NavUrl>


          <NavUrl
              url="/temperature"
              icon={<TbTemperature />}
              description="Temperature"
          ></NavUrl>





          <span className={`${style.categories} ${style.second_category}`}>
            {nav ? "Options" : <SlOptions />}
          </span>

          <NavUrl
              url="/info"
              icon={< VscAccount/>}
              description="Info"
          ></NavUrl>




          <NavUrl
            url="/settings"
            icon={<RiSettings4Line />}
            description="Settings"
          ></NavUrl>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
