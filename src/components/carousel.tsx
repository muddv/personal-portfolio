import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'

function CarouselItem(props: { imageSrc: StaticImageData["src"] }) {
    return (
        <>
            <div>wow</div>
            <div>
                <Image src={props.imageSrc} alt="carousel item"></Image>
            </div>
        </>
    )
}

const Carousel: NextPage = () => {
    const [carouselItem, setCarouselItem] = useState(0)
    function handleClick() {
        if (carouselItem < 2) {
            setCarouselItem(carouselItem + 1)
        }
    }
    function handleLastClick() {
        if (carouselItem > 0) {
            setCarouselItem(carouselItem - 1)
        }
    }
    let carouselSrc = [one, two, three]
    return (
        <>
            <div>
                CAROUSEL WOW
                <CarouselItem imageSrc={carouselSrc[carouselItem] as unknown as StaticImageData["src"]}></CarouselItem>
                <div>{carouselItem}</div>
                <button className="border-2 border-black bg-transparent hover:bg-slate-700" onClick={handleClick}>next items</button>
                <button className="ml-2 border-2 border-black bg-transparent hover:bg-slate-700" onClick={handleLastClick}>last items</button>
            </div>
        </>
    )
}

export default Carousel