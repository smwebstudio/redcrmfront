'use client'
import { Button, Col, Row } from 'antd'
import React from 'react'
import EvaluationForm from '@/components/Filters/evaluation-form'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'

function EstateEstimate(props) {
    return (
        <ContainerBoxed>
            <Row>
                <Col xs={0} sm={24}>
                    <div className="estate-estimate flex flex-col justify-end pl-10 pr-10 pb-10">
                        <Row className="mb-3">
                            <Col xs={12}>
                                <h5 className="text-white">
                                    Բնակարանի գնահատման հաշվիչ
                                </h5>
                                <p className="small text-white">
                                    Այս հաշվիչը, հնարավորություն է տալիս որոշել
                                    Ձեր բնակարանի վաճառքի շուկայական գինը:
                                </p>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col xs={12}>
                                <EvaluationForm
                                    filtersData={props.filtersData}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={24} sm={0}>
                    <div
                        className="estate-estimate flex"
                        style={{
                            height: 'auto',
                            paddingTop: '200px',
                            backgroundPositionX: 'right',
                        }}>
                        <div className="pt-3 pb-3 pl-3 pr-3  bg-main">
                            <h3 className="text-white">
                                Բնակարանի գնահատման հաշվիչ
                            </h3>
                            <p className="small text-white mb-4">
                                Այս հաշվիչը, հնարավորություն է տալիս որոշել Ձեր
                                բնակարանի վաճառքի շուկայական գինը:
                            </p>
                            <Button htmlType="submit" size="large">
                                Գնահատել
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}

export default EstateEstimate
