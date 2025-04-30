import { useForm } from "react-hook-form";
import clsx from "clsx";

import css from "../Filters/Filters.module.css";

import Input from "../Input/Input";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <p className={css.formTtl}>Create your library:</p>
      <div className={css.inputsWrapper}>
        <div className={css.inputBox}>
          <label className={css.bookLabel} htmlFor="book">
            Book title:
          </label>
          <Input
            id="book"
            type="text"
            register={register}
            errors={errors}
            placeholder="Enter text"
          />
        </div>
        <div className={css.inputBox}>
          <label className={css.authorLabel} htmlFor="author">
            The author:
          </label>
          <Input
            id="author"
            type="text"
            register={register}
            errors={errors}
            placeholder="Enter text"
          />
        </div>
        <div className={css.inputBox}>
          <label className={css.pagesLabel} htmlFor="pages">
            Number of pages:
          </label>
          <Input
            id="pages"
            type="text"
            register={register}
            errors={errors}
            placeholder="0"
          />
        </div>
      </div>
      <button className={clsx(css.submitBtn, css.addBookBtn)} type="submit">
        Add book
      </button>
    </form>
  );
};

export default AddBook;
