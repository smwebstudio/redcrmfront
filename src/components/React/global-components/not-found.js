import React, { Component, useEffect, useState } from "react";
import Link from "next/link";


export function NotFound() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-12 mt-5 mb-5">
                    <img src={"/assets/img/svg/404.svg"} alt="404" />
                </div>
                <div className="col-12 mb-3">
                    <h3>Ցավոք էջը չի գտնվել</h3>
                </div>
                <div className="col-12 mb-5">
                    <Link href="/"><a className="btn btn-main">Գլխավոր </a></Link>
                </div>
            </div>

        </div>
    );


};


export default NotFound;
