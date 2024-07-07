'use client'
import React from 'react'
import { Col, Row } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import Link from 'next/link'
import AppImage from '@/components/common/Image/AppImage'
import FontIcon from '@/components/common/Icons/FontIcon'
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from '@/app/i18n/client'

export const AppFooter = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <footer className="footer-area z-50">
            <ContainerBoxed>
                <div className="footer-top">
                    <Row align={'middle'}>
                        <Col
                            xs={24}
                            sm={8}
                            className={'text-center sm:text-left'}>
                            <Link className="footer-logo" href="/">
                                <AppImage
                                    alt={'Red Group'}
                                    src={
                                        publicUrl + 'assets/img/logo-footer.svg'
                                    }
                                />
                            </Link>
                        </Col>
                        <Col xs={24} sm={16}>
                            <div className="footer-social text-center sm:text-right">
                                <ul className="social-icon">
                                    <li>
                                        <Link
                                            href="https://www.facebook.com/groups/573996579357491"
                                            target="_blank">
                                            <FontIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.instagram.com/redinvestgroup/"
                                            target="_blank">
                                            <FontIcon icon={faInstagram} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.linkedin.com/in/red-invest-group-real-estate-company-9377b82b6/"
                                            target="_blank">
                                            <FontIcon icon={faLinkedin} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.youtube.com/@REDInvestGroup"
                                            target="_blank">
                                            <FontIcon icon={faYoutube} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="footer-bottom">
                    <Row gutter={16}>
                        <Col xs={12} sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="mb-4">{t('label.estate')}</p>
                                <ul className={'font-size-12'}>
                                    <li className="">
                                        <Link href="/estates">
                                            {t('menu.buy')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/estates">
                                            {t('menu.rent')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/estates">
                                            {t('label.title.fee.normal')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">
                                            {t('menu.buildDevelopers')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="mb-4">{t('label.aboutUs')}</p>
                                <ul className={'font-size-12'}>
                                    <li className="">
                                        <Link href="/about">
                                            {t('menu.about')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/professionals">
                                            {t('menu.professional')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/blog">
                                            {t('menu.blog')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/contact">
                                            {t('menu.contact')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="mb-4">
                                    {t('label.applicationServices')}
                                </p>
                                <ul className={'font-size-12'}>
                                    <li className="">
                                        <Link href="/add-property">
                                            {t('label.addNewAnnouncement')}
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href="/estimate">
                                            {t('menu.evaluate')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="mb-3">{t('label.contactDet')}</p>
                                <ul>
                                    <li className={'flex flex-row mb-3'}>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={
                                                '/assets/img/svg/location-white.svg'
                                            }
                                            width={'14px'}
                                            height={'20px'}
                                        />
                                        <p className="ml-3 text-white font-size-11">
                                            {t('label.red.addressOffice')}
                                        </p>
                                    </li>
                                    <li className={'flex flex-row mb-3'}>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={
                                                '/assets/img/svg/mobile-white.svg'
                                            }
                                            width={'14px'}
                                            height={'20px'}
                                            className={'align-self-top'}
                                        />
                                        <span className="ml-3 text-white font-size-11">
                                            +374 98 908 908
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="copy-right text-white text-left">
                    © Red Invest Group 2024.
                </div>
            </ContainerBoxed>
        </footer>
    )
}

export default AppFooter
