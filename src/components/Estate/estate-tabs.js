import React, { Component, useState } from "react";
import EstatesSection from "@/components/Estate/estates";
import EstatesMap from "@/components/Estate/estates-map";
import { Affix, Col, Layout, Row } from "antd";


function EstateTabs(props) {

    const estatesData = props.estatesData;
    const filtersData = props.filtersData;
    const queryData = props.queryData;
    const queryDataParams = props.queryDataParams;
    const pageDataURL = props.pageDataURL;
    const totalCount = estatesData.meta.total;
    const [estatesCount, setEstatesCount] = useState([]);
    const changeEstatesFoundCount = (estatesCount) => {
        setEstatesCount(estatesCount);
    };




    return (

        <div className={"mt-5"}>
            <div >
                <Row>


                    <Col xs={24}>
                        <EstatesSection changeEstatesFoundCount={changeEstatesFoundCount}
                                        type="all"
                                        estatesData={estatesData}
                                        filtersData={filtersData}
                                        queryData={queryData}
                                        queryDataParams={queryDataParams}
                                        pageDataURL={pageDataURL}
                        />
                    </Col>
                </Row>
            </div>

        </div>
    );

}

export default EstateTabs;
