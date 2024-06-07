import React from 'react'

const SimpleWrapper = ({ children, ...props }) => {
    return <div {...props}>{children}</div>
}

export default SimpleWrapper
