import React, { Component } from 'react';
import sectiondata from 'data/sections.json';
import parse from 'html-react-parser';
import Link from 'next/link';

class FeaturedProject extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.featuredproject


    return <div className="featured-projects pd-top-60 pd-bottom-70">
        <div className="container">
          <div className="section-title">
            <h4 className="title">{ data.title }</h4>
          </div>
          <div className="featured-slider slider-control-top">
          { data.items.map( ( item, i )=>
                <div key={ i } className="item">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="single-feature">
                      <div className="thumb">
                         <img src={ publicUrl+item.imageThirdItem } alt={ imagealt } />
                      </div>
                      <div className="details">
                        <a href="#" className="feature-logo">
                         <img src={ publicUrl+item.iconThirdItem } alt={ imagealt } />
                        </a>
                          <h6 className="price">{ item.newerpriceThirdItem }</h6><del>{ item.olderpriceThirdItem }</del>
                        <p className="author"><i className="fa fa-user" /> { item.authornameThirdItem }</p>
                       <h6 className="title readeal-top"><Link href="/property-details"><a>{ item.titleThirdItem }</a></Link></h6>

                        <ul className="info-list">
                           { item.featuresThirdItem.map( ( features, i )=>
                             <li key={ i } ><i className={ features.icon } /> <img src={ publicUrl+features.icon } /> { features.title }</li>
                           ) }
                          <li><img src={publicUrl+"/assets/img/icons/7.png"} alt="img" /> { item.areaThirdItem }</li>
                        </ul>
                        <ul className="contact-list">
                          <li><a className="phone" href="#"><i className="fa fa-phone" /></a></li>
                          <li><a className="message" href="#"><img src={publicUrl+"/assets/img/icons/8.png"} alt="img" /></a></li>
                          <li className="readeal-top"><Link className="btn btn-yellow" href="/property-details"><a>View Details</a></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
           ) }

          </div>
        </div>
      </div>

        }
}

export default FeaturedProject
