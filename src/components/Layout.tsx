import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import menu from '../assets/menu.svg'

const Header: NextPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    function swichColorMode() {
        setDarkMode(!darkMode);
        darkMode ? document.body.classList.remove("dark") : document.body.classList.add("dark")
    }
    const [navMenu, setNavMenu] = useState(false);
    function showNavMenu() {
        setNavMenu(!navMenu);
    }
    const [position, setPosition] = useState(global.scrollY)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let moving = global.scrollY

            setVisible(position > moving);
            setPosition(moving)
        };
        global.addEventListener("scroll", handleScroll);
        return (() => {
            global.removeEventListener("scroll", handleScroll);
        })
    })
    // FIX THIS and add transition
    const cls = visible ? "visible p-2 flex justify-between bg-white text-body-blue text-xl font-bold fixed w-full z-20 top-0 left-0 border-b-2 border-gray-200 dark:bg-white dark:border-gray-600" : "hidden";

    return (
        <>
            <header className={cls}>
                <div><button onClick={showNavMenu} data-collapse-toggle="navbar-sticky" type="button"
                    className="inline-flex tems-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"><Image src={menu} alt="navigation menu"></Image></button>
                </div>
                <div className="flex justify-center align-center">WOW OK</div>
                <button className="p-2" onClick={swichColorMode}>
                    <Image src={darkMode ? moon : sun} alt="switch light and dark mode" />
                </button>
            </header>
            <div className={navMenu ? "fixed justify-between items-center w-full md:flex md:w-auto md:order-1" : "hidden"}>
                <ul className="flex flex-col p-4 mt-12 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="block py-2 pr-4 pl-3  bg-blue-500 text-text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:white dark:hover:bg-gray-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent dark:border-gray-700"><Link href="/">Home</Link></li>
                    <li className="block py-2 pr-4 pl-3 text-text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:white dark:hover:bg-gray-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent dark:border-gray-700"><Link href="/blog">Posts</Link></li>
                </ul>
            </div>
        </>
    )
}

const Footer: NextPage = () => {
    return (
        <>
        <footer className="h-full">
            <div className="flex align-bottom">GitHub Twitter etc.</div>
        </footer>
        </>
    )
}

const Layout = (props: { children: ReactElement }) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout