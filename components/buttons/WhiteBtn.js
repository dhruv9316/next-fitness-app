"use client"

import React from 'react'
import styles from './WhiteBtn.module.css'
import { useRouter } from 'next/navigation'

const WhiteBtn = ({txt}) => {
    const router = useRouter()
  return (
    <button className={styles.main}>
        {txt}
    </button>
  )
}

export default WhiteBtn