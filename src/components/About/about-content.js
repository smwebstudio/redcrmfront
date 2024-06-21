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

export const AboutContent = ({ lng }) => {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <>
            <ContainerBoxed className={'pb-10'}>
                <Row gutter={[128, 40]} align={'middle'}>
                    <Col xs={24} sm={10}>
                        <Row gutter={[16, 16]} className={'mt-10'}>
                            <Col xs={24}>
                                <DarkHeading1>Մեր Առաքելությունը</DarkHeading1>
                            </Col>
                            <Col xs={24}>
                                <DarkParagraph>
                                    Մենք միտված ենք օգնել մարդկանց հասկանալ
                                    անշարժ գույքի շուկան, կայացնել ճիշտ
                                    որոշումներ՝ բացահայտելով նրանց ֆինանսական
                                    ներուժը և այն վերածելով հնարավորությունների՝
                                    հանուն կյանքի ավելի լավ որակի:
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
                                                RED Invest Group-ի հիմնադրում
                                            </Tag>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                Երկրորդային շուկա
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
                                                Առաջնային շուկա
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
                                                ՄԱՍՆԱՃՅՈՒՂ Ա-ում
                                            </Tag>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                DALAN TECHNOPARK
                                            </Tag>
                                            <Tag
                                                bordered={false}
                                                color={'red whitespace-normal'}>
                                                ՆԵՐԴՐՈՒՄԱՅԻՆ ՇՈՒԿԱ
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
                                                Դուբայ (ԱՄԷ)
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
                                                Մեծ թիմ
                                            </Tag>
                                            <Tag
                                                bordered={false}
                                                color={'red'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                Նոր գրասենյակ՝ Բուզանդ 107
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
                            <DarkHeading2>
                                Առաջնային շուկայի ծառայություններ
                            </DarkHeading2>
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
                                                2320 միավոր գույք
                                            </Tag>
                                        </Col>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                27 ընթացիկ նախագիծ, որից 6-ը
                                                կհանձնվի 2024 թ.-ին
                                            </Tag>
                                        </Col>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                9 ավարտված նախագիծ, 7-ը հանձնված
                                                շահագործման
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
                                    Ինչ տարբերակով գույք ձեռք բերել
                                </DarkHeading3>
                                <SmallParagraph>
                                    Առաջնային շուկայից՝ կառուցապատողից գույք
                                    ձեռք բերելու դեպքում
                                </SmallParagraph>
                                <ul
                                    className={
                                        'text-xs list-disc pl-10 my-4 flex flex-col gap-4'
                                    }>
                                    <li>
                                        Հիփոթեքային վարկավորման միջոցով
                                        Եկամտահարկի վերադարձի մասին օրենք
                                    </li>
                                    <li>
                                        Տարաժամկետ վճարման եղանակով
                                        Շինարարության ողջ ընթացքում գույքի
                                        արժեքի մարում առանց %-ների
                                    </li>
                                </ul>
                                <SmallParagraph>
                                    RED Invest Group-ը կառուցապատող
                                    ընկերությունների հետ աշխատում է միայն
                                    վաճառքի բացառիկ իրավունքի պայմանով
                                </SmallParagraph>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]} className={'mt-12'}>
                        <Col xs={24} className={'text-right'}>
                            <DarkHeading2>
                                Երկրորդային շուկայի ծառայություններ
                            </DarkHeading2>
                        </Col>
                        <Col xs={24} sm={{ span: 12, offset: 4 }}>
                            <div className={'bg-white p-4'}>
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/svg/about/1.svg'
                                    }
                                />
                                <DarkHeading2>
                                    Ինչ տարբերակով գույք ձեռք բերել
                                </DarkHeading2>
                                <DarkParagraph>
                                    Երկրորդային շուկայից՝ սեփականատիրոջից գույք
                                    ձեռք բերելու դեպքում
                                </DarkParagraph>
                                <ul
                                    className={
                                        'text-xs list-disc pl-10 my-4 flex flex-col gap-4'
                                    }>
                                    <li>
                                        Հիփոթեքային վարկավորման միջոցով Ձեր
                                        նախընտրած բանկի միջոցով
                                    </li>
                                    <li>
                                        «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»
                                        պետական նպատակային ծրագիր
                                    </li>
                                    <li>Կանխիկ եղանակով</li>
                                </ul>
                            </div>
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
                                                13,500 վաճառքի գույք
                                                (բնակարաններ, առանձնատներ,
                                                կոմերցիոն տարածքներ,
                                                հողատարածքներ)
                                            </Tag>
                                        </Col>
                                        <Col>
                                            <Tag
                                                color={'error'}
                                                className={
                                                    'mb-2 whitespace-normal'
                                                }>
                                                9300 վարձակալության գույքեր
                                            </Tag>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ContainerBoxed>
                <ContainerFluid className={'bg-white py-10'}>
                    <ContainerBoxed className={'mt-20'}>
                        <Col xs={24} className={'mb-10'}>
                            <DarkHeading1>ՄԵՐ ԹԻՄԸ</DarkHeading1>
                        </Col>
                        <Row gutter={[24, 24]}>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/04.png'}
                                />
                                <DarkHeading3>ՀԻՄՆԱԴԻՐ ՏՆՕՐԵՆ</DarkHeading3>
                                <DarkHeading2>Արսեն Ավետիսյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/01.png'}
                                />
                                <DarkHeading3>ՓՈԽՏՆՕՐԵՆ</DarkHeading3>
                                <DarkHeading2>Անի Մարգարյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/06.png'}
                                />
                                <DarkHeading3>
                                    ԲԻԶՆԵՍԻ ԶԱՐԳԱՑՄԱՆ ՏՆՕՐԵՆ
                                </DarkHeading3>
                                <DarkHeading2>Հովհաննես Բասենցյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/07.png'}
                                />
                                <DarkHeading3>
                                    ՄԱՐԴԻԿ և ՄՇԱԿՈՒՅԹ ԲԱԺՆԻ ՂԵԿԱՎԱՐ
                                </DarkHeading3>
                                <DarkHeading2>Սոնա Գրիգորյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/02.png'}
                                />
                                <DarkHeading3>
                                    ՎԱՃԱՌՔԻ ԲԱԺՆԻ ՂԵԿԱՎԱՐ
                                </DarkHeading3>
                                <DarkHeading2>Անի Քոչարյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/05.png'}
                                />
                                <DarkHeading3>
                                    ՄԻՋԱԶԳԱՅԻՆ ԵՎ ՆԵՐԴՐՈՒՄԱՅԻՆ
                                    <br /> ԳՈՒՅՔԵՐԻ ՎԱՃԱՌՔԻ ԲԱԺՆԻ ՂԵԿԱՎԱՐ
                                </DarkHeading3>
                                <DarkHeading2>Լևոն Գասպարյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/08.png'}
                                />
                                <DarkHeading3>
                                    ՄԱՐՔԵԹԻՆԳԻ ԲԱԺՆԻ ՂԵԿԱՎԱՐ
                                </DarkHeading3>
                                <DarkHeading2>Ստեֆանի Գյոկչյան</DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <AppImage
                                    alt={'Red Group'}
                                    width={320}
                                    height={320}
                                    src={publicUrl + 'assets/img/team/03.png'}
                                />
                                <DarkHeading3>
                                    ՆԵՐԳՐԱՎՄԱՆ ԲԱԺՆԻ ՂԵԿԱՎԱՐ
                                </DarkHeading3>
                                <DarkHeading2>Անիկա Բարսեղյան</DarkHeading2>
                            </Col>
                        </Row>
                    </ContainerBoxed>
                </ContainerFluid>
            </ContainerFluid>
        </>
    )
}

export default AboutContent
