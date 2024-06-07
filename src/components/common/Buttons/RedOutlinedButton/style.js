import styled from 'styled-components'
import React from 'react'
import { Button } from 'antd'

const StyledRedOutlinedButton = styled(Button)`
    background: #fff !important;
    border: 1px solid var(--main-color-one);

    span {
        color: var(--main-color-one) !important;
        font-size: 13px;
        font-weight: 400;
    }

    @media only screen and(max-width: 991px) {
        width: 100%;
    }
`

export default StyledRedOutlinedButton
