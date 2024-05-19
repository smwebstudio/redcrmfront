import React from 'react'
import Link from 'next/link'
import AppImage from '@/components/common/Image/AppImage'

function BlogMidItem(props) {
    let BlogItem = props.BlogItem
    let ShotContent = BlogItem?.content?.substring(0, 200) + '...'
    let itemTags = ['Անշարժ գույք', 'Գներ', 'Նորություններ', 'Այլ']

    return (
        <div className="BlogItem-card d-flex flex-column pt-4 pb-4">
            <div className="BlogItem-image d-flex">
                <Link
                    href={'/blog/news/' + BlogItem.id}
                    className={'text-main hover-underline'}>
                    <AppImage alt={'Red Group'} src={BlogItem.picture} />
                </Link>
            </div>
            <div className="BlogItem-info no-shadow d-flex pb-3 pt-3 pl-3 pr-3 flex-column justify-content-center">
                <p className="font-size-11 d-flex  mb-2">
                    <AppImage
                        alt={'Red Group'}
                        src={'/assets/img/svg/calendar_icon.svg'}
                    />
                    <AppImage className={'mr-1'} />
                    {BlogItem.created_at}թ․
                </p>
                <p className="font-size-13 mt-2 mb-3 text-gray-800 text-dark">
                    <span className={'bg-light-gray blog-list-tag p-1 mr-2'}>
                        {itemTags[Math.floor(Math.random() * itemTags.length)]}{' '}
                    </span>
                    <span className={'bg-light-gray blog-list-tag p-1 mr-2'}>
                        {itemTags[Math.floor(Math.random() * itemTags.length)]}{' '}
                    </span>
                </p>
                <Link
                    href={'/blog/news/' + BlogItem.id}
                    className={'text-main hover-underline'}>
                    <h3 className="font-size-13 mb-3 text-gray-800 text-dark">
                        {BlogItem.title}
                    </h3>
                </Link>
            </div>
        </div>
    )
}

export default BlogMidItem
