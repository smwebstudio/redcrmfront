import styled, { createGlobalStyle } from 'styled-components'
import React from 'react'

const StyledEstateMarker = styled.div`
    @media (max-width: 768px) {
    }
`

export const MapGlobalStyles = createGlobalStyle`
    @media (max-width: 768px) {
        //.ant-popover {
        //    position: fixed;
        //    bottom: 0px !important;
        //    margin: 0px auto;
        //    width: 100%;
        //
        //    ant-popover-content {
        //
        //    }
        //}
    }
`

export default StyledEstateMarker
