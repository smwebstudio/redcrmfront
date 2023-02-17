import { Button, Cascader, Col, Form, Row, Select } from "antd";
import React, {  useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

export default function MainFilter(props) {
    const [form] = Form.useForm();
    const router = useRouter();
    const filtersData = props.filtersData;


    const { t } = useTranslation('common');


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

    console.log(filtersData);


    filtersData.data.estate_types.forEach((value) => {
        estateTypeOptions.push({
            value: value.id,
            label: value.label
        });
    });


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

    console.log(filtersData);

    filtersData.data.rooms.forEach((value) => {
        rooms.push({
            value: value.id,
            label: value.label
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
                  className="bg-white text-gray-50 ">
                <Row>
                <Col xs={12} sm={3} className="field-item d-flex flex-column">
                    <small className="pl-2">{t('label.type')}</small>
                    <Form.Item
                        name="estate_type_id">
                        <Select
                            showSearch
                            placeholder={t('label.type')}
                            defaultValue={1}
                            bordered={false}
                            optionFilterProp="children"
                            options={estateTypeOptions}
                        />
                    </Form.Item>


                </Col>
                <Col xs={12} sm={3} className="field-item d-flex flex-column">
                    <small className="pl-2">{t('label.locationProvince')}</small>
                    <Form.Item
                        name="location_province_id"
                    >
                        <Select
                            showSearch
                            placeholder={t('label.locationProvince')}
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
                    <small className="pl-2">{t('label.locationCommunity')}</small>
                    <Form.Item
                        name="location_city_id"
                    >
                        <Select
                            showSearch
                            placeholder={t('button.pick')}
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
                    <small className="pl-2">{t('label.price.Additional')}</small>
                    <Form.Item
                        name="prices"
                    >
                        <Select
                            showSearch
                            placeholder={t('button.pick')}
                            bordered={false}
                            optionFilterProp="children"
                            options={prices}
                            allowClear
                        />
                    </Form.Item>
                </Col>
                <Col xs={12} sm={2} className="field-item d-flex flex-column">
                    <small className="pl-2">{t('label.currency')}</small>
                    <Form.Item
                        name="currency">
                        <Select
                            showSearch
                            placeholder={t('button.pick')}
                            defaultValue={'AMD'}
                            bordered={false}
                            optionFilterProp="children"
                            options={currencies}
                        />
                    </Form.Item>
                </Col>
                <Col xs={12} sm={2} className="field-item d-flex flex-column">
                    <small className="pl-2">{t('label.design.room')}</small>
                    <Form.Item
                        name="room_count"
                    >
                        <Select
                            showSearch
                            placeholder={t('button.pick')}
                            bordered={false}
                            optionFilterProp="children"
                            options={rooms}
                        />
                    </Form.Item>
                </Col>
                <Col xs={12} sm={4} className="field-item pl-3 pr-3">
                    <Button
                        className="btn  bg-white hover-primary w-100" size="large">
                        {t('label.additional')}
                    </Button>
                </Col>
                    <Col xs={12} sm={4} className="field-item   ">
                        <Button htmlType="submit"
                                className="btn btn-main w-100"
                                size="large">
                            {t('button.search')}
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    );

}
