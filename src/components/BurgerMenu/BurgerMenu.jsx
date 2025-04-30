import clsx from "clsx";

import css from "./BurgerMenu.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

import UserNav from "../UserNav/UserNav";
import Modal from "../Modal/Modal";

const BurgerMenu = ({
  onCloseClick,
  onLogoutClick,
  isOpen,
  setIsOpen,
  isClosing,
  onTransitionEnd,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onCloseClick={onCloseClick}>
      <div
        className={clsx(css.modal, isClosing && css.isClosing)}
        onTransitionEnd={onTransitionEnd}
      >
        <svg
          className={css.closeIcon}
          width={28}
          height={28}
          onClick={onCloseClick}
        >
          <use href={`${sprite}#icon-x`} />
        </svg>
        <UserNav onClick={onCloseClick} />
        <button className={css.submitBtn} type="submit" onClick={onLogoutClick}>
          Log out
        </button>
      </div>
    </Modal>
  );
};

export default BurgerMenu;
