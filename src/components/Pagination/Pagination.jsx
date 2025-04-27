import css from "./Pagination.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const Pagination = ({ page }) => {
  return (
    <div className={css.paginationWrapper}>
      <div className={css.arrowCont}>
        <svg className={css.arrowIcon} width={20} height={20}>
          <use href={`${sprite}#icon-arrow-left`} />
        </svg>
      </div>
      <div className={css.arrowCont}>
        <svg className={css.arrowIcon} width={20} height={20}>
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
