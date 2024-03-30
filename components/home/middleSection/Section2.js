import React from 'react'
import styles from './Section2.module.css'

const Section2 = () => {
    const data1 = [
        {
            img: '/i4.jpg',
            desc: 'lorem ispum dolor iste mate'
        },
        {
            img: '/i5.jpg',
            desc: 'lorem ispum dolor iste mate'
        }
    ]
  return (
    <div>
        <div className={styles.heading}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className='purpleDiv'></div>
        </div>

        <div className={styles.container}>
            {
                data1.map((item, i) => (
                    <div key={i} className={styles.data1Card}>
                        <img src={item.img} alt={`-img-${i+1}`} />
                        <p>{item.desc}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Section2