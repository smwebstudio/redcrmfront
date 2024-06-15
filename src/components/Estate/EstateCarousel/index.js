'use client'
import React, { useState } from 'react'
import { Carousel } from 'antd'
import NextArrow from '@/components/Carousel/NextArrow'
import PrevArrow from '@/components/Carousel/PrevArrow'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect'
import StyledEstateCarousel from '@/components/Estate/EstateCarousel/style'
import EstateItemGrid from '@/components/Estate/List/EstateItemGrid'

export const EstateCarousel = ({ estates }) => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const slidesToShow = isTabletOrMobile ? 1 : 3

    const settings = {
        nextArrow: isTabletOrMobile ? '' : <NextArrow />,
        prevArrow: isTabletOrMobile ? '' : <PrevArrow />,
    }

    const [estatesData, setEstatesData] = useState(estates)

    return (
        <StyledEstateCarousel>
            <Carousel
                className="mt-3 "
                slidesToShow={slidesToShow}
                centerPadding={'0px'}
                centerMode={true}
                arrows={!isMobile}
                {...settings}>
                {estatesData?.data.map((estate, index) => (
                    <EstateItemGrid key={index} estate={estate} />
                ))}
            </Carousel>
        </StyledEstateCarousel>
    )
}

export default EstateCarousel
