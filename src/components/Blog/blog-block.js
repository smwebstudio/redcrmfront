'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import BlogSmallItem from '@/components/Blog/blog-small-item'
import BlogMidItem from '@/components/Blog/blog-mid-item'
import { apiURL } from '@/constants'
import { Col, Row } from 'antd'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

export const BlogBlock = ({ title, type, lng }) => {
    const [blogData, setBlogData] = useState([])
    const { t } = useTranslation(lng, 'common')
    useEffect(() => {
        fetch(apiURL + 'api/blog/' + type)
            .then(res => res.json())
            .then(data => {
                setBlogData(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [type])

    return (
        <ContainerBoxed className="pt-5 pb-5">
            <Row gutter={32}>
                <Col xs={24} sm={16}>
                    <h3 className="font-bold">{title}</h3>
                    <Row gutter={24}>
                        {blogData?.data &&
                            blogData.data
                                .filter((item, i) => i < 2)
                                .map((item, i) => (
                                    <Col key={i} xs={24} sm={12}>
                                        <BlogMidItem BlogItem={item} />
                                    </Col>
                                ))}

                        {!blogData?.data?.length && (
                            <h3 className="text-center text-sm-left mt-2 pb-5 mb-5">
                                Ոչինչ չի գտնվել
                            </h3>
                        )}
                    </Row>
                </Col>
                <Col xs={0} sm={8}>
                    <div className="flex flex-row justify-end">
                        <Link
                            href={'/blog/' + type}
                            className="text-main hover-underline mb-2 pb-1 text-underline">
                            {t('label.seeAll')}
                        </Link>
                    </div>
                    {blogData?.data &&
                        blogData.data
                            .filter((item, i) => i < 3)
                            .map((item, i) => (
                                <div key={i}>
                                    <BlogSmallItem BlogSmallItem={item} />
                                </div>
                            ))}

                    {!blogData?.data?.length && (
                        <h3 className="mt-2 pb-5 mb-5">Ոչինչ չի գտնվել</h3>
                    )}
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default BlogBlock
