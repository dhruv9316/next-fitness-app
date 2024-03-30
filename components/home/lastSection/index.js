import React from "react";
import styles from "./LastSection.module.css";

const LastSection = () => {
  return (
    <div>
      <div className={styles.heading}>
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="purpleDiv"></div>
      </div>

      <div className={styles.middle}>
        <div className={styles.card}>
          <p>-</p>
          <div className={styles.cardInfo}>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet sit amet Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className={styles.greyLine}></div>

        <div className={styles.card2}>
          <p>+</p>
          <div className={styles.cardInfo}>
            <h4>Lorem ipsum dolor sit amet</h4>
          </div>
        </div>

        <div className={styles.greyLine}></div>

        <div className={styles.card2}>
          <p>+</p>
          <div className={styles.cardInfo}>
            <h4>Lorem ipsum dolor sit amet</h4>
          </div>
        </div>
      </div>

      <div className={styles.image}>
            <img src='/i7.jpg' alt='i7-img' />
        </div>
    </div>
  );
};

export default LastSection;
