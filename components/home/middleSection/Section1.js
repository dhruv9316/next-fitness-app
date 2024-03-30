import React from 'react'
import styles from './Section1.module.css'

const Section1 = () => {
    const data1 = [
        {
            heading: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, "
        },
        {
            heading: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, "
        },
        {
            heading: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, "
        }
    ]

    const data2 = [
        {
            heading: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, "
        },
        {
            heading: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, "
        },
        {
            heading: "Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tristique leo, "
        }
    ]

  return (
    <div className={styles.wrapper}>

        <div className={styles.heading}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className='purpleDiv'></div>
        </div>

        <div className={styles.container}>
            {
                data1.map((item, i) => (
                    <div key={i} className={styles.data1Card}>
                        <div className={styles.purpleSquare}></div>
                        <div className={styles.data1Info}>
                            <h4>{item.heading}</h4>
                            <p>{item.desc}</p>
                        </div>

                    </div>
                ))
            }
        </div>

        <div className={styles.image}>
            <img src='/i2.jpg' alt='i2-img' />
        </div>

        <div className={styles.container2}>
            {
                data1.map((item, i) => (
                    <div key={i} className={styles.data2Card}>
                        <p>{i+1}</p>
                        <div className={styles.data2Info}>
                            <h4>{item.heading}</h4>
                            <p>{item.desc}</p>
                        </div>

                    </div>
                ))
            }
        </div>

        <div className={styles.image}>
            <img src='/i3.jpg' alt='i2-img' />
        </div>

    </div>
  )
}

export default Section1