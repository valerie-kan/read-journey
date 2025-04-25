import css from "./Filters.module.css";

import Input from "../Input/Input";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

const Filters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <p className={css.formTtl}>Filters:</p>
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
      </div>
      <button className={css.submitBtn} type="submit">
        To apply
      </button>
    </form>
  );
};

export default Filters;
