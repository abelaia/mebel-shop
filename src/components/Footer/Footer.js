import React from 'react'
import styles from './Footer.module.scss'
import { COPYRIGHT_TEXT } from '../../constants/app'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        {COPYRIGHT_TEXT}
    </footer>
  )
}