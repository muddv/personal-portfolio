import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sun from '../images/sun.svg'
import menu from '../images/menu.svg'

const Layout: NextPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    function swichColorMode() {
        setDarkMode(!darkMode);
        darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark")
    }

    const [navMenu, setNavMenu] = useState(false);
    function showNavMenu() {
        setNavMenu(!navMenu);
    }

    return (
        <>
            <header className="flex ml-5 gap-2 w-21">
                <div className="flex flex-none flex-col"><button onClick={showNavMenu} className='mt-10'><Image src={menu} alt="navigation menu"></Image></button>
                    <div className={navMenu ? "mb-3 text-xl" : "hidden"}><Link href="/">Home</Link></div>
                    <div className={navMenu ? "mb-3 text-xl" : "hidden"}><Link href="/blog">Posts</Link></div>
                </div>
                <button onClick={swichColorMode} className='flex justify-end ml-2 mt-10'>
                    <Image src={sun} alt="switch light and dark mode" />
                </button>
            </header>
        </>

    )
}

export default Layout