import sneakersFooterLogo from "../assets/sneakers-black.svg"

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-2 sm:px-8 lg:px-20 2xl:px-40">
      <div className="flex flex-col gap-6 md:flex-row border-t-[0.5px] border-dashed border-white w-full justify-between items-center pt-8 pb-12 md:py-8">
        <img src={sneakersFooterLogo} alt="sneakersLogo" className="h-6"/>
        <p className="text-sm font-dm text-white">© Copyright 2024 Sneakers store</p>
      </div>
    </div>
  )
}
