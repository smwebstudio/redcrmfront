'use client'
import React from 'react'
import Link from 'next/link'
import { Col, Image, Row, Select } from 'antd'
import AmOption from '@/components/Global/Languages/am-option'
import EnOption from '@/components/Global/Languages/en-option'
import RuOption from '@/components/Global/Languages/ru-option'
import { useRouter } from 'next/navigation'
// import { useAuth } from '@/hooks/auth'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { useTranslation } from '@/app/i18n/client'

export const AppTopbar = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')

    console.log(lng)
    // const { logout, user } = useAuth()

    const router = useRouter()
    const onChangeLanguage = lang => {
        console.log('lang.key')
        console.log(lang.key)
        router.push('/' + lang.key)
    }

    const user = false

    return (
        <ContainerBoxed>
            <div className="topbar-area">
                <div className="container nav-container">
                    <Row gutter={8} justify="center" align="middle">
                        <Col xs={4} sm={1}>
                            <Image
                                alt={'Red Group'}
                                src={'/assets/img/svg/phone.svg'}
                            />
                        </Col>
                        <Col xs={0} sm={11}>
                            <span>37496 908 900, 37411 970 908</span>
                        </Col>

                        <Col xs={4} sm={3} className={'border-right'}>
                            <Link href={'/compare'}>
                                <Row gutter={4} justify="center" align="middle">
                                    <Col
                                        xs={24}
                                        sm={4}
                                        className={'text-center'}>
                                        <Image
                                            alt={'Red Group'}
                                            src={'/assets/img/svg/compare.svg'}
                                        />
                                    </Col>
                                    <Col xs={0} sm={20}>
                                        {t('label.compare')}
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col xs={4} sm={3} className={'border-right'}>
                            <Row gutter={4} justify="center" align="middle">
                                <Col
                                    xs={24}
                                    sm={4}
                                    flex="auto"
                                    className={'text-center'}>
                                    <Image
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/favorites.svg'}
                                    />
                                </Col>
                                <Col xs={0} sm={16}>
                                    <Link href={'/test'}>
                                        {t('label.favorites')}
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4} sm={4} className={'border-right'}>
                            <Row gutter={4} justify="center" align="middle">
                                <Col xs={24} sm={4} className={'text-center'}>
                                    <Image
                                        alt={'Red Group'}
                                        src={'/assets/img/svg/login.svg'}
                                    />
                                </Col>
                                {!user && (
                                    <Col xs={0} sm={19}>
                                        <span className="ml-1 pr-3 border-right">
                                            <Link href="/login" legacyBehavior>
                                                {t('label.login')}
                                            </Link>
                                        </span>
                                        <span className="ml-1 pl-1">
                                            <Link
                                                href="/register"
                                                legacyBehavior>
                                                {t('button.register')}
                                            </Link>
                                        </span>
                                    </Col>
                                )}

                                {user && (
                                    <Col xs={0} sm={19}>
                                        <span className="ml-1 pr-3 border-right">
                                            <Link href="#" legacyBehavior>
                                                {/*{user.name}*/}
                                            </Link>
                                        </span>
                                        <span
                                            className="ml-3"
                                            /*onClick={() => logout()}*/
                                        >
                                            {t('common:label.logout')}
                                        </span>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                        <Col sm={2} className="justify-content-center">
                            <Select
                                defaultValue={lng}
                                variant={'borderless'}
                                onChange={onChangeLanguage}
                                className={'h-8'}
                                showSearch={false}
                                labelInValue={true}
                                style={{ width: 100, height: 34, zIndex: 200 }}
                                options={[
                                    {
                                        value: 'am',
                                        label: <AmOption />,
                                    },
                                    {
                                        value: 'en',
                                        label: <EnOption />,
                                    },
                                    {
                                        value: 'ru',
                                        label: <RuOption />,
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </ContainerBoxed>
    )
}

export default AppTopbar
