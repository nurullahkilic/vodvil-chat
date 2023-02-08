import styles from "./index.module.css"

import ChatNavbar from "../../components/ChatNavbar";
import ChatList from "../../components/ChatList";
import MessageInput from "../../components/MessageInput";

function ChatPage() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.leftSide}></div>
            <div className={styles.rightSide}>
               
                <div className={styles.navbarSection}>
                  <ChatNavbar/>
                </div>
                <div className={styles.chatSection}>
                    <ChatList/>
                </div>
                <div className={styles.inputArea}>
                   <MessageInput/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatPage;