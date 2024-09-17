import logo from "./assets/akatsuki.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.h1}>
              Welcome to <b>Akatsuki Coding Club</b> <br />
            </h1>
            <h2 className={styles.h2}>Join the Future of Tech!</h2>

            <p className={styles.h3}>
              Learn, Code, and Innovate with like-minded{" "}
              <abbr title="Developers, Designers, and Tech Enthusiasts">
                a11y
              </abbr>
            </p>

            <div className={styles.btn - group}>
              <a
                href="#contact"
                className={`${styles.btn} ${styles.btn - primary}`}
              >
                Join Us
              </a>
              <a
                href="#about"
                className={`${styles.btn} ${styles.btn - secondary}`}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.pattern - bg}></div>
            <div className={styles.img - box}>
              <img
                src={logo}
                alt="Julia Walker"
                className={styles.hero - img}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
