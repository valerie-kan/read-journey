import css from "./Library.module.css";

import Select from "../Select/Select";

const Library = () => {
  return (
    <div className={css.libWrapper}>
      <div className={css.titleWrapper}>
        <h2 className={css.libTtl}>My library</h2>
        <Select />
      </div>
      <div className={css.libContent}>
        <div className={css.imgWrapper}>
          <img
            className={css.image}
            src="../../assets/images/books-desktop@1x.png"
            alt="Books image"
          />
        </div>
        <p className={css.libText}>
          To start training, add{" "}
          <span className={css.span}>some of your books</span> or from the
          recommended ones
        </p>
      </div>
    </div>
  );
};

export default Library;
