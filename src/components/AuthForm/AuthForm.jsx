// import { useState } from "react";
import { Link } from "react-router";
import css from "./AuthForm.module.css";

import Input from "../Input/Input";
// import clsx from "clsx";

// import sprite from "../../assets/icons/symbol-defs.svg";

const AuthForm = ({
  register,
  errors,
  children,
  btnName,
  linkTo,
  linkName,
}) => {
  //   const [showPassword, setShowPassword] = useState(false);

  //   const togglePasswordVisibility = () => {
  //     setShowPassword((prev) => !prev);
  //   };
  return (
    <div className={css.formWrapper}>
      <img
        className={css.logo}
        src="../../assets/images/logo-desktop.png"
        alt="Logo"
      />
      <h1 className={css.formTitle}>
        Expand your mind, reading <span className={css.bookSpan}>a book</span>
      </h1>
      <div className={css.inputWrapper}>
        {children}
        <div className={css.inputBox}>
          <label className={css.label} htmlFor="email">
            Mail:
          </label>
          <Input
            id="email"
            type="email"
            register={register}
            errors={errors}
            placeholder="Your@email.com"
          />
          {/* <input
            className={css.input}
            id="email"
            type="email"
            {...register("email")}
            placeholder="Your@email.com"
          />
          {errors.email && (
            <p className={css.errMessage}>{errors.email.message}</p>
          )} */}
        </div>
        <div className={css.inputBox}>
          <label className={css.label} htmlFor="password">
            Password:
          </label>
          <Input
            id="password"
            type="password"
            register={register}
            errors={errors}
            placeholder="Yourpasswordhere"
          />
          {/* <input
            className={clsx(css.input, css.pwdInput)}
            id="password"
            type="password"
            {...register("password")}
            placeholder="Yourpasswordhere"
          />
          <svg className={css.iconEye} onClick={togglePasswordVisibility}>
            <use
              href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
            />
          </svg>
          {errors.password && (
            <p className={css.errMessage}>{errors.password.message}</p>
          )} */}
        </div>
      </div>
      <div className={css.btnWrapper}>
        <button className={css.submitBtn} type="submit">
          {btnName}
        </button>
        <Link className={css.link} to={linkTo}>
          {linkName}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
