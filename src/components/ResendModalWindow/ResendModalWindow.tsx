import React from "react";
import styles from "./ResendModalWindow.module.css";

interface IResendModalWindow {
  setModalIsActive: (modalIsActiv: boolean) => void;
}
const ResendModalWindow: React.FC<IResendModalWindow> = ({
  setModalIsActive,
}) => {
  return (
    <div className={styles.modalWindow} onClick={() => setModalIsActive(false)}>
      <div
        className={styles.modalWindowInfo}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          Мы выслали еще одно письмо на указанную тобой почту{" "}
          {localStorage.getItem("email")}
        </div>
        <div>Не забудь проверить ящик “Спам”!11!!!!</div>
        <button>Понятно!!1!</button>
      </div>
    </div>
  );
};

export default ResendModalWindow;
