import React, { Component, useState } from "react";
import EstatesSection from "@/components/Estate/estates";
import EstatesMap from "@/components/Estate/estates-map";
import { Affix, Button, Col, Divider, Layout, Row } from "antd";
import EstateSearch from "@/components/Filters/estate-search";


function EstateMap(props) {

    const estatesData = props.estatesData;
    const filtersData = props.filtersData;
    const pageDataURL = props.pageDataURL;
    const totalCount = estatesData.meta.total;
    const [estatesCount, setEstatesCount] = useState([]);
    const [mapState, setMapState] = useState(false);
    const changeEstatesFoundCount = (estatesCount) => {
        setEstatesCount(estatesCount);
    };

    function onToggleMapClicked() {
        setMapState(prevState => ({
            opened: !prevState.opened
        }));
    }


    return (

        <>

            <Row className={"mb-5"}>
                <Col xs={24} className={"sortButtonsWrapper"}>

                    <Button className={"sortButton"} onClick={() => sortEstates("created_on")}>
                        Նոր ավելացված
                    </Button>
                    <Button className={"sortButton"} onClick={() => sortEstates("-visits_count")}>
                        Ամենադիտված
                    </Button>
                    <Button className={"sortButton"} onClick={() => sortEstates("-room_count")}>
                        Շտապ
                    </Button>

                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} className={""} style={{ overflow: "hidden" }}>

                    <EstatesMap style={{ overflow: "hidden" }} toggleMap={onToggleMapClicked} />

                </Col>


            </Row>

        </>
    );

}

export default EstateMap;
