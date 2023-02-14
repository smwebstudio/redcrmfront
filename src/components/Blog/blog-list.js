import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Professional from "@/components/Professionals/professional";
import BlogItem from "@/components/Blog/blog-item";
import BlogSmallItem from "@/components/Blog/blog-small-item";

export function BlogList(props, type) {

    const title = props.title;
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch("http://redoc/api/blog/"+props.type)
            .then(res => res.json())
            .then(data => {
                setBlogData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);


    return (
        <>
            <div className="container pt-5">
                <div className="">
                    <div className="row">
                        <div className={"col-8"}>
                            <h3 className={"font-bold"}>{title}</h3>
                            {blogData?.data &&

                                blogData.data?.map((item, i) =>
                                <div key={i} className={""}>
                                <BlogItem BlogItem={item} />
                                </div>
                                )
                            }

                            {!blogData?.data?.length &&
                                <h3 className={"mt-2 pb-5 mb-5"}>Ոչինի չի գտնվել</h3>
                            }


                        </div>
                        <div className={"col-4"}>
                            <div className={"d-flex flex-row justify-content-between"}>
                                <h3 className={"font-bold"}>Առաջարկվող</h3>
                                <Link href={"/blog/news/"}><a className={"text-main hover-underline"}>Տեսնել բոլորը</a></Link>
                            </div>



                            {blogData?.data &&

                                blogData.data?.filter((item, i) => i < 6).map((item, i) =>
                                    <div key={i} className={""}>
                                        <BlogSmallItem BlogSmallItem={item} />
                                    </div>
                                )
                            }

                            {!blogData?.data?.length &&
                                <h3 className={"mt-2 pb-5 mb-5"}>Ոչինի չի գտնվել</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


};
export default BlogList;
