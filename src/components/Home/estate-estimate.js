import { Button, Col, Row, Select } from "antd";
import React from "react";
import SelectFilter from "@/components/Filters/select-filter";
import EvaluationForm from "@/components/Filters/evaluation-form";

function EstateEstimate(props) {
    return (

        <div className="container">
            <Row>
                <Col xs={0} sm={24}>
                    <div className="estate-estimate d-flex flex-column justify-content-center pl-4">
                        <div className="row mb-3 mt-5">
                            <div className="col-4">
                                <h5 className="text-white">Բնակարանի գնահատման հաշվիչ</h5>
                                <p className="small text-white">Այս հաշվիչը, հնարավորություն է տալիս որոշել Ձեր
                                    բնակարանի վաճառքի շուկայական գինը:</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <EvaluationForm filtersData={props.filtersData} />
                            </div>
                        </div>

                    </div>
                </Col>
                <Col xs={24} sm={0}>
                    <div className="estate-estimate d-flex" style={{height: 'auto', paddingTop: '200px', backgroundPositionX: 'right'}}>
                        <div className="pt-3 pb-3 pl-3 pr-3  bg-main">
                            <h3 className="text-white">Բնակարանի գնահատման հաշվիչ</h3>
                            <p className="small text-white mb-4">Այս հաշվիչը, հնարավորություն է տալիս որոշել Ձեր բնակարանի
                                վաճառքի շուկայական գինը:</p>
                            <Button htmlType="submit"
                                    size="large">
                                Գնահատել
                            </Button>
                        </div>


                    </div>
                </Col>

            </Row>

        </div>

    );
}

export default EstateEstimate;
