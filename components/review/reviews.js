import React from "react";
import styles from "./reviews.module.css";
import { IoStarSharp } from "react-icons/io5";

const Reviews = () => {
  return (
    <div>
      <div className={styles.heading}>
        <h2>Lorem ipsum dolor sit amet</h2>
        <div className="purpleDiv"></div>
      </div>

      <div className={styles.middle}>
        <div className={styles.reviews}>
          <div className={styles.quotes}>“</div>

          <div className={styles.info}>
            <div className={styles.top}>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            </div>

            <div className={styles.bottom}>
              <h3>Lorem ipsum</h3>
              <div className={styles.stars}>
                <IoStarSharp fontSize={20} color="#391053"/>
                <IoStarSharp fontSize={20} color="#391053"/>
                <IoStarSharp fontSize={20} color="#391053"/>
                <IoStarSharp fontSize={20} color="#391053"/>
                <IoStarSharp fontSize={20} color="#391053"/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bullets}>
            <div className={styles.purpleCircle}></div>
            <div className={styles.lightPurpleCircle}></div>
            <div className={styles.lightPurpleCircle}></div>
            <div className={styles.lightPurpleCircle}></div>
        </div>
      </div>

      <div className={styles.greyLine}></div>
    </div>
  );
};

export default Reviews;
