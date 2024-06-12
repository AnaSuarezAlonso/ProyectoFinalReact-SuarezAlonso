import clsx from 'clsx'
import {Link} from "react-router-dom"
import sneakersLogo from "../assets/sneakers.svg"
import CartWidget from "./CartWidget"
import NavBarButton from "./NavBarButton"
import menuIcon from '../assets/menu-icon.svg'
import closeIcon from '../assets/close-icon.svg'
import {useState} from 'react'

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 py-6 sm:py-3 px-8 sm:px-8 lg:px-20 2xl:px-40 text-white bg-ui-00">
      <div className="flex flex-row justify-between items-center">
        <Link to="/"><img src={sneakersLogo} alt="sneakersLogo" className="h-8"/></Link>
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center sm:hidden">
            <button onClick={toggleMenu}><img className="h-8 w-8" src={isMenuOpen ? closeIcon : menuIcon} alt="menuButton"/></button>
          </div>
          <CartWidget className="flex sm:hidden" number={2} />
        </div>
      </div>
      <nav className={clsx("flex-col sm:flex-row justify-between gap-1", isMenuOpen ? 'flex' : 'hidden sm:flex')}>
        <ul className="flex flex-col sm:flex-row gap-1 md:gap-4">
					<NavBarButton route={"/categories/men"} title='Men'/>
					<NavBarButton route={"/categories/women"} title='Women'/>
					<NavBarButton route={"/categories/kids"} title='Kids'/>
          <NavBarButton route={"/categories/sales"} title='Sales'/>
        </ul>
      </nav>
      <CartWidget className="hidden sm:flex" number={2} />
    </header>
  )
}
