import styled from 'styled-components'
import React from 'react'
import { Button } from 'antd'

const StyledMapToggleButton = styled(Button)`
    position: absolute;
    right: 20px;
    top: 300px;
    padding: 4px 16px;

    @media (max-width: 768px) {
        display: none;
    }
`

export default StyledMapToggleButton
