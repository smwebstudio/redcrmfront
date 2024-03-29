import React, { Component, useEffect } from "react";
import Link from "next/link";
import { Affix, Col, Row, Select } from "antd";
import { useTranslation } from "next-i18next";

function Navbar() {

    const { t } = useTranslation('common')


    return (
        <div className="">
            <Affix offsetTop={0}>
                <div className="navbar-area ">
                    <nav className="navbar-area navbar-expand-lg">
                        <div className="container nav-container">
                            <Row justify="center" align="top">
                                <Col offset={1} xs={2} sm={0}>
                                    <div className="responsive-mobile-menu">
                                        <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse"
                                                data-target="#realdeal_main_menu" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <span className="icon-left" />
                                            <span className="icon-right" />
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse mt-5" id="realdeal_main_menu" >
                                        <ul className="navbar-nav menu-open readeal-top" style={{height:"100vh"}}>
                                            <li><Link href="/estates"><a>{t('menu.buy')}</a></Link></li>
                                            <li><Link href="/estates"><a>{t('menu.rent')}</a></Link></li>
                                            <li><Link href="/about"><a>Մեր մասին</a></Link></li>
                                            <li><Link href="/professionals"><a>Մասնագետներ</a></Link></li>
                                            <li><Link href="/blog"><a>Բլոգ</a></Link></li>
                                            <li><Link href="/contact"><a>Կապ</a></Link></li>
                                            <li><Link href="/evaluate"><a>Գնահատում</a></Link></li>
                                            <li><Link href="/builders"><a>Կառուցապատողներ</a></Link></li>
                                            <li>
                                                <Link href="/add-property"><a className="btn btn-main-transparent"><i
                                                    className="la la-plus" /> ՆՈՐ ՀԱՅՏ <span className="right"></span></a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col xs={18} sm={3} md={6} lg={4}>
                                    <div className="logo readeal-top">
                                        <Link href="/"><a><img src={"/assets/img/logo-pc.svg"} alt="logo" /></a></Link>
                                    </div>
                                </Col>

                                <Col xs={0} sm={21} md={18} lg={18}>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navbar-nav menu-open readeal-top">
                                            <li><Link href="/estates"><a>{t('menu.buy')}</a></Link></li>
                                            <li><Link href="/estates"><a>{t('menu.rent')}</a></Link></li>
                                            <li><Link href="/about"><a>{t('menu.about')}</a></Link></li>
                                            <li><Link href="/professionals"><a>{t('menu.professional')}</a></Link></li>
                                            <li><Link href="/blog"><a>{t('menu.blog')}</a></Link></li>
                                            <li><Link href="/contact"><a>{t('menu.contact')}</a></Link></li>
                                            <li><Link href="/estimate"><a>{t('menu.evaluate')}</a></Link></li>
                                            <li><Link href="/builders"><a>{t('menu.buildDevelopers')}</a></Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={0} sm={0} md={0} lg={2}>
                                    <div className="nav-right-part nav-right-part-desktop readeal-top">
                                        <Link href="/add-property"><a className="btn btn-main-transparent pr-1 pl-1"><i
                                            className="la la-plus" /> {t('label.addNewAnnouncement')} <span className="right"></span></a></Link>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </nav>
                </div>
            </Affix>
        </div>
    );

}


export default Navbar;
