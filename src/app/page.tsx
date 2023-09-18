import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <Navbar />
      </section>
      <section className=''>

      </section>
    </>
  )
}
