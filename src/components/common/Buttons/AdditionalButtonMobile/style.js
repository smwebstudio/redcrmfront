import styled from 'styled-components'
import React from 'react'
import { Button } from 'antd'

const StyledAdditionalButtonMobile = styled(Button)`
    background: #fff;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 0;
    padding: 0;

    span {
        color: #414141 !important;
        font-size: 13px;
        font-weight: 400;
    }

    @media only screen and(max-width: 991px) {
        width: 100%;
    }
`

export default StyledAdditionalButtonMobile
