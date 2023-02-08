import styles from "./index.module.css"
import image from  "../../assets/image.jpeg"


function ChatItem() {
  return (
    <>
    <div className={styles.messageContent}>
    <div className={styles.userSection}>
      <img src={image} alt="Nurullah Kılıç" />
    </div>
    <div className={styles.textSection}>
      <div className={styles.userInfo}>
          Nurullah Kılıç <span>· 13:13</span>
      </div>
      <div className={styles.messages}>
        <div className={styles.messageBox}>test</div>
        <div className={styles.messageBox}>Lorem, ipsum dolor.</div>
        <div className={styles.messageBox}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.messageBox}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio ut perferendis?</div>
        <div className={styles.messageBox}>Lorem ipsum dolor sit.</div>
        <div className={styles.messageBox}>test</div>
      </div>
    </div>
  </div>
  <div className={styles.messageContent + " " + styles.me}>
  <div className={styles.userSection}>
    <img src={image} alt="Nurullah Kılıç" />
  </div>
  <div className={styles.textSection}>
    <div className={styles.userInfo}>
        Nurullah Kılıç <span>· 13:13</span>
    </div>
    <div className={styles.messages}>
      <div className={styles.messageBox}>test</div>
      <div className={styles.messageBox}>Lorem, ipsum dolor.</div>
      <div className={styles.messageBox}>Lorem ipsum dolor sit amet.</div>
      <div className={styles.messageBox}>Lorem amet consectetur adipisicing elit. Aut odio ut perferendis?</div>
      <div className={styles.messageBox}>Lorem ipsum dolor sit.</div>
      <div className={styles.messageBox}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor voluptatum id quia quisquam esse vero deleniti eum? Officia, saepe?</div>
      <div className={styles.messageBox}>test</div>
      <div className={styles.messageBox}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima asperiores pariatur ratione a dolorem labore doloremque corporis eaque dignissimos! Quos, ea ut? Accusantium omnis nostrum, asperiores atque eligendi reprehenderit velit quasi saepe harum, facilis maiores sint excepturi. Nobis quas non minus doloribus, fugit cum tempora vitae labore repudiandae quia!</div>


    </div>
  </div>
</div>
</>
  )
}


function ChatList() {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContent}>

        <div className={styles.messageContent}>
          <div className={styles.userSection}>
            <img src={image} alt="Nurullah Kılıç" />
          </div>
          <div className={styles.textSection}>
            <div className={styles.userInfo}>
                Nurullah Kılıç <span>· 13:13</span>
            </div>
            <div className={styles.messages}>
              <div className={styles.messageBox} hour="12:22">test</div>
              <div className={styles.messageBox} hour="12:22">Lorem, ipsum dolor.</div>
              <div className={styles.messageBox} hour="12:22">Lorem ipsum dolor sit amet.</div>
              <div className={styles.messageBox} hour="12:22">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio ut perferendis?</div>
              <div className={styles.messageBox} hour="12:22">Lorem ipsum dolor sit.</div>
              <div className={styles.messageBox} hour="12:22">test</div>


            </div>
          </div>
        </div>


        <div className={styles.chatSep}>
          5 yeni mesaj
        </div>


        <div className={styles.messageContent + " " + styles.me}>
          <div className={styles.userSection}>
            <img src={image} alt="Nurullah Kılıç" />
          </div>
          <div className={styles.textSection}>
            <div className={styles.userInfo}>
                Nurullah Kılıç <span>· 13:13</span>
            </div>
            <div className={styles.messages}>
              <div className={styles.messageBox} hour="13:23">test</div>
              <div className={styles.messageBox} hour="13:23">Lorem, ipsum dolor.</div>
              <div className={styles.messageBox} hour="13:23">Lorem ipsum dolor sit amet.</div>
              <div className={styles.messageBox} hour="13:23">Lorem amet consectetur adipisicing elit. Aut odio ut perferendis?</div>
              <div className={styles.messageBox} hour="13:23">Lorem ipsum dolor sit.</div>
              <div className={styles.messageBox} hour="13:23">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor voluptatum id quia quisquam esse vero deleniti eum? Officia, saepe?</div>
              <div className={styles.messageBox} hour="13:23">test</div>
              <div className={styles.messageBox} hour="13:23">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima asperiores pariatur ratione a dolorem labore doloremque corporis eaque dignissimos! Quos, ea ut? Accusantium omnis nostrum, asperiores atque eligendi reprehenderit velit quasi saepe harum, facilis maiores sint excepturi. Nobis quas non minus doloribus, fugit cum tempora vitae labore repudiandae quia!</div>


            </div>
          </div>
        </div>



        <div className={styles.messageContent}>
          <div className={styles.userSection}>
            <img src={image} alt="Nurullah Kılıç" />
          </div>
          <div className={styles.textSection}>
            <div className={styles.userInfo}>
                Nurullah Kılıç <span>· 13:13</span>
            </div>
            <div className={styles.messages}>
              <div className={styles.messageBox}>test</div>
              <div className={styles.messageBox}>Lorem, ipsum dolor.</div>
              <div className={styles.messageBox}>Lorem ipsum dolor sit amet.</div>
              <div className={styles.messageBox}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio ut perferendis?</div>
              <div className={styles.messageBox}>Lorem ipsum dolor sit.</div>
              <div className={styles.messageBox}>test</div>


            </div>
          </div>
        </div>

        {[1,1,1,1,1,1,1,1].map(()=><ChatItem/>)}
      </div>
    </div>
  )
}

export default ChatList;