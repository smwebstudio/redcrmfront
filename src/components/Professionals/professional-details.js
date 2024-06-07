'use client'
import React from 'react'
import { Col, Divider, Rate, Row, Typography } from 'antd'
import ContactSimpleForm from '@/components/Forms/contact-simple-form'
import EstateProfessionalList from '@/components/Estate/estate-professional-list'
import ProfessionalInfo from '@/components/Professionals/professional-info'
import AppImage from '@/components/common/Image/AppImage'
import AppTabs from '@/components/common/Tabs/AppTabs'

const { Text } = Typography

function ProfessionalDetails(props) {
    console.error('props')
    console.error(props.professionalItem.data)

    const professional = props.professionalItem.data
    let publicUrl = process.env.PUBLIC_URL + '/'
    let professions = professional.professions
    let estatesLabel = 'Հայտարարություններ (' + professional.estates_count + ')'
    return (
        <Row className={'container mt-4'}>
            <Col sm={6}>
                <div
                    className={
                        'professionalDetails bg-white pt-4 flex flex-col justify-center items-center mb-5'
                    }>
                    <AppImage
                        alt={'Red Group'}
                        className={'avatar'}
                        src={professional.profile_picture}
                    />
                    <Text strong className="mt-2 mb-2">
                        {professional.full_name}
                    </Text>
                    <Text className="mb-2 text-center">
                        {professions.map((profession, index, row) =>
                            index === row.length - 1 ? (
                                <span key={`${index}`}>
                                    {profession.name_arm}
                                </span>
                            ) : (
                                <span key={`${index}`}>
                                    {profession.name_arm},{' '}
                                </span>
                            ),
                        )}
                    </Text>
                    <div className={'mb-3'}>
                        <Rate defaultValue={professional.rating} />
                    </div>
                    <div>
                        <Text className="flex mb-1 justify-content-start text-dark font-size-12">
                            <AppImage
                                alt={'Red Group'}
                                className="mr-2"
                                src={publicUrl + 'assets/img/svg/envelope.svg'}
                            />
                            <span className="align-self-center">
                                {professional.email}
                            </span>
                        </Text>
                        <Text className="d-flex justify-content-start text-dark font-size-12">
                            <AppImage
                                alt={'Red Group'}
                                className="mr-2"
                                src={publicUrl + 'assets/img/svg/mobile.svg'}
                            />
                            <span className="align-self-center">
                                {professional.phone_1}
                            </span>
                        </Text>
                    </div>
                </div>

                <Divider />
                <ContactSimpleForm />
            </Col>
            <Col xs={24} sm={18} className={'pl-5 pt-2'}>
                <AppTabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'Մասնագետի մասին ինֆորմացիա',
                            key: '1',
                            children: (
                                <ProfessionalInfo professional={professional} />
                            ),
                        },
                        {
                            label: estatesLabel,
                            key: '2',
                            children: (
                                <EstateProfessionalList
                                    id={professional.user?.id}
                                    estatesCount={professional.estates_count}
                                />
                            ),
                        },
                    ]}
                />
            </Col>
        </Row>
    )
}

export default ProfessionalDetails
