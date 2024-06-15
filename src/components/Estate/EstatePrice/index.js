import styled from 'styled-components'
import { Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography

const EstatePriceStyled = styled(Paragraph)`
    &&& {
        color: #d8002c;
        display: inline;
        font-size: inherit;
        line-height: inherit;
    }

    @media only screen and (max-width: 991px) {
        &&& {
            font-size: 20px;
        }
    }
`

const EstatePrice = ({ children, ...props }) => {
    return <EstatePriceStyled {...props}>{children}</EstatePriceStyled>
}

export default EstatePrice
