import React, { Component } from 'react';
import Link from 'next/link'

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <div>
                <div className="navbar-area">
                <nav className="navbar navbar-area navbar-expand-lg">
                  <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                      <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#realdeal_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-left" />
                        <span className="icon-right" />
                      </button>
                    </div>
                    <div className="logo readeal-top">
                      <Link href="/"><a><img src={"/assets/img/logo-pc.svg"} alt="logo" /></a></Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                      <Link className="btn btn-yellow" href="/add-property"><a>ADD LISTING <span className="right"><i className="la la-plus" /></span></a></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="realdeal_main_menu">
                      <ul className="navbar-nav menu-open readeal-top">

                        <li><Link href="/contact"><a>Գնել</a></Link></li>
                        <li><Link href="/contact"><a>Վարձակալել</a></Link></li>
                        <li><Link href="/contact"><a>Մեր մասին</a></Link></li>
                        <li><Link href="/contact"><a>Մասնագետներ</a></Link></li>
                        <li><Link href="/contact"><a>Բլոգ</a></Link></li>
                        <li><Link href="/contact"><a>Կապ</a></Link></li>
                        <li><Link href="/contact"><a>Գնահատում</a></Link></li>
                        <li><Link href="/contact"><a>Կարուցապատողներ</a></Link></li>
                      </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop readeal-top">
                      <Link  href="/add-property"><a className="btn btn-yellow"><i className="la la-plus" /> ՆՈՐ ՀԱՅՏ <span className="right"></span></a></Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}


export default Navbar
