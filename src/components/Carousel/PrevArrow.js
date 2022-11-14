import React from "react";

const PrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', position: 'absolute', top: '-48px', left: 'calc(100% - 75px)' }}
            onClick={onClick}
        />
    )
}

export default PrevArrow
