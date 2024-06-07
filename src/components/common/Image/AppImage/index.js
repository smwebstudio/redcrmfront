import React from 'react'
import { Image } from 'antd'

const AppImage = ({ ...props }) => {
    return <Image {...props} preview={false} />
}

export default AppImage
