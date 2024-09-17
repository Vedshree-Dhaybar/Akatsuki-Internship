import logo from "./assets/akatsuki.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <a href="#" className={styles.footer - logo}>
              <img
                src={logo}
                alt="SimpleBlog Logo"
                // width="150"
                className={styles.logo - light}
              />
            </a>

            <p className={styles.footer - text}>
              Empowering future developers through coding education and
              community support.
            </p>
          </div>

          <div className={styles.wrapper}>
            <p className={styles.footer - title}>Quick Links</p>
            <ul>
              <li>
                <a href="#" className={styles.footer - link}>
                  Events
                </a>
              </li>

              <li>
                <a href="#" className={styles.footer - link}>
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className={styles.footer - link}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.wrapper}>
            <p className={styles.footer - title}>Legal Stuff</p>
            <ul>
              <li>
                <a href="#" className={styles.footer - link}>
                  Privacy Notice
                </a>
              </li>

              <li>
                <a href="#" className={styles.footer - link}>
                  Cookie Policy
                </a>
              </li>

              <li>
                <a href="#" className={styles.footer - link}>
                  Terms Of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          &copy; 2024 <a href="#">Akatsuki Coding Club</a>. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
