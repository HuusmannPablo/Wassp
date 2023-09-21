import React from 'react'
import styles from '../styles/page.module.css'
import SouthEastIcon from '@mui/icons-material/SouthEast';
import Button from '@mui/material-next/Button';
import Image from 'next/image'
import { WELCOME_OUR_STORY, WELCOME_SUBTITLE, WELCOME_SUBTITLE_TEXT, WELCOME_TITLE } from '../texts/homeTexts';

function Welcome() {
  return (
    <>
        <section className={styles.welcome}>
            <div className={styles.wave}>
                <Image 
                    src='../wave-group.svg' 
                    alt="waves" 
                    layout="fill" 
                    // width={1111} height={1000} 
                    objectFit="cover" 
                />
                {/* <Image src='../wave-group.svg' alt="waves" layout="fill" objectFit="cover" /> */}
            </div>
            <div className={`${styles['welcome-title']}`}>
                <h1>{WELCOME_TITLE}</h1>
            </div>
            <section className={styles.welcomeinfo}>
                <div className={`${styles['welcome-subtitle']}`}>
                    <h4>01</h4>
                    <h4>{WELCOME_SUBTITLE}</h4>
                </div>
                <div className={`${styles['welcome-subtitle-text']}`}>
                    <p>{WELCOME_SUBTITLE_TEXT}</p>
                    <Button 
                        variant="outlined"  
                        endIcon={<SouthEastIcon style={{ color: 'white' }}/>} 
                        style={{ 
                        color: 'white',
                        fontFamily: 'Neue Haas Grotesk Display Pro',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 450,
                        lineHeight: 'normal', 
                        }}
                    >
                        {WELCOME_OUR_STORY}
                    </Button>
                </div>
            </section>
        </section>
    </>
  )
}

export default Welcome