import styled from 'styled-components'
import { Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography

const DarkParagraphStyled = styled(Paragraph)`
    color: #414141;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 0px !important;
`

const DarkParagraph = ({ children, ...props }) => {
    return <DarkParagraphStyled {...props}>{children}</DarkParagraphStyled>
}

export default DarkParagraph
