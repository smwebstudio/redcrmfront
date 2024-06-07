import StyledCompareEstateButton from '@/components/Estate/CompareEstateButton/style'
import { toggleEstateComparison } from '@/lib/helper'
import { SwapOutlined } from '@ant-design/icons'

export const CompareEstateButton = ({ estate }) => {
    return (
        <StyledCompareEstateButton
            onClick={() => toggleEstateComparison(estate)}>
            <SwapOutlined
                style={{
                    fontSize: 24,
                    marginRight: 30,
                    marginLeft: 30,
                }}
            />
        </StyledCompareEstateButton>
    )
}
