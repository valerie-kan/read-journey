import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import css from "./AuthForm.module.css";

import { RegisterSchema } from "../../utils/validationSchemas";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

import { registerUser } from "../../redux/auth/operations";

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
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      SuccessToast("Thank you for joining us!");
      reset();
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <AuthForm
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
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
