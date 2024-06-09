'use client'
import React from 'react'
import { useTranslation } from '@/app/i18n/client'
import WhiteHeading1 from '@/components/Typography/Heading1/WhiteHeading1'
import WhiteParagraph from '@/components/Typography/paragraph/WhiteParagraph'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

const BannerDevelopers = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')

    let publicUrl = process.env.PUBLIC_URL + '/'

    const inlineStyle = {
        backgroundImage:
            'url(' + publicUrl + '/assets/img/banner/main-banner.jpg)',
    }

    return (
        <div className="banner-area pd-top-100" style={inlineStyle}>
            <ContainerBoxed>
                <div className="banner-inner-wrap">
                    <div className="banner-inner text-center align-self-center mt-5">
                        <WhiteHeading1 className="text-center ">
                            Գնե՛ք բնակարաններ անմիջապես կառուցապատողից
                        </WhiteHeading1>
                        <WhiteParagraph className="text-center mb-5">
                            Մեզ մոտ կարող եք գտնել Ձեզ ամենահարմար առաջարկները
                        </WhiteParagraph>
                    </div>
                </div>
            </ContainerBoxed>
        </div>
    )
}

export default BannerDevelopers
