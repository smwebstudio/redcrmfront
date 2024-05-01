import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Professional from "@/components/Professionals/professional";
import BlogItem from "@/components/Blog/blog-item";
import BlogSmallItem from "@/components/Blog/blog-small-item";
import BlogMidItem from "@/components/Blog/blog-mid-item";
import { apiURL } from "@/constants";
import { Col, Row } from "antd";

export function BlogBlock(props) {

    const title = props.title;
    const articleType = props.type;
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch(apiURL+"api/blog/"+articleType)
            .then(res => res.json())
            .then(data => {
                setBlogData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);


    return <>
        <div className="container pt-sm-5">
            <Row gutter={32}>
                <Col xs={24} sm={16}>
                    <h3 className={"font-bold"}>{title}</h3>
                    <Row gutter={24}>
                        {blogData?.data &&

                            blogData.data?.filter((item, i) => i < 2).map((item, i) =>
                                <Col key={i} xs={24} sm={12}>
                                    <BlogMidItem BlogItem={item} />
                                </Col>
                            )
                        }

                        {!blogData?.data?.length &&
                            <h3 className={"text-center text-sm-left mt-2 pb-5 mb-5"}>Ոչինի չի գտնվել</h3>
                        }
                    </Row>
                </Col>
                <Col xs={0} sm={8}>
                    <div className={"d-flex flex-row justify-content-end"}>
                        <Link
                            href={"/blog/"+articleType}
                            className={"text-main hover-underline mb-2 pb-1 text-underline"}>Տեսնել բոլորը</Link>
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
                </Col>
            </Row>
        </div>
    </>;


};
export default BlogBlock;
