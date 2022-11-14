import React, { Component } from 'react';
import sectiondata from 'data/sections.json';


const WhyChooseUs = () => {

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    let data = sectiondata.whychooseus

    return (
        <div className="why-choose-us-area bg-gray pd-top-90 pd-bottom-60">
            <div className="container">
                <div className="row">
                    { data.items.map( ( item,i ) =>
                        <div key={ i } className={"col-xl-3 col-lg-4 col-sm-6 "+item.class}>
                            <div className="single-intro text-lg-left text-left">
                                <div className="thumb">
                                    <img src={ publicUrl+item.icon } alt={ imagealt } />
                                </div>
                                <div className="details mt-2">
                                    <h6 className="title">{ item.title }</h6>
                                    <p>{ item.content }</p>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs
