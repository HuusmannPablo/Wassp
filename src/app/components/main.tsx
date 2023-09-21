import React from 'react'
import styles from '../styles/page.module.css'
import Button from '@mui/material-next/Button';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { HOME_CONTACT_US, HOME_SUBTITLE, HOME_TITLE_ONE, HOME_TITLE_TWO } from '../texts/homeTexts'

function Main() {
  return (
    <section className={styles.main}>
        <div className={`${styles['home-title']}`}>
          <h3>{HOME_TITLE_ONE}</h3>
          <h1>{HOME_TITLE_TWO}</h1>
        </div>
        <div className={`${styles['home-subtitle']}`}>
          <p>{HOME_SUBTITLE}</p>
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
            {HOME_CONTACT_US}
          </Button>
        </div>
      </section>
  )
}

export default Main
