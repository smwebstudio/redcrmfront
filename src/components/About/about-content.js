'use client'
import React from 'react'
import AppImage from '@/components/common/Image/AppImage'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { Col, Row } from 'antd'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'
import DarkHeading3 from '@/components/Typography/Heading3/DarkHeading3'

export const AboutContent = ({ lng }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <>
            <ContainerBoxed className={'pb-10'}>
                <Row gutter={128}>
                    <Col xs={24} sm={8}>
                        <DarkHeading1>
                            The history and mission of RED Invest Group
                        </DarkHeading1>
                    </Col>
                    <Col xs={24} sm={16}>
                        <SmallParagraph>
                            Red invest group was founded on January 10, 2014.
                        </SmallParagraph>
                        <SmallParagraph>
                            {' '}
                            The main working areas are the communities of
                            Kentron (City Center) and Arabkir in Yerevan.
                        </SmallParagraph>
                        <SmallParagraph>
                            {' '}
                            Specialists of the company are masters of their
                            business, they have fast, proactive and creative
                            minds.
                        </SmallParagraph>
                        <SmallParagraph>
                            The main goal and priority of the company is to find
                            solutions to the problems of our clients within the
                            full range of services, with the help of a team of
                            professionals, as well as to be stable and reliable
                            partner, to act for the development and prosperity
                            of our economic environment, the social consequence
                            of which is customer satisfaction, improving the
                            quality of services offered in the market, forming
                            and developing a market segment with stable
                            foundations and traditions.
                        </SmallParagraph>
                    </Col>
                </Row>
            </ContainerBoxed>
            <ContainerFluid className={'bg-gray pt-24 pb-24'}>
                <ContainerBoxed>
                    <Row gutter={[24, 48]}>
                        <Col xs={24}>
                            <DarkHeading2>
                                Առաջնային շուկայի ծառայություններ
                            </DarkHeading2>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]} className={'mt-12'}>
                        <Col xs={24}>
                            <DarkHeading2>
                                Երկրորդային շուկայի ծառայություններ
                            </DarkHeading2>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading3>
                                    Sale of apartments and mansions in built-up
                                    residential areas
                                </DarkHeading3>
                                <SmallParagraph>
                                    Կարճ նկարագրություն Lorem Ipsum-ը
                                    տպագրության և տպագրական արդյունաբերության
                                    համար նախատեսված մոդելային տեքստ է:
                                </SmallParagraph>
                            </div>
                        </Col>
                    </Row>
                </ContainerBoxed>
            </ContainerFluid>
        </>
    )
}

export default AboutContent
