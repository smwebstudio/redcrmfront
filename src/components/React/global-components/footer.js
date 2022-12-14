import React, { Component } from "react";
import Link from "next/link";
import footerdata from "data/footerdata.json";
import Image from "next/image";

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL + "/";
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        console.log(publicUrl);
        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL + "/";
        let imgattr = "Footer logo";
        const inlineStyle = {
            backgroundImage: "url(" + publicUrl + footerdata.footerbg + ")"
        };

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-sm-4">
                                <a className="footer-logo" href="#"><img src={publicUrl + footerdata.footerlogo}
                                                                         alt={imgattr} /></a>
                            </div>
                            <div className="col-sm-8">
                                <div className="footer-social text-sm-right">
                                    <ul className="social-icon">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <p className="mb-4">???????????? ??????????</p>
                                    <ul className={"font-size-12"}>
                                        <li className=""><a href="/">????????</a></li>
                                        <li className=""><a href="/">????????????????????</a></li>
                                        <li className=""><a href="/">????????????????????????????</a></li>
                                        <li className=""><a href="/">??????????????</a></li>
                                        <li className=""><a href="/">??????????????????????</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <p className="mb-4">?????? ??????????????????????????</p>
                                    <ul className={"font-size-12"}>
                                        <li className=""><a href="/">?????? ??????????</a></li>
                                        <li className=""><a href="/">??????????????????????</a></li>
                                        <li className=""><a href="/">????????</a></li>
                                        <li className=""><a href="/">??????</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <p className="mb-4">??????????????????????????????</p>
                                    <ul className={"font-size-12"}>
                                        <li className=""><a href="/">?????? ????????</a></li>
                                        <li className=""><a href="/">??????????????????</a></li>
                                        <li className=""><a href="/">???????????????? ????</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <p className="">?????????????????? ??????</p>
                                    <ul>
                                        <li className={"d-flex flex-col mb-3"}>
                                            <Image src={"/assets/img/svg/location-white.svg"} width={"14px"}
                                                   height={"20px"} />
                                            <span className="ml-3 text-white font-size-11">"???????? ??????????" ???????????? ?????????????? 4-???? ???????? 0010,<br /> ????, ??????????, ??. ?????????????????? ??????????, 15</span>
                                        </li>
                                        <li className={"d-flex flex-col mb-3"}>
                                            <Image src={"/assets/img/svg/mobile-white.svg"} width={"14px"}
                                                   height={"20px"} className={"align-self-top"} />
                                            <span className="ml-3 text-white font-size-11">+374 98 908 551 <br />+374 96 908 881</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="copy-right text-white text-left"
                         dangerouslySetInnerHTML={{ __html: footerdata.copyrighttext }}></div>
                </div>
            </footer>

        );
    }
}


export default Footer_v1;
