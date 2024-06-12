import {useContext} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../contexts/CartContext'
import deleteIcon from '../assets/delete-icon.svg'

export default function CartItem({ image, title, price, quantity, id}) {

  const { deleteItemFromCart, handleAdd, handleRest } = useContext(CartContext)

  return (
    <div className='flex gap-8 w-full mb-12'>
      <div className='flex h-36 w-32 lg:h-40 lg:w-40 rounded-lg border border-dashed border-white p-4 shrink-0'>
        <img className='object-contain' src={image} alt={title} />
      </div>
      <div className='flex flex-col gap-4 w-full justify-between'>
        <div className='flex items-center w-full justify-between'>
          <h1 className='text-2xl font-sans font-bold text-white'>{title}</h1>
          <span className='text-xl font-dm text-primary'>${price * quantity}</span>
        </div>
        <span className='text-base font-dm text-white'>Unit price: ${price}</span>
        <div className='flex justify-between items-center'>
          <ItemCount quantity={quantity} handleAdd={()=>handleAdd(id)} handleRest={()=>handleRest(id)} />
          <button className='h-14 w-14 bg-slate-50 bg-opacity-10 flex justify-center items-center rounded-full' onClick={()=>deleteItemFromCart(id)}>
            <img className="h-8 w-8" src={deleteIcon} alt="deleteButton"/>
          </button>
        </div>
      </div>
    </div>
  )
}
