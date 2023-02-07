import React, { Component, useEffect, useState } from "react";
import sectiondata from "data/sections.json";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://marvel-b1-cdn.bc0a.com/f00000000254107/cdn.tfc.com/marketing/files/building_images/1_5203CB_3010_Livingroom_261ef1bcb9ed94.jpg",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
];

function EstateDetailsSection() {

    const router = useRouter();
    const [estateData, setEstateData] = useState([]);

    useEffect(() => {
        if(router.isReady){
            const { id } = router.query;
            if (!id) return null;
            fetch("http://redoc/api/estates/" + id)
                .then(res => res.json())
                .then(data => {
                    setEstateData(data);
                }).catch((e) => {
                console.log(e);
            });
        }


    }, [router.isReady]);

    let publicUrl = process.env.PUBLIC_URL + "/";
    let publicCDN = "https://proinfo.am/uploadsWithWaterMark/";
    let imagealt = "image";

    let estate = estateData.data;

    let imagesData = estate?.images;

    console.log(imagesData);

    let images = [];
    if (imagesData) {
        imagesData.forEach(item => {
            images.push({original: publicCDN+item.path_thumb, thumbnail: publicCDN+item.path_thumb});
        });
    }

    console.log('images');
    console.log(images);

    console.log(estateData);
    return <div className="property-details-area pd-top-100">
        <div className="bg-gray pd-top-100 pd-bottom-90">
            <div className="container">
                <div className="row ">
                    <div className="col-12 mb-3">
                        <h5>
                            <span className="text-main mr-5">{estate?.price}</span>
                            <span className="estate-code border p-1">{estate?.code}</span>
                            <span className="estate-code p-1 border-orange text-white bg-orange">Վաճառք</span>
                        </h5>
                    </div>
                    <div className="col-12 mb-5">
                        <img className="mr-2" src={"/assets/img/svg/location.svg"} alt="location" />Վաճառվում է 3
                        սենյականոց բնակարան {estate?.full_address}
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <ImageGallery
                            items={images}
                            showNav={true}
                            thumbnailPosition={"right"}
                            showPlayButton={false}
                        />

                    </div>
                    {/*<div className="col-xl-3 col-lg-4">*/}
                    {/*    <div className="widget widget-owner-info mt-lg-0 mt-5">*/}
                    {/*        <div className="owner-info text-center">*/}
                    {/*            <div className="thumb">*/}
                    {/*                <img src={estate?.image} alt={imagealt} />*/}
                    {/*            </div>*/}
                    {/*            <div className="details">*/}
                    {/*                <h6>Jesse Edwards</h6>*/}
                    {/*                <span className="designation">Building Owner</span>*/}
                    {/*                <p className="reviews"><i className="fa fa-star" /><span>4.8</span> 70 Review*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="contact">*/}
                    {/*            <h6>Contact Us</h6>*/}
                    {/*            <div className="rld-single-input">*/}
                    {/*                <input type="text" placeholder="Full Name" />*/}
                    {/*            </div>*/}
                    {/*            <div className="rld-single-input">*/}
                    {/*                <input type="text" placeholder="Email" />*/}
                    {/*            </div>*/}
                    {/*            <div className="rld-single-input">*/}
                    {/*                <input type="text" placeholder="Messages" />*/}
                    {/*            </div>*/}
                    {/*            <a className="btn btn-yellow" href="#">Send Messages</a>*/}
                    {/*        </div>*/}
                    {/*        <div className="contact-info">*/}
                    {/*            <h6 className="mb-3">Contact Info</h6>*/}
                    {/*            <div className="media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <img src={publicUrl + "/assets/img/icons/1.png"} alt={imagealt} />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <p>Address</p>*/}
                    {/*                    <span>Long Island, NY 11355, USA</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <i className="fa fa-phone" />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <p>Phone</p>*/}
                    {/*                    <span>+00 111 222 333</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="media mb-0">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <i className="fa fa-envelope" />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <p>Email</p>*/}
                    {/*                    <span>info@example.com</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row pd-top-90">
                <div className="col-lg-9">
                    <div className="property-news-single-card border-bottom-yellow">
                        <h4>Շենք</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="rld-list-style mb-3 mb-sm-0 pr-5">
                                    <li><span>Շենքի կառուցվածք:</span><span>{estate?.building_structure_type}</span> </li>
                                    <li><span>Շենքի նախագիծ:</span><span> {estate?.building_project_type ? estate?.building_project_type : '-'}</span></li>
                                    <li><span>Կառուցման տարեթիվ:</span><span> {estate?.year ? estate?.year : '-'}</span></li>
                                    <li><span>Դռան դիրք:</span><span> {estate?.entrance_door_position ? estate?.entrance_door_position : '-'}</span></li>
                                    <li><span>Շենքի կառուցվածք:</span><span> {estate?.building_structure_type}</span></li>
                                    <li><span>Շենքի կառուցվածք:</span><span> {estate?.building_structure_type}</span></li>
                                    <li><span>Շենքի կառուցվածք:</span><span> {estate?.building_structure_type}</span></li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="rld-list-style mb-3 mb-sm-0">
                                    <li>Շենքի կառուցվածք: {estate?.building_structure_type}</li>
                                    <li>Շենքի կառուցվածք: {estate?.building_structure_type}</li>
                                    <li>Շենքի կառուցվածք: {estate?.building_structure_type}</li>
                                    <li>Շենքի կառուցվածք: {estate?.building_structure_type}</li>
                                    <li>Շենքի կառուցվածք: {estate?.building_structure_type}</li>
                                    <li>Շենքի կառուցվածք: {estate?.building_structure_type}</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/*<div className="property-info mb-5">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-property-info">*/}
                    {/*                <h5>Bedrooms</h5>*/}
                    {/*                <p><i className="fa fa-bed" />04</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-property-info">*/}
                    {/*                <h5>Bathrooms</h5>*/}
                    {/*                <p><i className="fa fa-bath" />02</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-property-info">*/}
                    {/*                <h5>Area</h5>*/}
                    {/*                <p><img src={publicUrl + "/assets/img/icons/7.png"} alt={imagealt} />1,038 sq.*/}
                    {/*                    ft.</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-property-info">*/}
                    {/*                <h5>Parking</h5>*/}
                    {/*                <p><i className="fa fa-car" />01 Indoor</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="property-news-single-card style-two border-bottom-yellow">*/}
                    {/*    <h4>Base Floor Plan</h4>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum elit magna, ut*/}
                    {/*        placerat nunc tempus vel. Donec vitae dictum ligula. Phasellus congue maximus eleifend.*/}
                    {/*        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;*/}
                    {/*        Suspendisse potenti. Suspendisse sollicitudin posuere nunc et vehicula. Interdum et*/}
                    {/*        malesuada fames ac ante ipsum primis in faucibus. Maecenas aliquam vitae quam at*/}
                    {/*        sodales. </p>*/}
                    {/*    <a href="#">Read More</a>*/}
                    {/*</div>*/}
                    {/*<div className="property-news-single-card style-two border-bottom-yellow">*/}
                    {/*    <h4>Base Floor Plan</h4>*/}
                    {/*    <iframe*/}
                    {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5621.1629504770535!2d-122.43633647504856!3d37.748515859182696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1578304196576!5m2!1sen!2sbd"*/}
                    {/*        style={{ border: 0 }} allowFullScreen />*/}
                    {/*</div>*/}
                    {/*<div className="property-news-single-card border-bottom-yellow">*/}
                    {/*    <h4>Amenities</h4>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-sm-4">*/}
                    {/*            <ul className="rld-list-style mb-3 mb-sm-0">*/}
                    {/*                <li><i className="fa fa-check" /> Attic</li>*/}
                    {/*                <li><i className="fa fa-check" /> Poll</li>*/}
                    {/*                <li><i className="fa fa-check" /> Concierge</li>*/}
                    {/*                <li><i className="fa fa-check" /> Basketball Cout</li>*/}
                    {/*                <li><i className="fa fa-check" /> Sprinklers</li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-sm-4">*/}
                    {/*            <ul className="rld-list-style mb-3 mb-sm-0">*/}
                    {/*                <li><i className="fa fa-check" /> Recreation</li>*/}
                    {/*                <li><i className="fa fa-check" /> Front Yard</li>*/}
                    {/*                <li><i className="fa fa-check" /> Wine Cellar</li>*/}
                    {/*                <li><i className="fa fa-check" /> Basketball Cout</li>*/}
                    {/*                <li><i className="fa fa-check" /> Fireplace</li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-sm-4">*/}
                    {/*            <ul className="rld-list-style mb-3 mb-sm-0">*/}
                    {/*                <li><i className="fa fa-check" /> Balcony</li>*/}
                    {/*                <li><i className="fa fa-check" /> Pound</li>*/}
                    {/*                <li><i className="fa fa-check" /> Deck</li>*/}
                    {/*                <li><i className="fa fa-check" /> 24x7 Security</li>*/}
                    {/*                <li><i className="fa fa-check" /> Indoor Game</li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="property-news-single-card border-bottom-yellow">*/}
                    {/*    <h4>Floor Plan</h4>*/}
                    {/*    <div className="thumb">*/}
                    {/*        <img src={publicUrl + "/assets/img/others/10.png"} alt={imagealt} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="property-news-single-card border-bottom-yellow pb-3">*/}
                    {/*    <h4>Facts and Features</h4>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <i className="fa fa-bed" />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Living Room</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <i className="fa fa-car" />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Garage</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <img src={publicUrl + "/assets/img/icons/7.png"} alt={imagealt} />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Dining Area</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <img src={publicUrl + "/assets/img/icons/7.png"} alt={imagealt} />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Dining Area</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <i className="fa fa-bed" />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Bedroom</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <i className="fa fa-bath" />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Bathroom</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <img src={publicUrl + "/assets/img/icons/17.png"} alt={imagealt} />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Gym Area</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-md-3 col-sm-6">*/}
                    {/*            <div className="single-floor-list media">*/}
                    {/*                <div className="media-left">*/}
                    {/*                    <img src={publicUrl + "/assets/img/icons/17.png"} alt={imagealt} />*/}
                    {/*                </div>*/}
                    {/*                <div className="media-body">*/}
                    {/*                    <h6>Gym Area</h6>*/}
                    {/*                    <p>20 x 16 sq feet</p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="property-news-single-card border-bottom-yellow mb-0">*/}
                    {/*    <h4>3D Gallery</h4>*/}
                    {/*    <div className="thumb">*/}
                    {/*        <img src={publicUrl + "/assets/img/others/11.png"} alt={imagealt} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </div>;

}

export async function getStaticProps({}) {

    const router = useRouter();
    const { id } = router.query;

    console.log("id");
    console.log(id);
    // Fetch data from external API
    const data = await fetch("http://redoc/api/estates/" + id);
    const estates = await data.json();

    // Pass data to the page via props
    return { props: { estates } };
}

export default EstateDetailsSection;
