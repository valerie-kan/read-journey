import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import AuthForm from "../AuthForm/AuthForm";
import { ErrorToast } from "../../utils/errorToast";

import { LoginSchema } from "../../utils/validationSchemas";
import { login } from "../../redux/auth/operations";
import { SuccessToast } from "../../utils/successToast";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
    watch,
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      SuccessToast("You are successfully logged in");
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
