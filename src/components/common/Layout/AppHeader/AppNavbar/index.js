'use client'
import React from 'react'
import Link from 'next/link'
import { Affix, Col, Row } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import { useTranslation } from '@/app/i18n/client'
import AppImage from '@/components/common/Image/AppImage'

const AppNavbar = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    return (
        <ContainerFluid>
            <Affix offsetTop={0}>
                <div className="navbar-area ">
                    <nav className="navbar-area navbar-expand-lg">
                        <ContainerBoxed className="container nav-container">
                            <Row justify="center" align="top">
                                <Col offset={1} xs={2} sm={0}>
                                    <div className="responsive-mobile-menu">
                                        <button
                                            className="menu toggle-btn d-block d-lg-none"
                                            data-toggle="collapse"
                                            data-target="#realdeal_main_menu"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="icon-left" />
                                            <span className="icon-right" />
                                        </button>
                                    </div>
                                    <div
                                        className="collapse navbar-collapse mt-5"
                                        id="realdeal_main_menu">
                                        <ul
                                            className="navbar-nav menu-open readeal-top"
                                            style={{ height: '100vh' }}>
                                            <li>
                                                <Link href="/estates">
                                                    {t('menu.buy')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/estates">
                                                    {t('menu.rent')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    {t('menu.about')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/professionals">
                                                    {t('menu.professional')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">
                                                    {t('menu.blog')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    {t('menu.contact')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/evaluate">
                                                    {t('menu.evaluate')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/developers">
                                                    {t('menu.buildDevelopers')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/add-property"
                                                    className="btn btn-main-transparent">
                                                    <i className="la la-plus" />
                                                    ՆՈՐ ՀԱՅՏ
                                                    <span className="right"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col xs={18} sm={3} md={6} lg={4}>
                                    <div className="logo readeal-top">
                                        <Link href="/">
                                            <AppImage
                                                alt={'Red Group'}
                                                src={'/assets/img/logo-pc.svg'}
                                            />
                                        </Link>
                                    </div>
                                </Col>

                                <Col xs={0} sm={21} md={18} lg={18}>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navbar-nav menu-open readeal-top">
                                            <li>
                                                <Link href="/estates">
                                                    {t('menu.buy')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/estates">
                                                    {t('menu.rent')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    {t('menu.about')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/professionals">
                                                    {t('menu.professional')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">
                                                    {t('menu.blog')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    {t('menu.contact')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/estimate">
                                                    {t('menu.evaluate')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/developers">
                                                    {t('menu.buildDevelopers')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={0} sm={0} md={0} lg={2}>
                                    <div className="nav-right-part nav-right-part-desktop readeal-top">
                                        <Link
                                            href="/add-property"
                                            className="btn btn-main-transparent pr-1 pl-1">
                                            <i className="la la-plus" />{' '}
                                            {t('label.addNewAnnouncement')}{' '}
                                            <span className="right"></span>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </ContainerBoxed>
                    </nav>
                </div>
            </Affix>
        </ContainerFluid>
    )
}

export default AppNavbar
