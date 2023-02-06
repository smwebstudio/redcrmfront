import { Tabs } from "antd";
import React, { Component, useState } from "react";
import EstatesSection from "@/components/Estate/estates";
import EstatesMap from "@/components/Estate/estates-map";


function EstateTabs(props) {

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

                <div className={mapState.opened ? "col-8 map-container-opened" : "map-container"}>
                    <EstatesMap toggleMap={onToggleMapClicked} />
                </div>
                <div className={mapState.opened ? "col-4" : "container  pt-5 mt-5 border-top"}>
                    <div className="row ">
                        <div className="col-8">
                            <h4>Բնակարաններ Երևանում<small className="text-secondary ml-3 font-size-13">/ Որոնման
                                արդյունքներ <strong className={"text-dark"}>{estatesCount}</strong> </small></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Tabs
                                defaultActiveKey="1"
                                onChange={changeEstatesFoundCount}
                                items={[
                                    {
                                        label: `Բոլորը`,
                                        key: "1",
                                        children: <EstatesSection changeEstatesFoundCount={changeEstatesFoundCount}
                                                                  type="all"
                                                                  mapState={mapState.opened}
                                        />
                                    },
                                    {
                                        label: `Նոր ավելացված`,
                                        key: "2",
                                        children: <EstatesSection changeEstatesFoundCount={changeEstatesFoundCount}
                                                                  type="latest"
                                                                  mapState={mapState.opened}
                                        />
                                    },
                                    {
                                        label: `Ամենադիտված`,
                                        key: "3",
                                        children: <EstatesSection changeEstatesFoundCount={changeEstatesFoundCount}
                                                                  type="most_hits"
                                                                  mapState={mapState.opened}
                                        />
                                    },
                                    {
                                        label: `Շտապ`,
                                        key: "4",
                                        children: <EstatesSection changeEstatesFoundCount={changeEstatesFoundCount}
                                                                  type="hot"
                                                                  itemColClass={mapState.opened}
                                        />
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default EstateTabs;
