import * as Yup from "yup";

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 symbols")
    .max(20, "Password must be at most 20 symbols")
    .required("Password is required"),
});

export const RegisterSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 symbols")
    .max(20, "Password must be at most 20 symbols")
    .required("Password is required"),
});
