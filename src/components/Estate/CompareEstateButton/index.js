import StyledCompareEstateButton from '@/components/Estate/CompareEstateButton/style'
import { toggleEstateComparison } from '@/lib/helper'
import { SwapOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

export const CompareEstateButton = ({ estate }) => {
    const [isCompared, setIsCompared] = useState(false)

    useEffect(() => {
        const compareEstates =
            JSON.parse(localStorage.getItem('compareEstates')) || []
        setIsCompared(compareEstates.includes(estate.id))
    }, [estate.id])

    const handleClick = () => {
        const updatedCompareEstates = toggleEstateComparison(estate)
        setIsCompared(updatedCompareEstates.includes(estate.id))
    }

    return (
        <StyledCompareEstateButton onClick={handleClick}>
            <SwapOutlined
                style={{
                    fontSize: 20,
                    color: isCompared ? '#d8002c' : 'gray',
                }}
            />
        </StyledCompareEstateButton>
    )
}
