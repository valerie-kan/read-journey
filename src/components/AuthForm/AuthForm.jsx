import { Link } from "react-router";
import css from "./AuthForm.module.css";

import Input from "../Input/Input";
import Container from "../Container/Container";

const AuthForm = ({
  register,
  errors,
  touchedFields,
  watch,
  children,
  btnName,
  linkTo,
  linkName,
  handleSubmit,
}) => {
  const pwdValue = watch("password");
  const isPwdValid =
    touchedFields.password && !errors.password && pwdValue?.length >= 7;

  return (
    <Container className={css.authWrapper}>
      <form className={css.formWrapper} onSubmit={handleSubmit}>
        <img className={css.logo} src="var(--logo-desktop)" alt="Logo" />
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
          </div>
          <div className={css.inputBox}>
            <label className={css.label} htmlFor="password">
              Password:
            </label>
            <Input
              id="password"
              type="password"
              isValid={isPwdValid}
              register={register}
              errors={errors}
              placeholder="Yourpasswordhere"
            />
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
      </form>
      <div className={css.imgWrapper}>
        <img
          className={css.phoneImg}
          src="var(--phone-desktop)"
          alt="Phone with books image"
        />
      </div>
    </Container>
  );
};

export default AuthForm;
