import styles from "./RegistrationPage.module.css";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import BackButtonImage from "../../assets/images/BackButtonImage.svg";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import LorbyGreeting from "../../components/LorbyGreeting/LorbyGreeting";
import { registerAPI } from "../../api/api";

const BackButton = styled.button`
  background: #ffffff;
  width: 7.5rem;
  height: 3rem;
  position: absolute;
  top: 2rem;
  left: 0rem;
  color: #292929;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function RegistrationPage() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    login: Yup.string().required("Required"),
    password: Yup.string()
      .max(15, "Max 15") // name of error
      .min(8, "Min 8")
      .matches(/[a-z]/, "Have lowercase")
      .matches(/[A-Z]/, "Have uppercase")
      .matches(/\d/, "Have number")
      .matches(/[!@#$%^&*()_=+-]/, "Have unique symbols")
      .matches(/^[aA-zZ\d!@#$%^&*()_=+-]+$/, "")
      .required("Required"),
  });

  interface IRegisterForm {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }

  const initialValues: IRegisterForm = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues, // this is formik.values
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      registerAPI(values); // post request to API
    },
  });

  return (
    <>
      <LorbyGreeting />
      <div className={styles.registrPage}>
        <Link to={"/"}>
          <BackButton>
            <img src={BackButtonImage} alt="" /> Назад
          </BackButton>
        </Link>
        <div className={styles.registrPage_form_block}>
          <h2>
            Создать аккаунт <br /> Lorby
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Введите адрес почты"
            />
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Придумай логин"
            />
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Создай пароль"
            />
            {/* {formik.touched.password && formik.errors.password ? (
              <li style={{ color: "green" }}>От 8 до 15 символов ✅</li>
            ) : (
              <li style={{ color: "red" }}>От 8 до 15 символов ❌</li>
            )} */}
            <ul className={styles.password_requirements_list}>
              <li>От 8 до 15 символов</li>
              <li>Строчные и прописные буквы</li>
              <li>Минимум 1 цифра</li>
              <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
            </ul>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              placeholder="Повтори пароль"
            />
            <button type="submit">Далее</button>
          </form>
        </div>
      </div>
    </>
  );
}
