import css from "./EmptyLibrary.module.css";

const EmptyLibrary = () => {
  return (
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
  );
};

export default EmptyLibrary;
