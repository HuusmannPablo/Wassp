import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'
import { NAVBAR_LENGUAGE, NAVBAR_OPTIONS } from '../texts/homeTexts'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <Image 
                src='../wassp-logo.svg' 
                alt='logo' 
                width={201} height={128} 
                priority
                style={{ margin: '0px 30px', cursor: 'pointer' }} 
            />
        </div>
        <div className={styles.menu}>
            {NAVBAR_OPTIONS.map((option, index) => (
                <p key={index} className='button'>{option}</p>
            ))}
            <div className={styles.lenguage}>
                <p>{NAVBAR_LENGUAGE}</p>
                <Image
                    src='../arrow-down.svg'
                    alt='south east arrow'
                    width={24} height={24}
                    style={{ cursor: 'pointer' }} 
                />
            </div>
            <Image
                src='../hamburger-logo.svg'
                alt='hamburger'
                width={24} height={24}
                style={{ cursor: 'pointer' }}
            />
        </div>
    </div>
  )
}

export default Navbar