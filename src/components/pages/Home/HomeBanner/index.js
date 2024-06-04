'use client'
import React from 'react'
import Link from 'next/link'
import { Col } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import WhiteHeading1 from '@/components/Typography/Heading1/WhiteHeading1'
import { useTranslation } from '@/app/i18n/client'
import WhiteParagraph from '@/components/Typography/paragraph/WhiteParagraph'

const HomeBanner = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')

    let publicUrl = process.env.PUBLIC_URL + '/'

    const inlineStyle = {
        backgroundImage:
            'url(' + publicUrl + '/assets/img/banner/main-banner.jpg)',
    }

    return (
        <ContainerFluid>
            <div className="banner-area pd-top-100" style={inlineStyle}>
                <ContainerBoxed>
                    <div className="banner-inner-wrap">
                        <div className="banner-inner text-center align-self-center mt-5">
                            <WhiteHeading1 className="text-center text-white">
                                {t('label.red.bestOffers')}
                            </WhiteHeading1>
                            <WhiteParagraph className="title text-center text-white mb-5">
                                {t('label.red.sellProperties')}
                            </WhiteParagraph>
                            <Col xs={0} sm={24}>
                                <Link
                                    href="/estates"
                                    className="btn btn-main-transparent-dark pr-3 pl-3">
                                    {t('button.learnMore')}
                                </Link>
                            </Col>
                        </div>
                    </div>
                </ContainerBoxed>
            </div>
        </ContainerFluid>
    )
}

export default HomeBanner