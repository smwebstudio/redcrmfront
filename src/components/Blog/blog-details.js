import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ShareButtons from "@/components/Global/share-buttons";

function BlogDetails(props) {
    const router = useRouter();

    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        if(router.isReady){
            const { id } = router.query;
            if (!id) return null;
            fetch("http://redoc/api/blog/" + id)
                .then(res => res.json())
                .then(data => {
                    setBlogData(data);
                }).catch((e) => {
                console.log(e);
            });
        }


    }, [router.isReady]);



    let publicUrl = process.env.PUBLIC_URL + "/";

    let article = blogData.data;

    return (

        <div className={"container mt-4"}>

            <div className={"row"}>
                <div className={"col-8 offset-2"}>

                    <ShareButtons />
                    <div className={"row"}>
                        <p className="blog_created_at text-gray-800 mt-5 mb-5">
                            <img src={"/assets/img/svg/calendar_icon.svg"} alt="calendar" className={"mr-1"} /> {article?.created_at}թ․</p>
                    </div>
                    <div className={"row"}>
                        <h1 className="blog_title text-gray-800 text-dark mb-4">{article?.title}</h1>
                    </div>
                    <div className="row">
                        <div className="BlogDetails-info justify-content-center">
                            <div className="font-size-13 mb-1 text-gray-800 text-dark"
                                 dangerouslySetInnerHTML={{ __html: article?.content }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default BlogDetails;
