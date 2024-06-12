import { useContext } from "react"
import cart from "../assets/cart.svg"
import { CartContext } from "../contexts/CartContext"
import {Link} from "react-router-dom"
import clsx from 'clsx'

export default function CartWidget({className}) {

  const {itemsInCart} = useContext(CartContext)

  return (
    <Link to="/cart" className={clsx("relative p-4 flex-shrink-0 hover:bg-slate-50 hover:bg-opacity-15 rounded-md", className)}>
      <img src={cart} alt="cart-icon" className="h-6"/>
      <div className="py-0.5 px-2 bg-primary rounded-full text-sm font-bold absolute top-0 right-0">{itemsInCart()}</div>
    </Link>
  )
}
