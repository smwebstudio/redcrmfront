import React from 'react'
import AppImage from '@/components/common/Image/AppImage'
import { Col, Row } from 'antd'

function BlogSmallItem(props) {
    let BlogSmallItem = props.BlogSmallItem

    let itemTags = ['Անշարժ գույք', 'Գներ', 'Նորություններ', 'Այլ']

    return (
        <Row gutter={16} className={'mb-6'}>
            <Col xs={24} md={8} className="BlogSmallItem-image flex col-5">
                <AppImage alt={'Red Group'} src={BlogSmallItem.picture} />
            </Col>
            <Col
                xs={24}
                md={16}
                className="BlogSmallItem-info flex p-0 flex-col justify-center col-7">
                <p className="font-size-11 flex mb-2">
                    <AppImage
                        alt={'Red Group'}
                        src={'/assets/img/svg/calendar_icon.svg'}
                    />
                    <AppImage className={'mr-1'} /> {BlogSmallItem.created_at}
                    թ․
                </p>
                <p className="font-size-13 mt-1 mb-2 text-gray-800 text-dark">
                    <span className={'bg-light-gray blog-list-tag p-1 mr-2'}>
                        {itemTags[Math.floor(Math.random() * itemTags.length)]}{' '}
                    </span>
                    <span className={'bg-light-gray blog-list-tag p-1 mr-2'}>
                        {itemTags[Math.floor(Math.random() * itemTags.length)]}{' '}
                    </span>
                </p>
                <h3 className="font-size-13 mb-1 text-gray-800 text-dark">
                    {BlogSmallItem.title}
                </h3>
            </Col>
        </Row>
    )
}

export default BlogSmallItem
