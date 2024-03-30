import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.info}>
                <h3>LOGO</h3>
                <p>ipsum dolor sit amet Lorem ipsu Lorem ipsum dolor sit ametm dolor sit amet</p>
                <ul typeof='bullet'> 
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>

            <div className={styles.greyLine}></div>

            <div className={styles.info2}>
                <h3>Contact Us</h3>
                <div> 
                    <div className={styles.info2Pointers}>
                        <div className={styles.circle}></div>
                        <p>Lorem ipsum doroo sire emet</p>
                    </div>
                    <div className={styles.info2Pointers}>
                        <div className={styles.circle}></div>
                        <p>9878543210</p>
                    </div>
                    <div className={styles.info2Pointers}>
                        <div className={styles.circle}></div>
                        <p>work@mail.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.container2}>
            <p>Lorem ipsum doroo sire emet, consecutor</p>
            <div className={styles.bullets}>
                <div className={styles.purpleCircle}></div>
                <div className={styles.purpleCircle}></div>
                <div className={styles.purpleCircle}></div>
                <div className={styles.purpleCircle}></div>
            </div>
        </div>

    </div>
  )
}

export default Footer