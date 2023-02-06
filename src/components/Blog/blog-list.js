import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Professional from "@/components/Professionals/professional";
import BlogItem from "@/components/Blog/blog-item";

export function BlogList(props, type) {

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
                            {blogData.data?.map((item, i) =>
                                <div key={i} className={"col-12"}>
                                    <BlogItem BlogItem={item} />
                                </div>
                            )
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

export default BlogList;
