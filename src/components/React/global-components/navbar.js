import React, { Component, useEffect } from "react";
import Link from "next/link";
import { Affix, Select } from "antd";

function Navbar() {

    // useEffect(() => {
    //     window.addEventListener("scroll", isSticky);
    //     return () => {
    //         window.removeEventListener("scroll", isSticky);
    //     };
    // }, []);
    // const isSticky = (e) => {
    //     const header = document.querySelector(".sticked");
    //     const scrollTop = window.scrollY;
    //     scrollTop >= 60 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
    // };



    return (
        <div className="">
        <Affix offsetTop={0}>
            <div className="navbar-area ">
                <nav className="navbar navbar-area navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse"
                                    data-target="#realdeal_main_menu" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="icon-left" />
                                <span className="icon-right" />
                            </button>
                        </div>
                        <div className="logo readeal-top">
                            <Link href="/"><a><img src={"/assets/img/logo-pc.svg"} alt="logo" /></a></Link>
                        </div>
                        <div className="nav-right-part nav-right-part-mobile">
                            <Link className="btn btn-yellow" href="/add-property"><a>Նոր Հայտ <span
                                className="right"><i className="la la-plus" /></span></a></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="realdeal_main_menu">
                            <ul className="navbar-nav menu-open readeal-top">

                                <li><Link href="/estates"><a>Գնել</a></Link></li>
                                <li><Link href="/estates"><a>Վարձակալել</a></Link></li>
                                <li><Link href="/about"><a>Մեր մասին</a></Link></li>
                                <li><Link href="/professionals"><a>Մասնագետներ</a></Link></li>
                                <li><Link href="/blog"><a>Բլոգ</a></Link></li>
                                <li><Link href="/contact"><a>Կապ</a></Link></li>
                                <li><Link href="/contact"><a>Գնահատում</a></Link></li>
                                <li><Link href="/contact"><a>Կառուցապատողներ</a></Link></li>
                            </ul>
                        </div>
                        <div className="nav-right-part nav-right-part-desktop readeal-top">
                            <Link href="/add-property"><a className="btn btn-main-transparent"><i
                                className="la la-plus" /> ՆՈՐ ՀԱՅՏ <span className="right"></span></a></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </Affix>
        </div>
    );

}


export default Navbar;
