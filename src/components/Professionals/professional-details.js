import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Col, Row, Typography, Image, Tabs } from "antd";
import ContactSimpleForm from "@/components/Forms/contact-simple-form";
import EstatesSection from "@/components/Estate/estates";
import EstateList from "@/components/Estate/estate-list";
import EstateProfessionalList from "@/components/Estate/estate-professional-list";

const { Text } = Typography;

function ProfessionalDetails(props) {
    const router = useRouter();
    console.error(props);
    const [professionalData, setProfessionalData] = useState([]);
    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            if (!id) return null;
            fetch("http://redoc/api/professionals/" + id)
                .then(res => res.json())
                .then(data => {
                    setProfessionalData(data);
                }).catch((e) => {
                console.log(e);
            });
        }


    }, [router.isReady]);


    let publicUrl = process.env.PUBLIC_URL + "/";

    let professional = professionalData.data;

    return (

        <Row className={"container mt-4"}>
            <Col sm={6}>
                <div className={"professionalDetails bg-white pt-4 pb-5 d-flex flex-column justify-center align-items-center mb-5"}>
                    <img className={"avatar"}   src={professional?.profile_picture}  />
                    <Text strong className="mt-2 mb-3">{professional?.full_name}</Text>
                    <Text className="mb-1">Անշարժ գույքի գործակալ</Text>
                    <div>
                        <Text className="d-flex mb-1 justify-content-start text-dark">
                            <img className="mr-2" src={publicUrl + "assets/img/svg/envelope.svg"} />
                            <span className="align-self-center">{professional?.email}</span></Text>
                        <Text className="d-flex justify-content-start text-dark">
                            <img className="mr-2" src={publicUrl + "assets/img/svg/mobile.svg"} />
                            <span className="align-self-center">{professional?.phone_1}</span>
                        </Text>
                    </div>

                </div>

                <ContactSimpleForm />
            </Col>
            <Col sm={18} className={"pl-5 pt-2"}>
                <Tabs
                    defaultActiveKey="1"
                    items={[
                        {
                            label: `Բոլորը`,
                            key: "1",
                            children: <EstateList  type="all" />
                        },
                        {
                            label: `Հայտարարություններ`,
                            key: "2",
                            children: <EstateProfessionalList  id={professional?.user?.id} />
                        },

                    ]}
                />
            </Col>

        </Row>
    );
}

export async function getStaticProps({}) {

    const router = useRouter();
    const { id } = router.query;

    console.log("id");
    console.log(id);
    // Fetch data from external API
    const data = await fetch("http://redoc/api/professional/" + id);
    const articles = await data.json();

    // Pass data to the page via props
    return { props: { articles } };
}

export default ProfessionalDetails;
