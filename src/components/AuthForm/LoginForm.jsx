import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthForm from "../AuthForm/AuthForm";
import { ErrorToast } from "../../utils/errorToast";

import { LoginSchema } from "../../utils/validationSchemas";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
    watch,
  } = useForm({ resolver: yupResolver(LoginSchema) });

  return (
    <AuthForm
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      touchedFields={touchedFields}
      watch={watch}
      errors={errors}
      btnName="Log in"
      linkTo="/register"
      linkName="Don't have an account?"
    />
  );
};

export default LoginForm;
