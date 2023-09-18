import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <Image 
                src='../wassp-logo.svg' 
                alt='logo' 
                width={201} height={128} 
                style={{border: '1px solid blue', margin: '0px 30px'}} />
        </div>
        <div className={styles.menu}>
            <p className='button'>SEARCH</p>
            <p className='button'>LOGIN</p>
            <p className='button'>ARROW</p>
        </div>
    </div>
  )
}

export default Navbar