'use client'
import React from 'react'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import WhiteHeading1 from '@/components/Typography/Heading1/WhiteHeading1'
import WhiteParagraph from '@/components/Typography/paragraph/WhiteParagraph'
import { Col, Row } from 'antd'

export const BlogBanner = ({ lng }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    const inlineStyle = {
        backgroundImage:
            'url(' + publicUrl + '/assets/img/banner/main-banner.jpg)',
    }

    return (
        <ContainerFluid
            className="pt-20 pb-20 mb-3 mb-sm-5"
            style={inlineStyle}>
            <ContainerBoxed>
                <Row justify={'center'} align={'middle'}>
                    <Col xs={24} md={8}>
                        <WhiteHeading1 className="text-center text-white">
                            RED INVEST GROUP-ի մասին
                        </WhiteHeading1>
                        <WhiteParagraph className="title text-center text-white mb-5 pl-5 pr-5">
                            We are ready and willing to solve your problems
                            within our services in the real estate market,
                            listen and accept your opinion about good work and
                            criticize our team for omissions.
                        </WhiteParagraph>
                    </Col>
                </Row>
            </ContainerBoxed>
        </ContainerFluid>
    )
}

export default BlogBanner
