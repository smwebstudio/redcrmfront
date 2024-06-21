'use client'
import React from 'react'
import AppImage from '@/components/common/Image/AppImage'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { Col, Row, Tag, Timeline } from 'antd'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'
import { ClockCircleOutlined } from '@ant-design/icons'
import { isMobile } from 'react-device-detect'
import DarkParagraph from '@/components/common/Typography/Paragraph/DarkParagraph'

export const AboutContentEnglish = ({ lng }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <>
            <ContainerBoxed className={'pb-10'}>
                <Row gutter={[128, 40]} align={'middle'}>
                    <Col xs={24} sm={10}>
                        <Row gutter={[16, 16]} className={'mt-10'}>
                            <Col xs={24}>
                                <DarkHeading1>Our Mission</DarkHeading1>
                            </Col>
                            <Col xs={24}>
                                <DarkParagraph>
                                    We aim to help people understand the real
                                    estate market and make informed decisions by
                                    uncovering their financial potential and
                                    turning it into opportunities for a better
                                    quality of life.
                                </DarkParagraph>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} sm={14}>
                        <Timeline
                            mode={isMobile ? 'left' : 'alternate'}
                            items={[
                                {
                                    label: '2014 թ.',
                                    children: (
                                        <>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                Establishment of RED Invest
                                                Group
                                            </Tag>
                                        </>
                                    ),
                                    dot: (
                                        <ClockCircleOutlined className="timeline-clock-icon" />
                                    ),
                                },
                                {
                                    label: '2018 թ.',
                                    children: (
                                        <>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                Entered the secondary market
                                            </Tag>
                                        </>
                                    ),
                                    dot: (
                                        <ClockCircleOutlined className="timeline-clock-icon" />
                                    ),
                                },
                                {
                                    label: '2022 թ.',
                                    children: (
                                        <>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                Entered the primary market
                                            </Tag>
                                        </>
                                    ),
                                    dot: (
                                        <ClockCircleOutlined className="timeline-clock-icon" />
                                    ),
                                },
                                {
                                    label: '2023 թ.',
                                    children: (
                                        <>
                                            <Tag bordered={false} color={'red'}>
                                                Investment market
                                            </Tag>
                                        </>
                                    ),
                                    dot: (
                                        <ClockCircleOutlined className="timeline-clock-icon" />
                                    ),
                                },
                                {
                                    label: '2024 թ.',
                                    children: (
                                        <>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={'mb-2'}>
                                                Team of 50 members
                                            </Tag>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                New office at Buzand 107
                                            </Tag>
                                        </>
                                    ),
                                    dot: (
                                        <ClockCircleOutlined className="timeline-clock-icon" />
                                    ),
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </ContainerBoxed>
            <ContainerFluid className={'bg-gray py-20'}>
                <ContainerBoxed className={'pb-10'}>
                    <Row gutter={[24, 48]}>
                        <Col xs={24}>
                            <DarkHeading2>Primary Market</DarkHeading2>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Row className={'bg-white p-4'} gutter={[16, 16]}>
                                <Col xs={24}>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={
                                            publicUrl +
                                            'assets/img/svg/about/1.svg'
                                        }
                                    />
                                </Col>
                                <Col xs={24}>
                                    <Row gutter={16}>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                2320 units of property
                                            </Tag>
                                        </Col>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                27 ongoing projects, 6 of which
                                                will be completed in 2024
                                            </Tag>
                                        </Col>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                9 completed projects, 7 handed
                                                over for operation
                                            </Tag>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    How to Purchase Property
                                </DarkHeading3>
                                <SmallParagraph>
                                    When buying property from the primary
                                    market:
                                </SmallParagraph>
                                <ul
                                    className={
                                        'text-xs list-disc pl-10 my-4 flex flex-col gap-4'
                                    }>
                                    <li>
                                        Mortgage loans with income tax return
                                        benefits
                                    </li>
                                    <li>
                                        Payment in installments: Pay for the
                                        property value throughout the
                                        construction period without interest
                                        rates
                                    </li>
                                </ul>
                                <SmallParagraph>
                                    RED Invest Group works with developers only
                                    under exclusive sales rights
                                </SmallParagraph>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]} className={'mt-12'}>
                        <Col xs={24}>
                            <DarkHeading2>Secondary Market</DarkHeading2>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Row className={'bg-white p-4'} gutter={[16, 16]}>
                                <Col xs={24}>
                                    <AppImage
                                        alt={'Red Group'}
                                        src={
                                            publicUrl +
                                            'assets/img/svg/about/1.svg'
                                        }
                                    />
                                </Col>
                                <Col xs={24}>
                                    <Row gutter={16}>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                13,500 properties for sale
                                                (apartments, houses, commercial
                                                spaces, land plots)
                                            </Tag>
                                        </Col>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                9300 properties for rent
                                            </Tag>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={{ span: 12 }}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading2>
                                    How to Purchase Property
                                </DarkHeading2>
                                <DarkParagraph>
                                    When buying property from the secondary
                                    market:
                                </DarkParagraph>
                                <ul
                                    className={
                                        'text-xs list-disc pl-10 my-4 flex flex-col gap-4'
                                    }>
                                    <li>
                                        Mortgage loans through your preferred
                                        bank
                                    </li>
                                    <li>
                                        Affordable Housing for Young Families
                                        state target program
                                    </li>
                                    <li>Cash payment</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </ContainerBoxed>
                <ContainerFluid className={'bg-white py-10'}>
                    <ContainerBoxed className={'mt-20'}>
                        <Col xs={24} className={'mb-10'}>
                            <DarkHeading1>OUR TEAM</DarkHeading1>
                        </Col>
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/04.png'}
                                />
                                <DarkHeading3>FOUNDER AND CEO</DarkHeading3>
                                <DarkHeading2>Arsen Avetisyan</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/01.png'}
                                />
                                <DarkHeading3>DEPUTY DIRECTOR</DarkHeading3>
                                <DarkHeading2>Ani Margaryan</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/06.png'}
                                />
                                <DarkHeading3>
                                    BUSINESS DEVELOPMENT DIRECTOR
                                </DarkHeading3>
                                <DarkHeading2>
                                    Hovhannes Basentsyan
                                </DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/07.png'}
                                />
                                <DarkHeading3>
                                    HEAD OF PEOPLE AND CULTURE DEPARTMENT
                                </DarkHeading3>
                                <DarkHeading2>Sona Grigoryan</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/02.png'}
                                />
                                <DarkHeading3>
                                    HEAD OF SALES DEPARTMENT
                                </DarkHeading3>
                                <DarkHeading2> Ani Kocharyan</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/05.png'}
                                />
                                <DarkHeading3>
                                    HEAD OF INTERNATIONAL AND
                                    <br /> INVESTMENT PROPERTY SALES DEPARTMENT
                                </DarkHeading3>
                                <DarkHeading2>Levon Gasparyan</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/08.png'}
                                />
                                <DarkHeading3>
                                    HEAD OF MARKETING DEPARTMENT
                                </DarkHeading3>
                                <DarkHeading2>
                                    {' '}
                                    Stephanie Gyokchyan
                                </DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/03.png'}
                                />
                                <DarkHeading3>
                                    HEAD OF RECRUITMENT DEPARTMENT
                                </DarkHeading3>
                                <DarkHeading2>Anika Barseghyan</DarkHeading2>
                            </Col>
                        </Row>
                    </ContainerBoxed>
                </ContainerFluid>
            </ContainerFluid>
        </>
    )
}

export default AboutContentEnglish
