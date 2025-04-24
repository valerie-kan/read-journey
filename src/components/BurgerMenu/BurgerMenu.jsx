import css from "./BurgerMenu.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import UserNav from "../UserNav/UserNav";

const BurgerMenu = ({ onCloseClick, onLogoutClick }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <svg
          className={css.closeIcon}
          width={28}
          height={28}
          onClick={onCloseClick}
        >
          <use href={`${sprite}#icon-x`} />
        </svg>
        <UserNav />
        <button className={css.submitBtn} type="submit" onClick={onLogoutClick}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
