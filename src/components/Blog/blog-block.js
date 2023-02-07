import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Professional from "@/components/Professionals/professional";
import BlogItem from "@/components/Blog/blog-item";
import BlogSmallItem from "@/components/Blog/blog-small-item";
import BlogMidItem from "@/components/Blog/blog-mid-item";

export function BlogBlock(props) {

    const title = props.title;
    const articleType = props.type;
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch("http://redoc/api/blog/"+articleType)
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
                            <div className={"row"}>
                            {blogData?.data &&

                                blogData.data?.filter((item, i) => i < 2).map((item, i) =>
                                <div key={i} className={"col-6"}>
                                <BlogMidItem BlogItem={item} />
                                </div>
                                )
                            }

                            {!blogData?.data?.length &&
                                <h3 className={"mt-2 pb-5 mb-5"}>Ոչինի չի գտնվել</h3>
                            }
                            </div>


                        </div>
                        <div className={"col-4"}>
                            <div className={"d-flex flex-row justify-content-end"}>
                                <Link href={"/blog/"+articleType}><a className={"text-main hover-underline mb-2 pb-1 text-underline"}>Տեսնել բոլորը</a></Link>
                            </div>
                            {blogData?.data &&
                                blogData.data?.filter((item, i) => i < 3).map((item, i) =>
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

export async function getStaticProps({}) {

    // Fetch data from external API
    const data = await fetch("http://redoc/api/blog");
    const items = await data.json();

    // Pass data to the page via props
    return { props: { items } };
}

export default BlogBlock;
