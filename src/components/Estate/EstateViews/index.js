import styled from 'styled-components'
import React from 'react'
import { EyeOutlined } from '@ant-design/icons'

const EstateViewCountStyled = styled.div`
    &&& {
        display: flex;
        align-items: center;
    }
`

const EstateViewCount = ({ viewCount }) => {
    return (
        <EstateViewCountStyled>
            <EyeOutlined
                style={{
                    fontSize: 24,
                    marginRight: 10,
                }}
            />
            {viewCount}
        </EstateViewCountStyled>
    )
}

export default EstateViewCount
