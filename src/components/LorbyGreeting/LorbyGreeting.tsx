import LorbyBackground from "../../assets/images/LorbyBackground.png";
import styles from "./LorbyGreeting.module.css";

export default function LorbyGreeting() {
  return (
    <div className={styles.lorby_greeting}>
      <img src={LorbyBackground} alt="LorbyBackground" />
      <h1>Lorby</h1>
      <p>Твой личный репетитор</p>
    </div>
  );
}
