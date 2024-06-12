import clsx from 'clsx'

export default function AddItemButton({title, className, onClick}) {
  return (
    <button onClick={onClick} className={clsx("flex bg-primary hover:bg-teal-500 py-3 px-5 rounded-sm text-black text-base leading-6 font-sans justify-center cursor-pointer", className)}>
      {title}
    </button>
  )
}
