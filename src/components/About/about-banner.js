'use client'
import React from 'react'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import WhiteHeading1 from '@/components/Typography/Heading1/WhiteHeading1'
import { Col, Row } from 'antd'

export const AboutBanner = ({ lng }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const inlineStyle = {
        backgroundImage:
            'url(' + publicUrl + '/assets/img/banner/main-banner.jpg)',
    }

    return (
        <div className="banner-area pd-top-100" style={inlineStyle}>
            <ContainerBoxed className={'h-full flex items-center'}>
                <Row justify={'center'} align={'middle'}>
                    <Col xs={24}>
                        <WhiteHeading1 className="text-center text-white">
                            RED INVEST GROUP-ի մասին
                        </WhiteHeading1>
                    </Col>
                    <Col xs={24} md={12}>
                        <h6 className="title text-center text-white mb-5 pl-5 pr-5">
                            We are ready and willing to solve your problems
                            within our services in the real estate market,
                            listen and accept your opinion about good work and
                            criticize our team for omissions.
                        </h6>
                    </Col>
                </Row>
            </ContainerBoxed>
        </div>
    )
}

export default AboutBanner
