import { useState } from "react";
import clsx from "clsx";

import css from "./Input.module.css";

import sprite from "../../assets/icons/symbol-defs.svg";

const Input = ({ id, type, placeholder, register, errors }) => {
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
          id === "name" && css.nameInput
        )}
        id={id}
        type={!isPwdType ? type : showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(id)}
      />
      {isPwdType && (
        <svg className={css.iconEye} onClick={togglePasswordVisibility}>
          <use
            href={`${sprite}#${showPassword ? "icon-eye" : "icon-eye-off"}`}
          />
        </svg>
      )}
      {errors[id] && <p className={css.errMessage}>{errors[id].message}</p>}
    </>
  );
};

export default Input;
