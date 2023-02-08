import styles from "./index.module.css";
import sendIcon from "../../assets/send-icon.svg";

function MessageInput() {
  return (
    <div className={styles.inputSection}>
      <div className={styles.options}></div>
      <div className={styles.inputContent}>
        <input type="text" placeholder="Bir mesaj yazın" spellCheck="false" />
        <button>
          <img src={sendIcon} alt="send-icon" />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
