import AddItemButton from './AddItemButton'

export default function ItemDetail({product, children, handleAddToCart, buttonTitle}) {
  return (
    <div className='flex flex-col md:flex-row gap-12 xl:gap-40 text-white w-full items-center justify-between'>
      <div className='flex flex-col flex-1 lg:max-w-[640px] order-2 md:order-1 gap-12'>
        <div className='flex flex-col gap-6'>
          <span className='font-dm text-xl capitalize text-primary'>{product.category}</span>
          <h1 className='font-sans text-5xl font-semibold'>{product.title}</h1>
          <span className='font-dm text-primary text-2xl'>${product.price}</span>
          <p className='font-dm text-base'>{product.description}</p>
        </div>
        {children}
        <AddItemButton onClick={handleAddToCart} className='sm:max-w-64' title={buttonTitle}/>
      </div>
			<div className='flex flex-1 rounded-lg border border-dashed border-white items-center justify-center min-h-[560px] order-1 md:order-2 p-8 lg:p-20'>
				<img className='object-cover w-[720px] hover:scale-110 hover:transition-transform hover:duration-1000' src={product.image} alt={product.title} />
			</div>
    </div>
  )
}
