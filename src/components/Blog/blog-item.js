import React from "react";
import Link from "next/link";

function BlogItem(props) {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let BlogItem = props.BlogItem;
    return (

        <div className="BlogItem-card d-flex flex-column pt-4 pb-4">
            <div className="BlogItem-image d-flex p-2">
                <img src={BlogItem.picture} />
            </div>
            <div className="BlogItem-info p-2 d-flex flex-column justify-content-center">
                <h3 className="font-size-13 mb-1 text-gray-800 text-dark">{BlogItem.title}</h3>
                <div className="font-size-13 mb-1 text-gray-800 text-dark" dangerouslySetInnerHTML={{__html: BlogItem.content.substring(0, 250)}}></div>
                <Link href={"/blog/news/"+BlogItem.id}><a className={"text-main hover-underline"}>Մանրամասն</a></Link>
            </div>
        </div>
    );
}

export default BlogItem;
