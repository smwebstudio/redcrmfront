import React, { Component, useEffect } from "react";
import Link from "next/link";
import { Menu, Select } from "antd";
import { useRouter } from "next/router";

function BlogNavbar() {


    const router = useRouter();

    const newsActive = router.asPath.includes("/blog/news", 0);
    const articlesActive = router.asPath.includes("/blog/articles", 0);
    const statisticsActive = router.asPath.includes("/blog/statistics", 0);
    const pricesActive = router.asPath.includes("/blog/prices", 0);

    return (
        <div className="">
                    <div className="container nav-container">
                            <ul className="blog-nav">
                                <li className={router.pathname == "/blog" ? "active" : ""}><Link href="/blog"><a>Բոլորը</a></Link></li>
                                <li className={newsActive ? "active" : ""}><Link href="/blog/news"><a>Նորություններ</a></Link></li>
                                <li className={articlesActive ? "active" : ""}><Link href="/blog/articles"><a>Հոդվածներ</a></Link></li>
                                <li className={statisticsActive ? "active" : ""}><Link href="/blog/statistics"><a>Վիճակագրություն</a></Link></li>
                                <li className={pricesActive ? "active" : ""}><Link href="/blog/prices"><a>Գներ</a></Link></li>
                            </ul>
                    </div>
        </div>
    );

}


export default BlogNavbar;
