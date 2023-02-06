import React, { Component, useEffect } from "react";
import Link from "next/link";
import { Select } from "antd";
import { useRouter } from "next/router";

function BlogNavbar() {

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);
    const isSticky = (e) => {
        const header = document.querySelector(".sticked");
        const scrollTop = window.scrollY;
        scrollTop >= 60 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
    };
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
