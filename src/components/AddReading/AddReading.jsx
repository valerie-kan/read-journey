import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./AddReading.module.css";

import { AddReadingSchema } from "../../utils/validationSchemas";

import Input from "../Input/Input";

const AddReading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AddReadingSchema) });

  return (
    <form className={css.startForm} onSubmit={handleSubmit}>
      <p className={css.startTtl}>Start page:</p>
      <div className={css.inputBox}>
        <label className={css.label} htmlFor="startPage">
          Page number:
        </label>
        <Input
          id="startPage"
          type="text"
          placeholder="0"
          register={register}
          errors={errors}
        />
      </div>
      <button className={css.startBtn} type="submit">
        To start
      </button>
    </form>
  );
};

export default AddReading;
