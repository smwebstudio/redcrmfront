import styled from 'styled-components'
import React from 'react'
import { Button } from 'antd'

const StyledIconButton = styled(Button)`
    background: var(--main-color-one) !important;

    span {
        color: #fff !important;
        font-size: 13px;
        font-weight: 400;
    }
`

export default StyledIconButton
