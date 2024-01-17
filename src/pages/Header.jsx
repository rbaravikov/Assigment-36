import { Outlet, Link } from "react-router-dom"
import { SiAtom } from "react-icons/si"
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <>
    <div className={styles.header}>
        <Link className={styles.link} to='/'><SiAtom /> vetbee</Link>
    </div>
    <Outlet />
    <footer className={styles.footer}><p>Copyright © VetBee 2023. All rights reserved.</p></footer>
    </>
  )
}

export default Header