import { Outlet, Link } from "react-router-dom"
import { SiAtom } from "react-icons/si"
import '../styles/Header.module.scss'

const Header = () => {
  return (
    <>
    <div className="header">
        <Link to='/'><SiAtom /> vetbee</Link>
    </div>
    <Outlet />
    </>
  )
}

export default Header