import React, { Component } from "react";
import sectiondata from "data/sections.json";

class BlogBanner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + "/";
        let imagealt = "image";
        let data = sectiondata.banner;

        const inlineStyle = {
            backgroundImage: "url(" + publicUrl + "/assets/img/banner/main-banner.jpg)"
        };



        return <div className="pt-5 mb-3 mb-sm-5 " style={inlineStyle}>
            <div className="container">
                <div className="pt-5 pd-bottom-120 text-center">
                    <div className="row align-self-center">
                        <div className="col-12 ">
                            <div className="banner-inner text-center align-self-center mt-5">
                                <h3 className="text-center text-white">RED INVEST GROUP-ի մասին</h3>
                                <h6 className="title text-center text-white mb-5 pl-5 pr-5">We are ready and willing to solve your problems within our services in the real estate market, listen and accept your opinion about good work and criticize our team for omissions.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;

    }
}

export default BlogBanner
