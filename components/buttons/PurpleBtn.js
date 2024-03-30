"use client"

import React from 'react'
import styles from './PurpleBtn.module.css'
import Link from 'next/link'

const PurpleBtn = ({txt, navLinkTo}) => {

  return (
    <Link href={navLinkTo} className={styles.linkTag}>
        <button className={styles.main} >
            {txt}
        </button>
    </Link>
    
  )
}

export default PurpleBtn