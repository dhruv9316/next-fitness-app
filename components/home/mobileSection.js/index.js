import React from 'react'
import styles from './MobileAppSection.module.css'

const MobileAppSection = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.image}>
                <img src='/mobile-removebg-preview.png' alt='mobile-img' />
            </div>
            <div className={styles.info}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>ipsum dolor sit amet Lorem ipsu Lorem ipsum dolor sit ametm dolor sit amet</p>
                <ul typeof='bullet'> 
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
            </div>
            <div className={styles.download}>
                <img src='/app-download-removebg-preview.png' alt='download-imgs' />
            </div>
        </div>

    </div>
  )
}

export default MobileAppSection