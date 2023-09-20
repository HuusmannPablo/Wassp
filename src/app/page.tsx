import styles from './styles/page.module.css'
import Navbar from './components/navbar'
import Main from './components/main';
import Welcome from './components/welcome';

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <Navbar />
        <Main />
      </section>
      <Welcome />
    </>
  )
}
