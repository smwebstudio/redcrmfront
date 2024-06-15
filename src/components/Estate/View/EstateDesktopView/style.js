import styled from 'styled-components'
import React from 'react'

const StyledEstateDesktopView = styled.div`
    padding: 24px 0;

    .image-gallery-left-nav,
    .image-gallery-right-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
        height: 40px;
        width: 40px;
        top: 50%;
        border-radius: 50%;
        transform: translateY(-50%);
        background: #373b3e;
    }

    .image-gallery-right-nav {
        right: 20px;
    }

    .image-gallery-left-nav {
        left: 20px;
    }

    .image-gallery-left-nav .image-gallery-svg,
    .image-gallery-right-nav .image-gallery-svg {
        height: 35px;
        width: 18px;
    }

    .image-gallery-icon:hover {
        color: #fff;
    }

    @media only screen and (max-width: 991px) {
        padding: 0px 0;
    }
`

export default StyledEstateDesktopView
