import { NavLink } from "react-router";
import clsx from "clsx";

import css from "./UserNav.module.css";

const UserNav = () => {
  const linkCls = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.userNav}>
      <NavLink className={linkCls} to="/recomended">
        Home
      </NavLink>
      <NavLink className={linkCls} to="/library">
        My library
      </NavLink>
    </div>
  );
};

export default UserNav;
