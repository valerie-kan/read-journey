import css from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={css.sectionWrapper}>
      <img
        className={css.booksIcon}
        src="var(--books-desktop)"
        alt="Book icon"
      />
      <p className={css.quote}>
        "Books are <span className={css.span}>windows</span> to the world, and
        reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default Quote;
