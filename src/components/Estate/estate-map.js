import React, { Component, useState } from "react";
import EstatesSection from "@/components/Estate/estates";
import EstatesMap from "@/components/Estate/estates-map";
import { Affix, Button, Col, Divider, Layout, Row } from "antd";
import EstateSearch from "@/components/Filters/estate-search";
import estatesGoogleMap from "@/components/Estate/estatesGoogleMap";
import EstatesGoogleMap from "@/components/Estate/estatesGoogleMap";
import ContainerBoxed from "@/components/Containers/ContainerBoxed";
import MapFilters from "@/components/Filters/MapFilters";


function EstateMap(props) {

    const filtersData = props.filtersData;
    const queryData = props.queryData;
    const queryDataParams = props.queryDataParams;
    const [estatesData, setEstatesData] = useState(props.estatesData);
    const [coords, setCoords] = useState([]);
    const [sortType, setSortType] = useState("created_on");
    const [pageDataURL, setPageDataURL] = useState(props.pageDataURL + "?");

    const [loading, setLoading] = useState(false);


    return (

        <>


            <Row gutter={48}>
                <Col xs={20} sm={18} className={""} style={{ overflow: "hidden" }}>

                    {/*<EstatesMap style={{ overflow: "hidden" }} toggleMap={onToggleMapClicked} />*/}

                    <EstatesGoogleMap estatesData={estatesData} changeCoords={setCoords} />
                </Col>


                <Col xs={6}>
                    <MapFilters
                        filtersData={filtersData}
                        queryData={queryData}
                        queryDataParams={queryDataParams}
                        changeEstatesData={setEstatesData}
                        coords={coords}
                        setLoading={setLoading}
                        setPageDataURL={setPageDataURL}
                    />

                </Col>

                <Divider />


            </Row>

        </>
    );

}

export default EstateMap;
