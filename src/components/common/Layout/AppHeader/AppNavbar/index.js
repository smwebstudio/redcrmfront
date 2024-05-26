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
                                            className="menu toggle-btn"
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
                                        <Link href="/">
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
                                    md={18}
                                    lg={18}>
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
                                <Col
                                    xs={{ span: menuOpen ? 23 : 0, offset: 1 }}
                                    sm={{ span: 2, offset: 0 }}>
                                    <Link
                                        href="/add-property"
                                        className="btn btn-main-transparent pr-1 pl-1">
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
