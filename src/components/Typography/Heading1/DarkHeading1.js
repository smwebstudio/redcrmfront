import styled from 'styled-components'
import { Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const DarkHeading1Styled = styled(Title)`
    &&& {
        color: #414141 !important;
        font-weight: 600;
        font-size: 25px;
        line-height: 28px;
    }
`

const DarkHeading1 = ({ children, ...props }) => {
    return (
        <div>
            <DarkHeading1Styled level={3} {...props}>
                {children}
            </DarkHeading1Styled>
        </div>
    )
}

export default DarkHeading1
