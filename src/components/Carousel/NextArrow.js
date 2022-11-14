import React from "react";

const NextArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', position: 'absolute', top: '-48px', right: '25px' }}
            onClick={onClick}
        />
    )
}

export default NextArrow;
