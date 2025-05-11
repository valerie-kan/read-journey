import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useState } from "react";

import css from "./AddReading.module.css";

import { AddReadingSchema } from "../../utils/validationSchemas";
import { ErrorToast } from "../../utils/errorToast";

import { startReading, stopReading } from "../../redux/reading/operations";

import Input from "../Input/Input";
import BookIsDoneModal from "../BookIsDoneModal/BookIsDoneModal";

const AddReading = ({ book, isReading, setIsReading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddReadingSchema) });

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      if (book.totalPages < data.page) {
        throw new Error("The number exceeds book's total pages");
      }

      if (!isReading) {
        await dispatch(startReading({ id: book._id, ...data })).unwrap();
        localStorage.setItem(`isReading_${book._id}`, "true");
        setIsReading(true);
      } else {
        await dispatch(stopReading({ id: book._id, ...data })).unwrap();
        localStorage.setItem(`isReading_${book._id}`, "false");
        setIsReading(false);

        if (book.totalPages === data.page) {
          setIsModalOpen(true);
        }
      }
      reset();
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <>
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
      {isModalOpen && (
        <BookIsDoneModal
          isModalOpen={isModalOpen}
          onCloseClick={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AddReading;
