import requets from "../utils/requets";
import { useRouter } from "next/router";
export const Navbar = () => {
    const Router = useRouter()
  return <nav className="relative">
    <div className="flex whitespace-nowrap sm:px-20 px-10 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll  scrollbar-hide mx-5">
        {
            Object.entries(requets).map(([key,{title,url}])=>(
                <h2 onClick={()=> Router.push(`${key}`)} className="cursor-pointer transition
                duration-100 transform hover:scale-125 active:text-red-500 hover:text-white last:pr-24" key={key}>{title}</h2>
            ))
        }
    </div>
    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
  </nav>
};
