import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'
import { HOME_CONTACT_US, HOME_SUBTITLE, HOME_TITLE_ONE, HOME_TITLE_TWO } from './texts/homeTexts'

export default function Home() {
  return (
    <section className={styles.home}>
      <section className=''>
        <Navbar />
      </section>
      <section className='main'>
        <div className={`${styles['home-title']}`}>
          <h3>{HOME_TITLE_ONE}</h3>
          <h1>{HOME_TITLE_TWO}</h1>
        </div>
        <div>
          <p>{HOME_SUBTITLE}</p>
          <button className='button'>{HOME_CONTACT_US}</button>
        </div>
      </section>
    </section>
  )
}
