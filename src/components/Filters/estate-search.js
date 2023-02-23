import { Button, Cascader, Col, Form, Row, Select } from "antd";
import SelectFilter from "@/components/Filters/select-filter";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiURL } from "@/constants";
import api from "@/hooks/api";

const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

export default function EstateSearch(props) {
    const [form] = Form.useForm();
    const router = useRouter();
    const { locale } = router;
    const filtersData = props.filtersData;
    const changeEstatesData = props.changeEstatesData;
    const setLoading = props.setLoading;
    const setPageDataURL = props.setPageDataURL;

    console.log('props');
    console.log(props);


    let initialProvince = filtersData.data.locations.find(x => x.id === 1);

    const [cities, setCities] = useState(initialProvince.cities);


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
            label: value.label
        });
    });

    console.log(filtersData);


    filtersData.data.locations.forEach((value) => {
        provinces.push({
            value: value.id,
            label: value.label,
        });
    });

    filtersData.data.prices.forEach((value) => {
        prices.push({
            value: value.label,
            label: value.label
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





    const onFinish = async (values) => {

        console.log('valuesFinish');
        console.log(values);

        setLoading(true);
        const queryData = Object.entries(values);
        let queryURL = '';
        queryData.forEach(function(param) {
            if (param[0] === 'prices' && param[1]) {
                let pricesRange = param[1].split('-');
                console.error('pricesRange');
                console.error(pricesRange);
                queryURL += 'filter[price_from]=' + pricesRange[0] + '&' + 'filter[price_to]=' + pricesRange[1] + '&';
            } else if (param[1]) {
                queryURL += 'filter[' + param[0] + ']' + '=' + param[1] + '&';
            }
        });

        setPageDataURL(apiURL + "api/estates/filter/estates?" + queryURL);

        const estatesFilteredResponse = await api(locale).get(apiURL + "api/estates/filter/estates?" + queryURL);
        const estatesData = estatesFilteredResponse.data;

        changeEstatesData(estatesData);
        setLoading(false);
    };

    const onFormChange = async (changedFields, values) => {

        console.log('valuesChange');
        console.log(values);

        setLoading(true);
        const queryData = Object.entries(values);
        let queryURL = '';
        queryData.forEach(function(param) {
            if (param[0] === 'prices' && param[1]) {
                let pricesRange = param[1].split('-');
                console.error('pricesRange');
                console.error(pricesRange);
                queryURL += 'filter[price_from]=' + pricesRange[0] + '&' + 'filter[price_to]=' + pricesRange[1] + '&';
            } else if (param[1]) {
                queryURL += 'filter[' + param[0] + ']' + '=' + param[1] + '&';
            }
        });

        setPageDataURL(apiURL + "api/estates/filter/estates?" + queryURL);

        const estatesFilteredResponse = await api(locale).get(apiURL + "api/estates/filter/estates?" + queryURL);
        const estatesData = estatesFilteredResponse.data;

        changeEstatesData(estatesData);
        setLoading(false);
    };


    return (
        <>
            <Form form={form} onFinish={onFinish} onValuesChange={onFormChange}
                  className="bg-white text-gray-50 ">
                <Row>
                    <Col xs={12} sm={3} className="field-item d-flex flex-column">
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
                    <Col xs={12} sm={3} className="field-item d-flex flex-column">
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
                    <Col xs={12} sm={3} className="field-item d-flex flex-column">
                        <small className="pl-2">Համայնք</small>
                        <Form.Item
                            name="location_city_id"
                        >
                            <Select
                                showSearch
                                placeholder="Ընտրել"
                                bordered={false}
                                optionFilterProp="children"
                                style={{ width: '100%' }}
                                dropdownMatchSelectWidth={false}
                                options={cities}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={3} className="field-item d-flex flex-column">
                        <small className="pl-2">Գին</small>
                        <Form.Item
                            name="prices"
                        >
                            <Select
                                showSearch
                                placeholder="Ընտրել"
                                bordered={false}
                                optionFilterProp="children"
                                options={prices}
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={2} className="field-item d-flex flex-column">
                        <small className="pl-2">Արժույթ</small>
                        <Form.Item
                            name="currency">
                            <Select
                                showSearch
                                placeholder="Ընտրել"
                                defaultValue={'AMD'}
                                bordered={false}
                                optionFilterProp="children"
                                options={currencies}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={2} className="field-item d-flex flex-column">
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
                    <Col xs={12} sm={4} className="field-item pl-3 pr-3">
                        <Button
                            className="btn  bg-white hover-primary w-100" size="large">
                            Լրացուցիչ
                        </Button>
                    </Col>
                    <Col xs={12} sm={4} className="field-item   ">
                        <Button htmlType="submit"
                                className="btn btn-main w-100"
                                size="large">
                            Փնտրել
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    );

}
