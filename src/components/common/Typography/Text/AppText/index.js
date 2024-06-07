import styled from 'styled-components'
import { Typography } from 'antd'
import React from 'react'

const { Text } = Typography

const AppTextStyled = styled(Text)`
    &&& {
        color: #959595;
        font-size: 12px;
        line-height: 20px;
    }
`

const AppText = ({ children, ...props }) => {
    return <AppTextStyled {...props}>{children}</AppTextStyled>
}

export default AppText
