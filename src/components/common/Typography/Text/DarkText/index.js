import styled from 'styled-components'
import { Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const DarkTextStyled = styled(Text)`
    &&& {
        color: #373b3e;
        font-size: 13px;
        line-height: 18px;
    }
`

const DarkText = ({ children, ...props }) => {
    return <DarkTextStyled {...props}>{children}</DarkTextStyled>
}

export default DarkText
