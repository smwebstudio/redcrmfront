'use client'
import React, { useState } from 'react'
import { Carousel } from 'antd'
import EstateItem from '@/components/Estate/estate-item'
import NextArrow from '@/components/Carousel/NextArrow'
import PrevArrow from '@/components/Carousel/PrevArrow'
import { useMediaQuery } from 'react-responsive'

export function EstateCarousel({ saleEstates }) {
    console.log('saleEstatsses')
    console.log(saleEstates)

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const slidesToShow = isTabletOrMobile ? 1 : 3

    const settings = {
        nextArrow: isTabletOrMobile ? '' : <NextArrow />,
        prevArrow: isTabletOrMobile ? '' : <PrevArrow />,
    }

    const [estatesData, setEstatesData] = useState(saleEstates)
    // useEffect(() => {
    //     fetch(apiURL + 'api/estates/' + props.type)
    //         .then(res => res.json())
    //         .then(data => {
    //             setEstatesData(data)
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    // }, [])

    return (
        <Carousel
            className="mt-3 "
            slidesToShow={slidesToShow}
            centerPadding={'0px'}
            centerMode={true}
            arrows
            {...settings}>
            {estatesData?.data.map((item, index) => (
                <EstateItem key={index} item={item} />
            ))}
        </Carousel>
    )
}

export default EstateCarousel
