import React from 'react'
import { Image } from 'antd'

function BlogSmallItem(props) {
    let BlogSmallItem = props.BlogSmallItem

    let itemTags = ['Անշարժ գույք', 'Գներ', 'Նորություններ', 'Այլ']

    return (
        <div className="BlogSmallItem-card d-flex flex-row pt-4 pb-1">
            <div className={'row'}>
                <div className="BlogSmallItem-image d-flex col-5">
                    <Image alt={'Red Group'} src={BlogSmallItem.picture} />
                </div>
                <div className="BlogSmallItem-info d-flex p-0 flex-column justify-content-center col-7">
                    <p className="font-size-11 d-flex mb-2">
                        <Image
                            alt={'Red Group'}
                            src={'/assets/img/svg/calendar_icon.svg'}
                        />
                        <Image className={'mr-1'} /> {BlogSmallItem.created_at}
                        թ․
                    </p>
                    <p className="font-size-13 mt-1 mb-2 text-gray-800 text-dark">
                        <span
                            className={'bg-light-gray blog-list-tag p-1 mr-2'}>
                            {
                                itemTags[
                                    Math.floor(Math.random() * itemTags.length)
                                ]
                            }{' '}
                        </span>
                        <span
                            className={'bg-light-gray blog-list-tag p-1 mr-2'}>
                            {
                                itemTags[
                                    Math.floor(Math.random() * itemTags.length)
                                ]
                            }{' '}
                        </span>
                    </p>
                    <h3 className="font-size-13 mb-1 text-gray-800 text-dark">
                        {BlogSmallItem.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default BlogSmallItem
