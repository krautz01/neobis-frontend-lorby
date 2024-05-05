import styles from "./RegistrationPage.module.css";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import BackButtonImage from "../../assets/images/BackButtonImage.svg";
import styled from "styled-components";
import LorbyGreeting from "../../components/LorbyGreeting/LorbyGreeting";
import { registerAPI } from "../../api/api";
import { useMemo, useState } from "react";

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

  interface IValid {
    validLength: boolean;
    containsLetter: boolean;
    containsNumber: boolean;
    containsSymbol: boolean;
  }

  const [passwordValid, setPasswordValid] = useState<IValid>({
    validLength: false,
    containsLetter: false,
    containsNumber: false,
    containsSymbol: false,
  });

  const validatePassword = useMemo(() => {
    return (password: string) => {
      return {
        validLength: password.length >= 8 && password.length <= 15,
        containsLetter: /^(?=.*[a-z])(?=.*[A-Z])/.test(password),
        containsNumber: /\d/.test(password),
        containsSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      };
    };
  }, []);

  return (
    <>
      <LorbyGreeting />
      <div className={styles.registerBlock}>
        <Link to={"/"}>
          <BackButton>
            <img src={BackButtonImage} alt="<" /> Назад
          </BackButton>
        </Link>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            /* registerAPI(values); // post request to API */
            localStorage.setItem("email", values.email);
          }}
        >
          {({ values }) => (
            <Form
              onChange={() => {
                setPasswordValid(validatePassword(values.password));
              }}
            >
              <h2>
                Создать аккаунт <br /> Lorby
              </h2>
              <Field
                type="email"
                name="email"
                placeholder="Введи адрес почты"
              />
              <Field type="text" name="username" placeholder="Придумай логин" />
              <Field
                type="password"
                name="password"
                placeholder="Создай пароль"
              />
              {values.password ? (
                <ul>
                  <li
                    style={{
                      color: passwordValid.validLength ? "green" : "red",
                    }}
                  >
                    От 8 до 15 символов{" "}
                    {passwordValid.validLength ? "✅" : "❌"}
                  </li>
                  <li
                    style={{
                      color: passwordValid.containsLetter ? "green" : "red",
                    }}
                  >
                    Строчные и прописные буквы{" "}
                    {passwordValid.containsLetter ? "✅" : "❌"}
                  </li>
                  <li
                    style={{
                      color: passwordValid.containsNumber ? "green" : "red",
                    }}
                  >
                    Минимум 1 цифра {passwordValid.containsNumber ? "✅" : "❌"}
                  </li>
                  <li
                    style={{
                      color: passwordValid.containsSymbol ? "green" : "red",
                    }}
                  >
                    Минимум 1 спецсимвол (!, ", #, $...){" "}
                    {passwordValid.containsSymbol ? "✅" : "❌"}
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>От 8 до 15 символов</li>
                  <li>Строчные и прописные буквы</li>
                  <li>Минимум 1 цифра</li>
                  <li>Минимум 1 спецсимвол (!, ", #, $...)</li>
                </ul>
              )}
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Повтори пароль"
              />
              <button type="submit">Отправить</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
