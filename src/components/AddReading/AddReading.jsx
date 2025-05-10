import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import css from "./AddReading.module.css";

import { AddReadingSchema } from "../../utils/validationSchemas";
import { ErrorToast } from "../../utils/errorToast";

import { startReading, stopReading } from "../../redux/reading/operations";

import Input from "../Input/Input";

const AddReading = ({ bookId, isReading, setIsReading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddReadingSchema) });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      if (!isReading) {
        await dispatch(startReading({ id: bookId, ...data })).unwrap();
        localStorage.setItem(`isReading_${bookId}`, "true");
        setIsReading(true);
      } else {
        await dispatch(stopReading({ id: bookId, ...data })).unwrap();
        localStorage.setItem(`isReading_${bookId}`, "false");
        setIsReading(false);
      }
      reset();
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <form className={css.readingForm} onSubmit={handleSubmit(onSubmit)}>
      <p className={css.readingTtl}>
        {isReading ? "Stop page:" : "Start page:"}
      </p>
      <div className={css.inputBox}>
        <label className={css.label} htmlFor="page">
          Page number:
        </label>
        <Input
          id="page"
          type="text"
          placeholder="0"
          register={register}
          errors={errors}
        />
      </div>
      <button className={css.readingBtn} type="submit">
        {isReading ? "To stop" : "To start"}
      </button>
    </form>
  );
};

export default AddReading;
