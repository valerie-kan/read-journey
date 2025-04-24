import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import css from "./AuthForm.module.css";

import { RegisterSchema } from "../../utils/validationSchemas";

import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
    watch,
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  return (
    <AuthForm
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      errors={errors}
      touchedFields={touchedFields}
      watch={watch}
      btnName="Registration"
      linkTo="/login"
      linkName="Already have an account?"
    >
      <div className={css.inputBox}>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <Input
          id="name"
          type="text"
          register={register}
          errors={errors}
          placeholder="Ilona Ratushniak"
        />
      </div>
    </AuthForm>
  );
};

export default RegisterForm;
