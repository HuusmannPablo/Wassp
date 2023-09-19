import styles from './page.module.css'
import Navbar from './components/navbar'
import Button from '@mui/material-next/Button';
import SearchIcon from '@mui/icons-material/Search';
import { HOME_CONTACT_US, HOME_SUBTITLE, HOME_TITLE_ONE, HOME_TITLE_TWO } from './texts/homeTexts'

export default function Home() {
  return (
    <section className={styles.home}>
      {/* <section className=''> */}
        <Navbar />
      {/* </section> */}
      <section className={styles.main}>
        <div className={`${styles['home-title']}`}>
          <h3>{HOME_TITLE_ONE}</h3>
          <h1>{HOME_TITLE_TWO}</h1>
        </div>
        <div className={`${styles['home-subtitle']}`}>
          <p>{HOME_SUBTITLE}</p>
          <Button 
            variant="outlined"  
            endIcon={<SearchIcon />} 
            style={{ color: 'white' }}
          >
            {HOME_CONTACT_US}
          </Button>
        </div>
      </section>
    </section>
  )
}
