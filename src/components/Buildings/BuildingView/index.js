'use client'
import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useTranslation } from '@/app/i18n/client'
import StyledBuildingView from '@/components/Buildings/BuildingView/style'
import { isMobile } from 'react-device-detect'
import BuildingMobileView from '@/components/Buildings/BuildingView/BuildingMobileView'
import BuildingDesktopView from '@/components/Buildings/BuildingView/BuildingDesktopView'
import PlanList from '@/components/Buildings/BuildingView/PlanList'
import SingleBuildingMap from '@/components/Buildings/BuildingView/SingleBuildingMap'

function BuildingDetails({ lng, building }) {
    const { t } = useTranslation(lng, 'common')

    return (
        <StyledBuildingView>
            <>
                {isMobile ? (
                    <BuildingMobileView lng={lng} building={building} />
                ) : (
                    <BuildingDesktopView lng={lng} building={building} />
                )}
                <PlanList lng={lng} building={building} />
                {building.project.coordinates && (
                    <SingleBuildingMap building={building} />
                )}
            </>
        </StyledBuildingView>
    )
}

export default BuildingDetails
