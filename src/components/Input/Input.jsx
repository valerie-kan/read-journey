import { useState } from "react";
import clsx from "clsx";

import css from "./Input.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const Input = ({ id, type, placeholder, register, errors, isValid }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPwdType = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <input
        className={clsx(
          css.input,
          isPwdType && css.pwdInput,
          id === "name" && css.nameInput,
          errors[id] && css.errInput,
          isValid && css.sucInput
        )}
        id={id}
        type={!isPwdType ? type : showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(id)}
      />
      {errors[id] && (
        <svg className={css.errIcon}>
          <use href={`${sprite}#icon-error`} />
        </svg>
      )}
      {isPwdType && !errors[id] && (
        <svg className={css.iconEye} onClick={togglePasswordVisibility}>
          <use
            href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
          />
        </svg>
      )}
      {errors?.[id] && <p className={css.errMessage}>{errors[id].message}</p>}
      {isValid && <p className={css.sucMessage}>Password is secure</p>}
    </>
  );
};

export default Input;
