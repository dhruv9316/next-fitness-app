import React from 'react'
import styles from './HeroSection.module.css'
import WhiteBtn from '../buttons/WhiteBtn'
import Image from 'next/image'
import PurpleBtn from '../buttons/PurpleBtn'

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src='/i1.jpg' alt='hero-section-img' width={1000} height={600} />
            </div>
            
            <div className={styles.infoSection}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, in bibendum metus. Etiam laoreet arcu ac purus tempor cursus. Quisque ut dui at quam laoreet aliquet. Ut at dui vel nulla tempus interdum gravida tempor lorem. Suspendisse potenti. Donec. 
                </p>
                <div className={styles.btns}>
                    <WhiteBtn txt={'Know More'} />
                    <PurpleBtn txt={'Book Free Trial'} navLinkTo={'/trial-form'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection