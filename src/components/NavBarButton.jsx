import {Link} from "react-router-dom"

export default function NavBarButton({title, route}) {
  return (
    <Link to={route} className="font-medium p-4 rounded-md text-white hover:bg-slate-50 hover:bg-opacity-15 cursor-pointer tracking-widest">{title}</Link>
  )
}
