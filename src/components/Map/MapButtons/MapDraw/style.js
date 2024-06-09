import styled from 'styled-components'
import React from 'react'

const StyledMapDraw = styled.div`
    position: absolute;
    right: 10px;
    top: 0;
    padding: 4px 16px;

    .map-start-draw {
        border-radius: 40px 0 0 40px;
        display: flex;
        align-items: center;
        padding: 2px 16px 2px 2px !important;

        .ant-image {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #e62545;
            margin-right: 8px;
            display: flex;
            align-items: center;
            text-align: center;

            img {
                height: 24px;
            }
        }
    }

    @media only screen and (max-width: 991px) {
    }
`

export default StyledMapDraw
