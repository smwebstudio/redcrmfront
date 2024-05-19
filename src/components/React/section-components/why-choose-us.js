'use client'
import React from 'react'
import sectiondata from 'data/sections.json'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import { Col, Row } from 'antd'
import AppImage from '@/components/common/Image/AppImage'

const WhyChooseUs = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    let data = sectiondata.whychooseus

    return (
        <ContainerFluid
            className={
                'why-choose-us-area bg-gray pd-top-90 pd-bottom-60 text-xs-center'
            }>
            <ContainerBoxed className="container">
                <Row gutter={32}>
                    {data.items.map((item, i) => (
                        <Col key={i} xs={12} sm={8}>
                            <div className={'single-intro text-left '}>
                                <div className="thumb">
                                    <AppImage
                                        alt={'Red Group'}
                                        src={publicUrl + item.icon}
                                    />
                                </div>
                                <div className="details mt-2">
                                    <h6 className="title">{item.title}</h6>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </ContainerBoxed>
        </ContainerFluid>
    )
}

export default WhyChooseUs
