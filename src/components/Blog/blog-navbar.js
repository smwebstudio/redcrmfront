import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function BlogNavbar() {
    const router = useRouter()

    const newsActive = router.asPath.includes('/blog/news', 0)
    const articlesActive = router.asPath.includes('/blog/articles', 0)
    const statisticsActive = router.asPath.includes('/blog/statistics', 0)
    const pricesActive = router.asPath.includes('/blog/prices', 0)

    return (
        <div className="">
            <div className="container nav-container">
                <ul className="blog-nav">
                    <li className={router.pathname == '/blog' ? 'active' : ''}>
                        <Link href="/blog">Բոլորը</Link>
                    </li>
                    <li className={newsActive ? 'active' : ''}>
                        <Link href="/blog/news">Նորություններ</Link>
                    </li>
                    <li className={articlesActive ? 'active' : ''}>
                        <Link href="/blog/articles">Հոդվածներ</Link>
                    </li>
                    <li className={statisticsActive ? 'active' : ''}>
                        <Link href="/blog/statistics">Վիճակագրություն</Link>
                    </li>
                    <li className={pricesActive ? 'active' : ''}>
                        <Link href="/blog/prices">Գներ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogNavbar
