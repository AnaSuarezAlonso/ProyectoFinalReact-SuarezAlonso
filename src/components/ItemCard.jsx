import PrimaryButton from "./PrimaryButton";

export default function ItemCard({title, price, thumbnail, category, id}) {
  return (
    <div className="flex flex-col border-dashed border-white border rounded-3xl px-6 pb-6 font-dm">
			<div className="flex max-h-48 items-end justify-center">
				<img src={thumbnail} alt={title} className="-mt-10 hover:scale-110 hover:transition hover:duration-500 hover:ease-in-out" />
			</div>
      <span className="text-primary text-sm mb-2 mt-5 capitalize">{category}</span>
      <h2 className="text-white uppercase font-dm text-xl font-bold mb-2 tracking-wider">{title}</h2>
      <span className="text-primary text-xl mb-5">${price}</span>
			<PrimaryButton route={`/item/${id}`} title={'See details'} />
    </div>
  )
}
