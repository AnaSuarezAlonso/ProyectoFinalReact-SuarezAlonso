import { useState, createContext, useEffect } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext()

const cartStorage = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(cartStorage)
  const shippingCosts = 5

  const addToCart = (product, quantity, setQuantity) => {
    const productAdded = {...product, quantity: quantity}
    const newCart = [...cart]
    const isInCart = newCart.find((prod)=> prod.id === productAdded.id)

    isInCart ? isInCart.quantity += quantity : newCart.push(productAdded)
    setCart(newCart)
    setQuantity(1)
  }

  const deleteItemFromCart = (id) => {
    const cartUpdated = cart.filter((prod) => prod.id !== id)
    setCart(cartUpdated)
    toast.error('Product/s was deleted')
  }

  const handleAdd = (id) => {
    const newCart = cart.map((prod) => {
      if (prod.id === id) {
        return { ...prod, quantity: prod.quantity + 1 }
      }
      return prod
    })
    setCart(newCart)
    toast.success('Product/s added to cart')
  }

  const handleRest = (id) => {
    const product = cart.find((prod) => prod.id === id);

    if (product) {
      if (product.quantity > 1) {
        const newCart = cart.map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
        setCart(newCart)
        toast.error('Product/s was deleted')
      } else {
        deleteItemFromCart(id)
        toast.error('Product/s was deleted')
      }
    }
  }

  const itemsInCart = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0 )
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
  }

  const emptyCart = () => {
    setCart([])
    toast('Your cart is empty.')
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])



  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        itemsInCart,
        totalPrice,
        emptyCart,
        deleteItemFromCart,
        handleAdd,
        handleRest,
        setCart,
        shippingCosts
    }}>
      {children}
    </CartContext.Provider>)

}
