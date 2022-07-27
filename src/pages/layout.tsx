import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import sun from '../images/sun.svg'

const Layout: NextPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    function swichColorMode() {
        setDarkMode(!darkMode);
        darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark")
    }

    return (
        <>
            <header className="flex justify-end mr-11 gap-2">
                <Link href="/">Home</Link> 
                <Link href="/blog">Posts</Link>
            </header>
            <button onClick={swichColorMode}
                className="ml-11">
                <Image
                    src={sun}
                    alt="switch light and dark mode"
                />
            </button>
        </>

    )
}

export default Layout