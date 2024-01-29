import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBlog } from "react-icons/fa6";

function Navbar() {
    const[isMenuOpen , setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);

    //toggle menu
    const toggleMenue =() => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=> {
        const handleScroll =()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            
            }
        }
        window.addEventListener("scroll",handleScroll);

        return () => {
            window.addEventListener("scroll",handleScroll);
        }

    },[])



    //nav items
    const navItem =[
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell Your Books", path: "/admin/dashboard"},
        {link: "Blog", path: "/blog"}
    ]
  return (
    <header>
        <nav>
            <div>
                {/*logo */}
                <Link to= "/" className='text-2xl font-bold text-blue-700 items-center gap-2'><FaBlog className='inline-block'/> Books </Link>
            </div> 
        </nav>
    </header>
  )
}

export default Navbar