import styled from 'styled-components'
import React from 'react'

const StyledEstateCarousel = styled.div`
    .ant-carousel .slick-prev {
        left: calc(100% - 70px) !important;
        top: -24px !important;
    }

    .ant-carousel .slick-next {
        top: -24px !important;
    }

    @media only screen and (max-width: 991px) {
    }
`

export default StyledEstateCarousel
