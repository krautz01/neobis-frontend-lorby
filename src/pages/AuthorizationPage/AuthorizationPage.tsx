import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import styles from "./AuthorizationPage.module.css";
import EmailCheck from "../../assets/images/EmailCheck.svg";
import LorbyGreeting from "../../components/LorbyGreeting/LorbyGreeting";

interface Values {
  login: string;
  email: string;
}

export default function AuthorizationPage() {
  return (
    <>
      <LorbyGreeting />
      <div className={styles.authPage}>
        <div className={styles.authPage_form_block}>
          <h2>Вэлком бэк!</h2>
          <Formik
            initialValues={{
              login: "",
              email: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500); //
            }}
          >
            <Form>
              <div className={styles.authPage_form_email_block}>
                <Field
                  placeholder="Введи туда сюда логин"
                  id="login"
                  name="login"
                ></Field>
                <img src={EmailCheck} alt="" />
              </div>
              <Field
                placeholder="Пароль (тоже введи)"
                id="email"
                name="email"
                type="email"
              />
              <button type="submit">Войти</button>
            </Form>
          </Formik>
        </div>
        <Link to={"/register"}>
          <p>У меня еще нет аккаунта</p>
        </Link>
      </div>
    </>
  );
}
