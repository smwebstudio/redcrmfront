import React from 'react'
import { Image } from 'antd'

const PreviewImage = ({ ...props }) => {
    return <Image {...props} preview={true} />
}

export default PreviewImage
