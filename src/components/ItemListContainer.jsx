import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getProducts, getProductByCategory} from '../firebase/firebase'
import ItemCard from './ItemCard'
import ReactLoading from 'react-loading';

export default function ItemListContainer({greeting}) {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {categoryId} = useParams()

  useEffect(() => {
    getProducts().then((data)=> {
      if (categoryId){
        getProductByCategory(categoryId)
        .then((res)=>{
          setProducts(res)
          setIsLoading(false)
        })
      } else {
      setProducts(data)
      setIsLoading(false)
    }
    })
  }, [categoryId])


  return(
    <div className="flex flex-1 flex-col items-center justify-start gap-16 mt-10 sm:mt-20 mb-40 px-8 lg:px-20 2xl:px-40">
      <h1 className='font-dm text-white font-semibold uppercase text-2xl mb-8 tracking-wider'>{categoryId ? categoryId : greeting}</h1>
      {isLoading ?
        <ReactLoading className='mt-8' type={'spin'} color={'#2CD9CE'} height={40} width={40} />
      :
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 xl:gap-16 w-full'>
          {products.map((product, id) => (
            <ItemCard
              key={id}
              title={product.title}
              price={product.price}
              category={product.category}
              thumbnail={product.thumbnail}
              id={product.id}
            />
          ))}
        </div>
      }
    </div>
  )
}
