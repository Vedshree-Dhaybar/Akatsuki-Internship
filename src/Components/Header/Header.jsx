import logo from "./assets/akatsuki.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <a href="#">
              <img
                src={logo}
                alt="SimpleBlog logo"
                width="150"
                className={styles.logo - light}
              />
            </a>

            <div className={styles.btn - group}>
              <button
                className={`${styles.theme - btn} ${
                  styles.theme - btn - mobile
                } ${styles.light}`}
              >
                <ion-icon name="moon" className={styles.moon}></ion-icon>
                <ion-icon name="sunny" className={styles.sun}></ion-icon>
              </button>

              <button className={styles.nav - menu - btn}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>

            <div className={styles.flex - wrapper}>
              <ul className={styles.desktop - nav}>
                <li>
                  <a href="#" className={styles.nav - link}>
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className={styles.nav - link}>
                    Events
                  </a>
                </li>

                <li>
                  <a href="#" className={styles.nav - link}>
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#" className={styles.nav - link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.mobile - nav}>
              <button className={styles.nav - close - btn}>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className={styles.wrapper}>
                <p className={`${styles.h3} ${styles.nav - title}`}>
                  Main Menu
                </p>

                <ul>
                  <li className={styles.nav - item}>
                    <a href="#" className={styles.nav - link}>
                      Home
                    </a>
                  </li>

                  <li className={styles.nav - item}>
                    <a href="#" className={styles.nav - link}>
                      About Me
                    </a>
                  </li>

                  <li className={styles.nav - item}>
                    <a href="#" className={styles.nav - link}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className={`${styles.h3} ${styles.nav - title}`}>Topics</p>

                <ul>
                  <li className={styles.nav - item}>
                    <a href="#" className={styles.nav - link}>
                      Database
                    </a>
                  </li>

                  <li className={styles.nav - item}>
                    <a href="#" className={styles.nav - link}>
                      Accessibility
                    </a>
                  </li>

                  <li className={styles.nav - item}>
                    <a href="#" className={styles.nav - link}>
                      Web Performance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
