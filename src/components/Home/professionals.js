import React, { useEffect, useState } from "react";
import Professional from "@/components/Professionals/professional";
import Link from "next/link";
import { apiURL } from "@/constants";



function Professionals(props) {
    const [professionalsData, setProfessionalsData] = useState([]);
    useEffect(() => {
        fetch(apiURL + "/brokers/best")
            .then(res => res.json())
            .then(data => {
                setProfessionalsData(data);
            }).catch((e) => {
            console.log(e);
        });
    }, []);

    let professionals = professionalsData.data;

    return (
        <div className="container mt-5 mb-5">
            <h5 className="text-dark">Առաջատար մասնագետներ</h5>
            <div className="row">
                {professionals?.map((item, i) =>
                    <div className="col-4 pl-5 pr-5" key={i}>
                        <Professional professional={item} key={i} />
                    </div>
                )
                }
                <div className="col-12 text-right">
                    <Link href="/estates"><a className="text-main hover-underline">Տեսնել բոլորը</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Professionals;
