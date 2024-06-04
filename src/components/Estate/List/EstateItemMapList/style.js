import styled from 'styled-components'
import React from 'react'

const StyledEstateItemMapList = styled.div`
    .ant-image {
        display: flex;
        max-height: 260px;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        width: auto;

        .ant-image-img {
            width: auto;
            height: auto;
            vertical-align: middle;
        }
    }

    @media only screen and (max-width: 991px) {
    }
`

export default StyledEstateItemMapList
