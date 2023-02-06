import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ShareButtons from "@/components/Global/share-buttons";

function BlogDetails(props) {
    const router = useRouter();
    const { id } = router.query;
    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        fetch("http://redoc/api/blog/" + id)
            .then(res => res.json())
            .then(data => {
                setBlogData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    let publicUrl = process.env.PUBLIC_URL + "/";

    let article = blogData.data;

    return (

        <div className={"container mt-4"}>

            <div className={"row"}>
                <div className={"col-8 offset-2"}>

                    <ShareButtons />
                    <div className={"row"}>
                        <p className="blog_created_at text-gray-800 text-dark mb-4">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_500_4586)">
                                    <path d="M13.6584 1.56706H11.486V0.434489C11.486 0.319255 11.4402 0.208739 11.3587 0.127256C11.2773 0.0457738 11.1667 0 11.0515 0C10.9363 0 10.8258 0.0457738 10.7443 0.127256C10.6628 0.208739 10.617 0.319255 10.617 0.434489V1.56706H4.37197V0.434489C4.37197 0.319255 4.3262 0.208739 4.24472 0.127256C4.16323 0.0457738 4.05272 0 3.93748 0C3.82225 0 3.71173 0.0457738 3.63025 0.127256C3.54877 0.208739 3.50299 0.319255 3.50299 0.434489V1.56706H1.33055C0.978821 1.56744 0.641616 1.70734 0.392906 1.95605C0.144196 2.20476 0.00428961 2.54196 0.00390625 2.89369V13.6748C0.00429009 14.0264 0.144243 14.3635 0.392994 14.6119C0.641746 14.8604 0.978954 15 1.33055 15H13.6584C14.0099 15 14.347 14.8604 14.5955 14.6119C14.844 14.3633 14.9836 14.0263 14.9836 13.6748V2.89369C14.9836 2.5421 14.8441 2.20489 14.5956 1.95614C14.3471 1.70738 14.01 1.56744 13.6584 1.56706ZM1.32475 2.43603H3.4972V3.54398C3.4972 3.65922 3.54297 3.76973 3.62445 3.85121C3.70593 3.93269 3.81645 3.97847 3.93168 3.97847C4.04692 3.97847 4.15743 3.93269 4.23892 3.85121C4.3204 3.76973 4.36617 3.65922 4.36617 3.54398V2.43603H10.617V3.54398C10.617 3.65922 10.6628 3.76973 10.7443 3.85121C10.8258 3.93269 10.9363 3.97847 11.0515 3.97847C11.1667 3.97847 11.2773 3.93269 11.3587 3.85121C11.4402 3.76973 11.486 3.65922 11.486 3.54398V2.43603H13.6584C13.7796 2.43642 13.8956 2.48481 13.9811 2.57059C14.0666 2.65638 14.1146 2.77256 14.1146 2.89369V5.34566H0.867103V2.89369C0.867485 2.77243 0.915809 2.65625 1.00155 2.5705C1.0873 2.48476 1.20349 2.43642 1.32475 2.43603ZM13.6584 14.131H1.32475C1.20362 14.131 1.08745 14.083 1.00166 13.9975C0.915874 13.912 0.867486 13.7959 0.867103 13.6748V6.21464H14.1146V13.6748C14.1146 13.7958 14.0666 13.9118 13.981 13.9974C13.8955 14.083 13.7794 14.131 13.6584 14.131Z" fill="#959595"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_500_4586">
                                        <rect width="14.9855" height="15" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            {article?.created_at}</p>
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

export async function getStaticProps({}) {

    const router = useRouter();
    const { id } = router.query;

    console.log("id");
    console.log(id);
    // Fetch data from external API
    const data = await fetch("http://redoc/api/blog/" + id);
    const articles = await data.json();

    // Pass data to the page via props
    return { props: { articles } };
}

export default BlogDetails;
