
"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {

    const pathName = usePathname()
    const router = useRouter()

  const handleLogin=()=>{
    router.push("/login")
  }

  if(pathName.includes('dashboard')){
    return <div className="bg-red-300"> <nav> dahboard</nav></div>
  }
    const links =[
       
        {
            title:"Home",
            path:'/'
        },
        {
            title:"Post",
            path:'/post'
        },
        {
            title:"Meals",
            path:'/meals'
        },
        {
            title:"About",
            path:'/about'
        },
      
    ]
    return (
        <nav className="flex justify-between bg-cyan-100 p-3">

        <h2 className="text-2xl ">Next <span className="text-cyan-600">Hero</span></h2>
        <ul className="flex space-x-3">
         {links?.map((link)=> <Link className={`${ pathName === link.path ? "text-cyan-3 00": "text-cyan-700"}` } key={link.path}href={link.path} >{link.title}</Link>
         )}
        </ul>
        <button onClick={handleLogin}>login</button>
        
        </nav>
    );
};

export default Navbar;