import styled from 'styled-components'
import React from 'react'
import { Button } from 'antd'

const StyledRedButton = styled(Button)`
    background: var(--main-color-one) !important;

    span {
        color: #fff !important;
        font-size: 13px;
        font-weight: 400;
    }

    @media only screen and (max-width: 991px) {
        width: 100%;
    }
`

export default StyledRedButton
