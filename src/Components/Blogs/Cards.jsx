import styles from "./Blogs.module.css";

const Cards = (props) => {
  return (
    <>
      <div className={styles.blog}>
        <h2 className={styles.h2}>Latest Blog Post</h2>

        <div className={styles.blog - card - group}>
          <div className={styles.blog - card}>
            <div className={styles.blog - card - banner}>
              <img
                src={props.img}
                alt={props.title}
                width="250"
                className={styles.blog - banner - img}
              />
            </div>

            <div className={styles.blog - content - wrapper}>
              <button
                className={`${styles.blog - topic} ${styles.text - tiny}`}
              >
                {props.label}
              </button>

              <h3>
                <a href="#" className={styles.h3}>
                  {props.title}
                </a>
              </h3>

              <p className={styles.blog - text}>{props.desc}</p>

              <div className={styles.wrapper - flex}>
                <div className={styles.profile - wrapper}>
                  <img src={props.profile} alt={props.author} width="50" />
                </div>

                <div className={styles.wrapper}>
                  <a href="#" className={styles.h4}>
                    {props.author}
                  </a>

                  <p className={styles.text - sm}>
                    <time datetime={props.date}>{props.date}</time>
                    <span className={styles.separator}></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT3M">{props.time}</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className={`${styles.btn} ${styles.load - more}`}>
        Load More
      </button>
    </>
  );
};

export default Cards;
