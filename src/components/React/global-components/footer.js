import React, { Component } from 'react';
import Link from 'next/link'
import footerdata from 'data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        console.log(publicUrl);
        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+footerdata.footerbg+')'
        }

        return (
             <footer className="footer-area">
              <div className="container">
                <div className="footer-top">
                  <div className="row">
                    <div className="col-sm-4">
                      <a className="footer-logo" href="#"><img src={ publicUrl+footerdata.footerlogo } alt={ imgattr } /></a>
                    </div>
                    <div className="col-sm-8">
                      <div className="footer-social text-sm-right">
                        <ul className="social-icon">
                         { footerdata.socialicon.map( ( item, i )=>
                            <li key={i}>
                              <a href={ item.url } target="_blank"><i className={ item.icon } /></a>
                            </li>
                          ) }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                        <h6 className="widget-title text-white">{ footerdata.popularserces.title }</h6>
                        <ul>
                          { footerdata.popularserces.links.map( ( item, i )=>
                              <li className="readeal-top" key={ i }><Link href={ item.url } ><a>{ item.title }</a></Link></li>
                           ) }

                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                        <h6 className="widget-title text-white">{ footerdata.Homepress.title }</h6>
                        <ul>
                          { footerdata.Homepress.links.map( ( item, i )=>
                             <li className="readeal-top" key={ i }><Link href={ item.url } ><a>{ item.title }</a></Link></li>
                          ) }
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                       <h6 className="widget-title text-white">{ footerdata.quicklink.title }</h6>
                        <ul>
                         { footerdata.quicklink.links.map( ( item, i )=>
                              <li className="readeal-top" key={ i }><Link href={ item.url } ><a>{ item.title }</a></Link></li>
                          ) }
                        </ul>
                      </div>
                    </div>
                      <div className="col-lg-3 col-sm-6">
                          <div className="widget widget_nav_menu">
                              <h6 className="widget-title text-white">{ footerdata.quicklink.title }</h6>
                              <ul>
                                  { footerdata.quicklink.links.map( ( item, i )=>
                                      <li className="readeal-top" key={ i }><Link href={ item.url } ><a>{ item.title }</a></Link></li>
                                  ) }
                              </ul>
                          </div>
                      </div>


                  </div>
                </div>
                <div className="copy-right text-white text-left" dangerouslySetInnerHTML={{__html: footerdata.copyrighttext}}></div>
              </div>
            </footer>

        )
    }
}


export default Footer_v1
