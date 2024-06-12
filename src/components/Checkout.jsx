import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import {useState} from 'react'
import FormInput from './FormInput'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { clsx } from 'clsx'

export default function Checkout() {
  const { cart, totalPrice, setCart, shippingCosts } = useContext(CartContext)
  const [orderId, setOrderId] = useState('')
  const [formValues, setFormValues] = useState({
    userName: '',
    surname: '',
    email: '',
    confirmEmail: '',
    phone: ''
  })

  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    surname: '',
    confirmEmail: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm()){
      purchase(formValues)
    }
  }

  const purchase = (data) => {
    const order = {
      buyer: data,
      items: cart,
      totalPrice: totalPrice() + shippingCosts,
      date: new Date()
    }
    const orders = collection(db, 'orders')

    addDoc(orders, order)
      .then((doc)=>{
        setOrderId(doc.id)
        setCart([])
      })
  }

  const handleValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formValues.userName) {
      newErrors.userName = 'Name is required';
    }
    if (!formValues.surname) {
      newErrors.surname = 'Surname is required';
    }
    if (!formValues.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d*$/.test(formValues.phone)){
      newErrors.phone = 'Phone number is invalid'
    }
    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formValues.confirmEmail) {
      newErrors.confirmEmail = 'Confirmation email is required';
    } else if (formValues.email !== formValues.confirmEmail) {
      newErrors.confirmEmail = 'Emails do not match';
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  if(orderId){
    return (
      <div className='flex flex-1 flex-col w-screen items-center justify-center mt-10 sm:mt-20 mb-20 sm:mb-40 px-8 lg:px-20 2xl:px-40 font-dm text-center'>
        <h1 className='text-2xl font-bold mb-8 uppercase'>Your purchase has been successfully completed.</h1>
        <p className='mb-6 text-base text-white'>This is your order reference:</p>
        <span className='text-lg font-bold text-primary py-4 px-10 border border-dashed rounded-md'>{orderId}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col md:flex-row items-start justify-center mt-10 sm:mt-20 mb-20 sm:mb-40 px-8 lg:px-20 2xl:px-40 gap-20 lg:gap-28 2xl:gap-48">
      <div className='flex flex-col justify-center items-start w-full max-w-[680px] order-2 md:order-1'>
        <h1 className='font-dm text-2xl font-bold mb-4 uppercase'>Complete purchase</h1>
        <div className='flex flex-col justify-center items-start font-dm w-full'>
          <form className='flex flex-col justify-center items-start w-full' onSubmit={handleSubmit}>
            <FormInput
              title="Name"
              placeholder="Enter your name"
              type="text"
              id="userName"
              value={formValues.userName}
              onChange={handleValues}
            />
            {errors.userName && <span className="text-red-500 text-sm">{errors.userName}</span>}
            <FormInput
              title="Surname"
              placeholder="Enter your surname"
              type="text"
              id="surname"
              value={formValues.surname}
              onChange={handleValues}
            />
            {errors.surname && <span className="text-red-500 text-sm">{errors.surname}</span>}
            <FormInput
              title="Phone"
              placeholder="Enter your phone number"
              type="text"
              id="phone"
              value={formValues.phone}
              onChange={handleValues}
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            <FormInput
              title="E-mail"
              placeholder="Enter your email"
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleValues}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            <FormInput
              title="Confirm E-mail"
              placeholder="Confirm your email"
              type="email"
              id="confirmEmail"
              value={formValues.confirmEmail}
              onChange={handleValues}
            />
            {errors.confirmEmail && <span className="text-red-500 text-sm">{errors.confirmEmail}</span>}

            <button className={clsx('flex w-full bg-primary hover:bg-teal-500 py-3 px-5 rounded-sm text-black text-base leading-6 font-sans justify-center cursor-pointer mt-8', cart.length === 0 && 'bg-gray-400 cursor-not-allowed hover:bg-gray-400')} type='submit' disabled={cart.length === 0}>
              Purchase
            </button>
          </form>
        </div>
      </div>
      <div className='font-dm text-white w-full md:w-96 border border-dashed p-8 rounded-lg order-1 md:order-2'>
        <h1 className='uppercase text-xl mb-6'>Cart resume</h1>
        <div className='flex flex-row justify-between items-center mb-5'>
          <span className='text-base'>Subtotal:</span>
          <span className='text-base'>${totalPrice()}</span>
        </div>
        <div className='flex flex-row justify-between items-center mb-10'>
          <span className='text-base'>Shipping costs:</span>
          <span className='text-base'>${shippingCosts}</span>
        </div>
        <div className='flex flex-row justify-between items-center pt-6 border-t border-dashed'>
          <span className='text-base font-bold'>TOTAL</span>
          <span className='text-base font-bold'>${totalPrice() + shippingCosts}</span>
        </div>
      </div>
    </div>
  )
}
