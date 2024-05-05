import styles from "./ResendPassPage.module.css";
import LorbyGreeting from "../../components/LorbyGreeting/LorbyGreeting";
import ResendModalWindow from "../../components/ResendModalWindow/ResendModalWindow";
import { useState } from "react";
import { boolean } from "yup";

export default function ResendPassPage() {
  const [modalIsActiv, setModalIsActive] = useState<boolean>(false);
  return (
    <div className={styles.resendPage}>
      <LorbyGreeting />
      <div className={styles.resendPageWrapper}>
        <div className={styles.resendPageBlock}>
          <div>
            Выслали письмо со ссылкой для завершения регистрации на
            {localStorage.getItem("email")}
          </div>
          <div>
            Если письмо не пришло, не спеши ждать совиную почту - лучше проверь
            ящик “Спам”
          </div>
          <div>(´｡• ω •｡`)</div>
          <button onClick={() => setModalIsActive(true)}>
            Письмо не пришло
          </button>
        </div>
      </div>
      {modalIsActiv && <ResendModalWindow setModalIsActive={setModalIsActive} />}
    </div>
  );
}
