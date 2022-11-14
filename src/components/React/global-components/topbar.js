import React, { Component } from "react";
import Link from "next/link";

class Topbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL + "/";
        let imgattr = "logo";
        let anchor = "#";
        return (
            <div className="mb-5">
                <div className="topbar-area">
                    <div className="container nav-container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={"/assets/img/svg/phone.svg"} alt="logo" />
                                <span className="ml-2">37496 908 900, 37411 970 908</span>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <div className="d-flex align-items-center ml-3 pr-3 border-right">
                                    <img src={"/assets/img/svg/compare.svg"} alt="logo" />
                                    <a className="ml-1">Համեմատել</a>
                                </div>
                                <div className="d-flex align-items-center ml-3 pr-3 border-right">
                                    <img src={"/assets/img/svg/favorites.svg"} alt="logo" />
                                    <a className="ml-1">Հիշվածներ</a>
                                </div>
                                <div className="d-flex align-items-center ml-3 mr-3 pr-3 border-right">
                                    <img src={"/assets/img/svg/login.svg"} alt="logo" />
                                    <span className="ml-1 pr-3 border-right">
                                        <Link href="/login">Մուտք</Link>
                                    </span>
                                    <span className="ml-1 pl-1">Գրանցում</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default Topbar;
