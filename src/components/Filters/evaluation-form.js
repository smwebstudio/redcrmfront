import { Button, Cascader, Col, Form, Row, Select } from "antd";
import SelectFilter from "@/components/Filters/select-filter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

export default function EvaluationForm(props) {
    const [form] = Form.useForm();
    const router = useRouter();
    const filtersData = props.filtersData;


    let initialProvince = filtersData.data.locations.find(x => x.id === 1);

    const [cities, setCities] = useState(initialProvince.cities);

    console.error(filtersData);

    let estateTypeOptions = [];
    let provinces = [];
    let prices = [];
    let rooms = [];
    let currencies = [
        {value: 'AMD', label: 'AMD'},
        {value: 'USD', label: 'USD'},
        {value: 'RUR', label: 'RUR'},
    ];

    filtersData.data.estate_types.forEach((value) => {
        estateTypeOptions.push({
            value: value.id,
            label: value.name_arm
        });
    });

    filtersData.data.locations.forEach((value) => {
        provinces.push({
            value: value.id,
            label: value.name,
        });
    });

    filtersData.data.prices.forEach((value) => {
        prices.push({
            value: value.name_arm,
            label: value.name_arm
        });
    });

    filtersData.data.rooms.forEach((value) => {
        rooms.push({
            value: value.id,
            label: value.name_arm
        });
    });



    const handleProvinceChange = (value) => {
        let province = filtersData.data.locations.find(x => x.id === value);
        setCities([]);
        setCities(province.cities);
    };





    const onFinish = (values) => {

        const queryData = Object.entries(values);

        let query = {};

        queryData.forEach(function(param){
            query[param[0]] = param[1];
        });


        router.push({
            pathname: "/search",
            query: query
        });
    };

    return (
        <>
            <Form form={form} onFinish={onFinish} action="/search" method="get"
                  className="bg-white text-gray-50  pl-3 pr-3 pt-3">
                <Row className={"d-flex align-items-center"}>
                    <Col span={6} className="field-item d-flex flex-column">
                        <small className="pl-2">Տեսակ</small>
                        <Form.Item
                            name="estate_type_id">
                            <Select
                                showSearch
                                placeholder="Տեսակ"
                                defaultValue={1}
                                bordered={false}
                                optionFilterProp="children"
                                options={estateTypeOptions}
                            />
                        </Form.Item>


                    </Col>


                    <Col span={6} className="field-item d-flex flex-column">
                        <small className="pl-2">Մարզ</small>
                        <Form.Item
                            name="location_province_id"
                        >
                            <Select
                                showSearch
                                placeholder="Մարզ"
                                defaultValue={1}
                                bordered={false}
                                optionFilterProp="children"
                                options={provinces}
                                style={{ width: '100%' }}
                                dropdownMatchSelectWidth={false}
                                onChange={handleProvinceChange}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6} className="field-item d-flex flex-column">
                        <small className="pl-2">Սենյակ</small>
                        <Form.Item
                            name="room_count"
                        >
                            <Select
                                showSearch
                                placeholder="Ընտրել"
                                bordered={false}
                                optionFilterProp="children"
                                options={rooms}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={6} className="field-item   ">
                        <Button htmlType="submit"
                                className="btn btn-main w-100"
                                size="large">
                            Գնահատել
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    );

}
