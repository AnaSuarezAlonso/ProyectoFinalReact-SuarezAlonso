import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react"
import { getProductById } from '../firebase/firebase';
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify'
import errorIcon from '../assets/error.svg'
import ReactLoading from 'react-loading';


export default function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [buttonTitle, setButtonTitle] = useState('Add to cart')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const {addToCart} = useContext(CartContext)

  const {id} = useParams()

  useEffect(()=>{
    getProductById(id)
      .then((res) => {
        if (res) {
          setProduct(res)
          setIsLoading(false)
        } else {
          setError('Product does not exist')
        }
      })
      .catch(() => {
        setError('An error occurred while fetching the product')
      })
  }, [id])


  const handleRest = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, setQuantity)
    setButtonTitle('Added!')
    setTimeout(() => {
      setButtonTitle("Add to Cart");
    }, 2000);
    toast.success('Product/s added to cart')
  }

  if (error) {
    return (
      <div className="flex flex-1 flex-col w-screen items-center justify-start mt-10 sm:mt-20 mb-20 sm:mb-40 px-8 lg:px-20 2xl:px-40">
        <img src={errorIcon} alt="cart-icon" className="h-20 mb-5"/>
        <p className='font-dm text-white'>{error}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col w-screen items-center justify-start mt-10 sm:mt-20 mb-20 sm:mb-40 px-8 lg:px-20 2xl:px-40">
      {isLoading ?
        <ReactLoading className='justify-self-center' type={'spin'} color={'#2CD9CE'} height={40} width={40} />
      :
        <ItemDetail product={product} handleAddToCart={handleAddToCart} buttonTitle={buttonTitle}>
          <ItemCount quantity={quantity} handleAdd={handleAdd} handleRest={handleRest} />
        </ItemDetail>
      }
    </div>
  )
}
