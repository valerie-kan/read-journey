import { NavLink } from "react-router";
import clsx from "clsx";

import css from "./UserNav.module.css";

const UserNav = ({ onClick }) => {
  const linkCls = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.userNav}>
      <NavLink className={linkCls} to="/recommended" onClick={onClick}>
        Home
      </NavLink>
      <NavLink
        className={linkCls}
        to="/library"
        data-set="lib"
        onClick={onClick}
      >
        My library
      </NavLink>
    </div>
  );
};

export default UserNav;
