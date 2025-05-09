import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import css from "./Filters.module.css";

import { getBooks } from "../../redux/books/operations";

import { ErrorToast } from "../../utils/errorToast";

import Input from "../Input/Input";

const Filters = ({ limit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (filters) => {
    try {
      await dispatch(getBooks({ limit, filters })).unwrap();
      reset();
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className={css.formTtl}>Filters:</p>
      <div className={css.inputsWrapper}>
        <div className={css.inputBox}>
          <label className={css.bookLabel} htmlFor="title">
            Book title:
          </label>
          <Input
            id="title"
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
