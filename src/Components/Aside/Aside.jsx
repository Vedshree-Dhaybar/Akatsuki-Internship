import styles from "./Aside.module.css";

function Aside() {
  return (
    <>
      <div className={styles.aside}>
        <div className={styles.topics}>
          <h2 className={styles.h2}>Topics</h2>

          <a href="#" className={styles.topic - btn}>
            <div className={styles.icon - box}>
              <ion-icon name="server-outline"></ion-icon>
            </div>

            <p>Database</p>
          </a>

          <a href="#" className={styles.topic - btn}>
            <div className={styles.icon - box}>
              <ion-icon name="accessibility-outline"></ion-icon>
            </div>

            <p>Accessibility</p>
          </a>

          <a href="#" className={styles.topic - btn}>
            <div className={styles.icon - box}>
              <ion-icon name="rocket-outline"></ion-icon>
            </div>

            <p>Web Performance</p>
          </a>
        </div>

        <div className={styles.tags}>
          <h2 className={styles.h2}>Tags</h2>

          <div className={styles.wrapper}>
            <button className={styles.hashtag}>#mongodb</button>
            <button className={styles.hashtag}>#nodejs</button>
            <button className={styles.hashtag}>#a11y</button>
            <button className={styles.hashtag}>#mobility</button>
            <button className={styles.hashtag}>#inclusion</button>
            <button className={styles.hashtag}>#webperf</button>
            <button className={styles.hashtag}>#optimize</button>
            <button className={styles.hashtag}>#performance</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h2 className={styles.h2}>Let's Talk</h2>

          <div className={styles.wrapper}>
            <p>
              Do you want to learn more about how I can help your company
              overcome problems? Let us have a conversation.
            </p>

            <ul className={styles.social - link}>
              <li>
                <a
                  href="#"
                  className={`${styles.icon - box} ${styles.discord}`}
                >
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={`${styles.icon - box} ${styles.twitter}`}
                >
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={`${styles.icon - box} ${styles.facebook}`}
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h2 className={styles.h2}>Newsletter</h2>

          <div className={styles.wrapper}>
            <p>
              Subscribe to our newsletter to be among the first to keep up with
              the latest updates.
            </p>

            <form action="#">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <button
                type="submit"
                className={`${styles.btn} ${styles.btn - primary}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aside;
