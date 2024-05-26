'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import BlogItem from '@/components/Blog/blog-item'
import BlogSmallItem from '@/components/Blog/blog-small-item'
import { Col, Row } from 'antd'

export function BlogList(props, type) {
    const title = props.title
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        fetch('api/blog/' + props.type)
            .then(res => res.json())
            .then(data => {
                console.log('data')
                console.log(data)
                setBlogData(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
            <div className="container pt-5">
                <Row gutter={32}>
                    <Col sm={16}>
                        <h3 className={'font-bold'}>{title}</h3>
                        <Row gutter={24}>
                            {blogData?.data &&
                                blogData.data?.map((item, i) => (
                                    <Col key={i} xs={24} sm={12}>
                                        <BlogItem BlogItem={item} />
                                    </Col>
                                ))}

                            {!blogData?.data?.length && (
                                <h3 className={'mt-2 pb-5 mb-5'}>
                                    Ոչինի չի գտնվել
                                </h3>
                            )}
                        </Row>
                    </Col>
                    <Col xs={0} sm={8}>
                        <div
                            className={
                                'd-flex flex-row justify-content-between'
                            }>
                            <h3 className={'font-bold'}>Առաջարկվող</h3>
                            <Link
                                href={'/blog/news/'}
                                className={'text-main hover-underline'}>
                                {t('label.seeAll')}
                            </Link>
                        </div>
                        {blogData?.data &&
                            blogData.data
                                ?.filter((item, i) => i < 6)
                                .map((item, i) => (
                                    <div key={i} className={''}>
                                        <BlogSmallItem BlogSmallItem={item} />
                                    </div>
                                ))}
                        {!blogData?.data?.length && (
                            <h3 className={'text-center mt-2 pb-5 mb-5'}>
                                Ոչինի չի գտնվել
                            </h3>
                        )}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default BlogList
