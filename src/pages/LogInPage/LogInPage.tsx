import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import styles from "./LogInPage.module.css";
import LorbyGreeting from "../../components/LorbyGreeting/LorbyGreeting";
/* import { logInAPI } from "../../api/api"; */

interface IValues {
  username: string;
  email: string;
}

const initialValues: IValues = {
  username: "",
  email: "",
};

export default function LogInPage() {
  return (
    <>
      <LorbyGreeting />
      <div className={styles.loginBlock}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            /* logInAPI(values) */
          }}
        >
          <Form>
            <h2>Вэлком бэк!</h2>
            <Field
              placeholder="Введи туда сюда логин"
              id="username"
              name="username"
              type="text"
            />
            <Field
              placeholder="Пароль (тоже введи)"
              id="email"
              name="email"
              type="email"
            />
            <button type="submit">Войти</button>
          </Form>
        </Formik>

        <Link to={"/register"}>У меня еще нет аккаунта</Link>
      </div>
    </>
  );
}
