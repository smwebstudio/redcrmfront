'use client'
import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import { isMobile } from 'react-device-detect'
import EstateMobileView from '@/components/Estate/View/EstateMobileView'
import EstateDesktopView from '@/components/Estate/View/EstateDesktopView'

const EstateView = ({ estateData, hotEstates, lng }) => {
    return (
        <>
            {isMobile ? (
                <EstateMobileView
                    lng={lng}
                    estateData={estateData}
                    hotEstates={hotEstates}
                />
            ) : (
                <EstateDesktopView
                    lng={lng}
                    estateData={estateData}
                    hotEstates={hotEstates}
                />
            )}
        </>
    )
}

export default EstateView
