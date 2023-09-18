import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'
import { NAVBAR_OPTIONS } from '../texts/homeTexts'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <Image 
                src='../wassp-logo.svg' 
                alt='logo' 
                width={201} height={128} 
                style={{ margin: '0px 30px' }} 
            />
        </div>
        <div className={styles.menu}>
            {NAVBAR_OPTIONS.map((option, index) => (
                <p key={index} className='button'>{option}</p>
            ))}
            <Image
                src='../arrow-down.svg'
                alt='hamburger'
                width={24} height={24}
                // style={{border: '1px solid blue', margin: '0px 30px'}} 
            />
            <Image
                src='../hamburger-logo.svg'
                alt='hamburger'
                width={24} height={24}
                // style={{border: '1px solid blue', margin: '0px 30px'}} 
            />
        </div>
    </div>
  )
}

export default Navbar