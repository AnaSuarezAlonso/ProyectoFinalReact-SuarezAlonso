
export default function ItemCount({quantity, handleAdd, handleRest}) {
  return (
    <div className="py-1 px-1 lg:py-2 lg:px-2 flex flex-row gap-4 items-center justify-between rounded-full border border-white w-32 lg:w-44">
      <button onClick={handleRest} className="py-2 px-4 hover:bg-slate-50 hover:bg-opacity-15 rounded-full">-</button>
        <span>{quantity}</span>
      <button onClick={handleAdd} className="py-2 px-4 hover:bg-slate-50 hover:bg-opacity-15 rounded-full">+</button>
    </div>
  )
}
