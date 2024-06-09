import styled, { createGlobalStyle } from 'styled-components'
import React from 'react'

const StyledEstateFilters = styled.div`
    .ant-select-single .ant-select-selector {
        font-size: 12px;
        line-height: 1.5;
    }

    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        width: 100%;
        height: 100%;
        padding: 0 8px;
    }

    @media (max-width: 991px) {
        .ant-form-item .ant-form-item-label > label {
            font-size: 12px;
        }

        .ant-radio-button-wrapper {
            font-size: 12px;
            line-height: 32px;
        }

        .ant-select-single .ant-select-selector {
            font-size: 12px;
            line-height: 1.5;
        }

        .ant-form-item .ant-form-item-label {
            padding: 0 0 0px;
        }
    }
`

export const FilterGlobalStyles = createGlobalStyle`
    @media (max-width: 768px) {
        .ant-drawer .ant-drawer-body {
            padding: 12px;
        }
    }
`

export default StyledEstateFilters
