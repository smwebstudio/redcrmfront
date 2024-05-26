'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

export const BlogNavbar = ({ title, type }) => {
    const pathname = usePathname()

    const newsActive = pathname.includes('/blog/news', 0)
    const articlesActive = pathname.includes('/blog/articles', 0)
    const statisticsActive = pathname.includes('/blog/statistics', 0)
    const pricesActive = pathname.includes('/blog/prices', 0)

    return (
        <ContainerBoxed className="">
            <div className=" nav-container">
                <ul className="blog-nav">
                    <li className={pathname === '/blog' ? 'active' : ''}>
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
        </ContainerBoxed>
    )
}

export default BlogNavbar
