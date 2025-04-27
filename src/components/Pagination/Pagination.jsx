import clsx from "clsx";

import css from "./Pagination.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const Pagination = ({ page, setPage, totalPages }) => {
  const handleLeftClick = () => {
    if (page > 1) {
      return setPage(page - 1);
    }
  };

  const handleRightClick = () => {
    if (page < totalPages) {
      return setPage(page + 1);
    }
  };

  return (
    <div className={css.paginationWrapper}>
      <div
        className={clsx(css.arrowCont, page === 1 && css.disabled)}
        onClick={handleLeftClick}
      >
        <svg className={css.arrowIcon} width={20} height={20}>
          <use href={`${sprite}#icon-arrow-left`} />
        </svg>
      </div>
      <div
        className={clsx(css.arrowCont, page === totalPages && css.disabled)}
        onClick={handleRightClick}
      >
        <svg className={css.arrowIcon} width={20} height={20}>
          <use href={`${sprite}#icon-arrow-right`} />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
