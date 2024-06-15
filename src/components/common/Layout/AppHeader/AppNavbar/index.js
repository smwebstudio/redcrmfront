'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Affix, Button, Col, Row } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import ContainerFluid from '@/components/Containers/ContainerFluid'
import { useTranslation } from '@/app/i18n/client'
import AppImage from '@/components/common/Image/AppImage'
import { isMobile } from 'react-device-detect'

const AppNavbar = ({ lng }) => {
    const { t } = useTranslation(lng, 'common')
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState)
    }
    return (
        <ContainerFluid>
            <Affix offsetTop={0}>
                <div className="navbar-area ">
                    <nav className="navbar-area navbar-expand-lg">
                        <ContainerBoxed className="container nav-container">
                            <Row justify="start" align="middle">
                                <Col offset={1} xs={2} sm={0}>
                                    <div className="responsive-mobile-menu">
                                        <Button
                                            onClick={toggleMenu}
                                            className={
                                                'menu toggle-btn border-0'
                                            }
                                            data-toggle="collapse"
                                            data-target="#realdeal_main_menu"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="icon-left" />
                                            <span className="icon-right" />
                                        </Button>
                                    </div>
                                </Col>

                                <Col xs={16} sm={3} md={6} lg={4}>
                                    <div className="logo readeal-top">
                                        <Link href={`/${lng}`}>
                                            <AppImage
                                                alt={'Red Group'}
                                                height={
                                                    isMobile ? '22px' : '35px'
                                                }
                                                src={'/assets/img/logo-pc.svg'}
                                            />
                                        </Link>
                                    </div>
                                </Col>

                                <Col
                                    xs={menuOpen ? 24 : 0}
                                    sm={21}
                                    md={17}
                                    lg={17}>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navbar-nav menu-open readeal-top">
                                            <li>
                                                <Link
                                                    href={`/${lng}/estates`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.buy')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/estates`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.rent')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/about`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.about')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/professionals`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.professional')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/blog`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.blog')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/contact`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.contact')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/estimate`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.evaluate')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={`/${lng}/developers`}
                                                    onClick={toggleMenu}>
                                                    {t('menu.buildDevelopers')}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    xs={{ span: menuOpen ? 23 : 0, offset: 1 }}
                                    sm={{ span: 3, offset: 0 }}>
                                    <Link
                                        href={`/${lng}/add-property`}
                                        onClick={toggleMenu}
                                        className={
                                            'btn btn-main-transparent  block w-11/12 pr-1 pl-1 text-center'
                                        }>
                                        + {t('label.addNewAnnouncement')}
                                    </Link>
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
