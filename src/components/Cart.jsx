import clsx from 'clsx'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import CartItem from './CartItem'
import PrimaryButton from './PrimaryButton'
import emptyCartIcon from "../assets/empty-cart.svg"


export default function Cart() {

  const { cart, totalPrice, emptyCart, shippingCosts } = useContext(CartContext)
  const isEmpty = cart.length === 0

  return (
    <div className='flex flex-1 flex-col md:flex-row items-start justify-start md:justify-center mt-10 sm:mt-20 mb-20 sm:mb-40 px-8 lg:px-20 2xl:px-40 gap-20 lg:gap-28 2xl:gap-48'>
      <div className='w-full max-w-[680px]'>
        <div className={clsx('flex w-full items-center mb-10', isEmpty ? 'justify-center' : 'justify-between')}>
          <div className='uppercase text-2xl font-dm font-bold'>Cart</div>
          {!isEmpty && (<button className='font-dm underline' onClick={emptyCart}>Empty Cart</button>)}
        </div>
        {isEmpty &&(
          <div className='flex flex-col items-center gap-8'>
            <img src={emptyCartIcon} alt="cart-icon" className="h-20"/>
            <h1 className='font-dm text-center text-base text-white'>Your cart is Empty</h1>
          </div>
        )}
        {cart.map((product)=> (
          <CartItem
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
      {!isEmpty && (
        <div className='font-dm text-white w-full md:w-96 border border-dashed p-8 rounded-lg'>
          <h1 className='uppercase text-xl mb-6'>Cart resume</h1>
          <div className='flex flex-row justify-between items-center mb-5'>
            <span className='text-base'>Subtotal:</span>
            <span className='text-base'>${totalPrice()}</span>
          </div>
          <div className='flex flex-row justify-between items-center mb-10'>
            <span className='text-base'>Shipping costs:</span>
            <span className='text-base'>${shippingCosts}</span>
          </div>
          <div className='flex flex-row justify-between items-center pt-6 border-t border-dashed mb-7'>
            <span className='text-base font-bold'>TOTAL</span>
            <span className='text-base font-bold'>${totalPrice() + shippingCosts}</span>
          </div>
          <PrimaryButton route={`/checkout`} title={'Go to checkout'} />
        </div>
      )}
    </div>
  )
}
