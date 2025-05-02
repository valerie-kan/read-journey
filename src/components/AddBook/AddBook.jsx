import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import clsx from "clsx";

import css from "../Filters/Filters.module.css";

import { AddBookSchema } from "../../utils/validationSchemas";
import { ErrorToast } from "../../utils/errorToast";

import { addBook } from "../../redux/library/operations";

import Input from "../Input/Input";
import GoodJobModal from "../GoodJobModal/GoodJobModal";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddBookSchema) });

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      await dispatch(addBook(data)).unwrap();
      reset();
      setIsModalOpen(true);
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={css.formTtl}>Create your library:</p>
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
          <div className={css.inputBox}>
            <label className={css.pagesLabel} htmlFor="totalPages">
              Number of pages:
            </label>
            <Input
              id="totalPages"
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
      {isModalOpen && (
        <GoodJobModal
          isOpen={isModalOpen}
          onCloseClick={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default AddBook;
