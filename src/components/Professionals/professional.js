import React from "react";
import Link from "next/link";

function Professional(props) {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let professional = props.professional;
    console.log(professional)
    return (

        <div className="professional-card d-flex flex-row pt-4 pb-4">
            <div className="professional-image d-flex p-2">
                <Link href={"professionals/" + professional.id}>
                    <a>

                        <img src={professional.profile_picture} />
                    </a>
                </Link>
            </div>
            <div className="professional-info p-2 d-flex flex-column justify-content-center">
                <p className="font-size-13 mb-1 text-gray-800 text-dark">{professional.full_name}</p>
                <p className="mb-1">Անշարժ գույքի գործակալ</p>
                <p className="d-flex mb-1 justify-content-start text-dark"><img className="mr-2" src={publicUrl + "assets/img/svg/envelope.svg"} /> <span className="align-self-center">{professional.email}</span></p>
                <p className="d-flex justify-content-start text-dark"><img className="mr-2" src={publicUrl + "assets/img/svg/mobile.svg"} /><span className="align-self-center">{professional.phone_1}</span></p>
            </div>
        </div>
    );
}

export default Professional;
