import styled from 'styled-components'
import React from 'react'
import { Button } from 'antd'

const StyledAdditionalButton = styled(Button)`
    background: #fff;

    span {
        color: #414141 !important;
        font-size: 13px;
        font-weight: 400;
    }

    @media only screen and (max-width: 991px) {
        width: 100%;
    }
`

export default StyledAdditionalButton
