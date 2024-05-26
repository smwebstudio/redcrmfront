'use client'
import React from 'react'
import footerdata from 'data/footerdata.json'
import { Col, Row } from 'antd'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import Link from 'next/link'
import AppImage from '@/components/common/Image/AppImage'
import FontIcon from '@/components/common/Icons/FontIcon'
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export const AppFooter = () => {
    // useEffect(() => {
    //     let publicUrl = process.env.PUBLIC_URL + '/'
    //     const minscript = document.createElement('script')
    //     minscript.async = true
    //     minscript.src = publicUrl + 'assets/js/main.js'
    //     document.body.appendChild(minscript)
    // }, [])

    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <footer className="footer-area">
            <ContainerBoxed>
                <div className="footer-top">
                    <Row align={'middle'}>
                        <Col
                            xs={24}
                            sm={8}
                            className={'text-center sm:text-left'}>
                            <Link className="footer-logo" href="#">
                                <AppImage
                                    alt={'Red Group'}
                                    src={publicUrl + footerdata.footerlogo}
                                />
                            </Link>
                        </Col>
                        <Col xs={24} sm={16}>
                            <div className="footer-social text-center sm:text-right">
                                <ul className="social-icon">
                                    <li>
                                        <Link href="#" target="_blank">
                                            <FontIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
                                            <FontIcon icon={faInstagram} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
                                            <FontIcon icon={faTwitter} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
                                            <FontIcon icon={faLinkedin} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" target="_blank">
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
                                <p className="mb-4">Անշարժ գույք</p>
                                <ul className={'font-size-12'}>
                                    <li className="">
                                        <Link href="/">Գնել</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Վարձակալել</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Կառուցապատողից</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Օրավարձ</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Նորակառույց</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="mb-4">Մեր ընկերությունը</p>
                                <ul className={'font-size-12'}>
                                    <li className="">
                                        <Link href="/">Մեր մասին</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Մասնագետներ</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Բլոգ</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Կապ</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="mb-4">Ծառայություններ</p>
                                <ul className={'font-size-12'}>
                                    <li className="">
                                        <Link href="/">Նոր հայտ</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Գնահատում</Link>
                                    </li>
                                    <li className="">
                                        <Link href="/">Անձնական էջ</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className="widget widget_nav_menu">
                                <p className="">Ինֆոգրուպ ՍՊԸ</p>
                                <ul>
                                    <li className={'d-flex flex-row mb-3'}>
                                        <AppImage
                                            alt={'Red Group'}
                                            src={
                                                '/assets/img/svg/location-white.svg'
                                            }
                                            width={'14px'}
                                            height={'20px'}
                                        />
                                        <span className="ml-3 text-white font-size-11">
                                            Էլիտ Պլազա բիզնես կենտրոն 4-րդ հարկ
                                            0010,
                                            <br /> ՀՀ, Երևան, Մ. Խորենացու
                                            փողոց, 15
                                        </span>
                                    </li>
                                    <li className={'d-flex flex-row mb-3'}>
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
                                            +374 98 908 551 <br />
                                            +374 96 908 881
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="copy-right text-white text-left">
                    © Red Group 2024. Բոլոր իրավունքները պաշտպանված են:
                </div>
            </ContainerBoxed>
        </footer>
    )
}

export default AppFooter
