'use client'
import React from 'react'
import Link from 'next/link'
import { Col } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import WhiteHeading1 from '@/components/Typography/Heading1/WhiteHeading1'
import { useTranslation } from '@/app/i18n/client'

function Banner(props) {
    const { t } = useTranslation(props.lng, 'common')

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
                                Լավագույն առաջարկները մեզ մոտ
                            </WhiteHeading1>
                            <h6 className="title text-center text-white mb-5">
                                Վաճառեք տներ, հողատարածքներ, բնակարաններ, ձեզ
                                հարմար տարբերակով
                            </h6>
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

export default Banner
