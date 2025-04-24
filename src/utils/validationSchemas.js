import * as Yup from "yup";

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export const LoginSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegexp, "Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 symbols")
    .max(20, "Password must be at most 20 symbols"),
});

export const RegisterSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegexp, "Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 symbols")
    .max(20, "Password must be at most 20 symbols"),
});
