'use client'
import React from 'react'
import ShareButtons from '@/components/Global/share-buttons'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import { Col, Row } from 'antd'
import DarkText from '@/components/common/Typography/Text/DarkText'
import AppImage from '@/components/common/Image/AppImage'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'

export const BlogSingle = ({ lng, article }) => {
    return (
        <ContainerBoxed className={'mt-4 pb-10 position-relative pl-4'}>
            <Row justify={'center'}>
                <Col xs={24} md={20} className={'flex items-center'}>
                    <AppImage
                        src={'/assets/img/svg/calendar_icon.svg'}
                        alt="calendar"
                    />
                    <DarkText className={'ml-4'}>
                        {article?.created_at}թ․
                    </DarkText>
                </Col>
                <Col xs={24} md={20} className={'position-relative'}>
                    <ShareButtons />
                    <DarkHeading1 className={'mt-10 mb-4'}>
                        {article?.title}
                    </DarkHeading1>
                </Col>
                {article.picture && (
                    <Col xs={24} md={20} className={'my-4 mb-10'}>
                        <AppImage src={article.picture} height={400} />
                    </Col>
                )}
                <Col xs={24} md={20}>
                    <div
                        className="font-size-13 mb-1 text-gray-800 text-dark"
                        dangerouslySetInnerHTML={{
                            __html: article?.content,
                        }}></div>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}
export default BlogSingle
