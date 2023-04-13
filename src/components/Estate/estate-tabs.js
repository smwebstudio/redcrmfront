import React, { Component, useState } from "react";
import EstatesSection from "@/components/Estate/estates";
import EstatesMap from "@/components/Estate/estates-map";
import { Affix, Col, Layout, Row } from "antd";


function EstateTabs(props) {

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

        <div className={mapState.opened ? "container-fluid mt-5" : "mt-5"}>
            <div className={mapState.opened ? "row" : ""}>

                {/*<div className={mapState.opened ? "col-8 map-container-opened" : "map-container"}>*/}
                {/*    <EstatesMap toggleMap={onToggleMapClicked} />*/}
                {/*</div>*/}
                <Row>
                    <Col xs={4} sm={mapState.opened ? 16 : 4} className={""}
                         style={{ overflow: "hidden" }}>
                        <Affix offsetTop={80} className={"map-overflow-hidden "}
                               style={{ overflow: "hidden", }}>
                            <EstatesMap style={{ overflow: "hidden" }} toggleMap={onToggleMapClicked} />
                        </Affix>
                    </Col>

                    <Col offset={mapState.opened ? 0 : 1} xs={mapState.opened ? 7 : 16}>
                        <EstatesSection changeEstatesFoundCount={changeEstatesFoundCount}
                                        type="all"
                                        mapState={mapState.opened}
                                        estatesData={estatesData}
                                        filtersData={filtersData}
                                        pageDataURL={pageDataURL}
                        />
                    </Col>
                </Row>
            </div>

        </div>
    );

}

export default EstateTabs;
