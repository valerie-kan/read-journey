import { Link } from "react-router";

import css from "./AppDescription.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const AppDescription = () => {
  return (
    <div className={css.sectionWrapper}>
      <h2 className={css.sectionTtl}>Start your workout</h2>
      <ul className={css.sectionList}>
        <li className={css.sectionItem}>
          <div className={css.number}>1</div>
          <p className={css.sectionText}>
            Create a personal library:{" "}
            <span className={css.textSpan}>
              add the books you intend to read to it.
            </span>
          </p>
        </li>
        <li className={css.sectionItem}>
          <div className={css.number}>2</div>
          <p className={css.sectionText}>
            Create your first workout:{" "}
            <span className={css.textSpan}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </li>
      </ul>
      <div className={css.linkCont}>
        <Link className={css.link} to="/library">
          My library
        </Link>
        <Link className={css.linkIcon} to="/library">
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-log-in`} />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AppDescription;
