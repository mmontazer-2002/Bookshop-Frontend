import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

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
        {link: "Blog", path: "/blog"},
    ]
  return (
    <header className=''>
        <nav>
        <div>
                {/*logo */}

                <Link to= "/" className='text-2xl font-bold text-blue-700 items-center gap-2'>
                    <FaBlog className='inline-block'/> Books 
                </Link>

                {/*items in navbar */}

                <ul className='flex space-x-12 '>
                    {
                        navItem.map(({link ,path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 '>
                            {link}
                            </Link>)
                    }
                </ul> 

                {/*button for lg devices */}

                {/* <div className='space-x-12  lg:felx items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>  */}

                {/*button for mobile devices */}


                {/* <div className='md:hidden'>
                    <button onClick={toggleMenue} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>  */}
                 
            </div> 

            {/*button for sm devices */}


            {/* <div className={'space-y-4 px-4 mt-16 py-7 bg-blue-700 text'}>
                {
                    navItem.map(({link ,path}) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer '>
                        {link}</Link>)
                }
            </div> */}
            
        </nav>
    </header>
  )
}

export default Navbar