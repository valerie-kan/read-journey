import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

import css from "./Header.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserNav from "../UserNav/UserNav";
import { clearLibrary } from "../../redux/library/slice";

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isSideClosing, setIsSideClosing] = useState(false);

  const getInitial = () => {
    return name ? name[0].toUpperCase() : "N";
  };

  const onMenuClick = () => {
    setIsSideOpen(true);
  };

  const onCloseClick = () => {
    setIsSideClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isSideClosing) {
      setIsSideOpen(false);
      setIsSideClosing(false);
    }
  };

  const onLogoutClick = async () => {
    try {
      await dispatch(logout()).unwrap();
      dispatch(clearLibrary());
      SuccessToast("Log out is successfull!");
      onCloseClick();
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <div className={css.headerWrapper}>
      <div className={css.logoAndNav}>
        <img className={css.logo} src="var(--logo-desktop)" alt="Logo" />
        <div className={css.userNav}>
          <UserNav />
        </div>
      </div>
      <div className={css.userCorner}>
        <div className={css.userBar}>
          <span className={css.userInitial}>{getInitial()}</span>
          <span className={css.userName}>{name}</span>
        </div>
        <svg
          className={css.burgerIcon}
          width={28}
          height={28}
          onClick={onMenuClick}
        >
          <use href={`${sprite}#icon-menu`} />
        </svg>
        <button className={css.submitBtn} type="submit" onClick={onLogoutClick}>
          Log out
        </button>
      </div>
      {isSideOpen && (
        <BurgerMenu
          onCloseClick={onCloseClick}
          onLogoutClick={onLogoutClick}
          isOpen={isSideOpen}
          setIsOpen={setIsSideOpen}
          isClosing={isSideClosing}
          onTransitionEnd={handleAnimationEnd}
        />
      )}
    </div>
  );
};

export default Header;
