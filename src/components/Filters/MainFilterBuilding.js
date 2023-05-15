import { Button, Cascader, Col, Form, Row, Select } from "antd";
import React, {  useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import SmallParagraph from "@/components/Typography/paragraph/SmallParagraph";

const filter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

export default function MainFilterBuilding(props) {
    const [form] = Form.useForm();
    const router = useRouter();
    const filtersData = props.filtersData;

    const { t } = useTranslation('common');


    let initialProvince = filtersData.data.locations.find(x => x.id === 1);
    let estateTypeOptions = [];
    let provinces = [];
    let rooms = [];
    let currencies = [
        { value: 3, label: "AMD" },
        { value: 1, label: "USD" },
        { value: 2, label: "RUR" }
    ];

    console.log(filtersData);
    const [cities, setCities] = useState(initialProvince.cities);
    const [prices, setPrices] = useState(filtersData.data.prices.USD);

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




    filtersData.data.rooms.forEach((value) => {
        rooms.push({
            value: value.id,
            label: value.label
        });
    });

    form.setFieldsValue({
        estate_type_id: 1,
        province: 1,
        location_province_id: 1,
        currency_id: 1,
    });

    const handleProvinceChange = (value) => {
        let province = filtersData.data.locations.find(x => x.id === value);
        setCities([]);
        setCities(province.cities);
    };

    const handleCurrencyChange = (value, option) => {
        setPrices(filtersData.data.prices[option.label]);
        form.setFieldValue('prices', null);
    };


    const onFinish = (values) => {

        const queryData = Object.entries(values);
        let query = {};

        queryData.forEach(function(param){
            query[param[0]] = param[1];
        });


        router.push({
            pathname: "/estates",
            query: query
        });
    };

    return (
        <>
            <Form form={form} onFinish={onFinish} action="/search" method="get"
                  className="bg-white text-gray-50 ">
                <Row>


                <Col xs={12} sm={3} className="field-item d-flex flex-column">
                    <SmallParagraph className="pl-2">{t('label.locationCommunity')}</SmallParagraph>
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
                    <SmallParagraph className="pl-2">{t('label.price.Additional')} </SmallParagraph>
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
                    <SmallParagraph className="pl-2">{t('label.currency')}</SmallParagraph>
                    <Form.Item
                        name="currency_id">
                        <Select
                            showSearch
                            placeholder={t('button.pick')}
                            bordered={false}
                            optionFilterProp="children"
                            options={currencies}
                            onChange={handleCurrencyChange}
                        />
                    </Form.Item>
                </Col>
                <Col xs={12} sm={3} className="field-item d-flex flex-column">
                    <SmallParagraph className="pl-2">{t('label.design.room')}</SmallParagraph>
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
                    <Col xs={12} sm={3} className="field-item   ">
                        <Button htmlType="submit"
                                className="btn btn-main w-100"
                                size="large">
                            {t('button.search')}
                        </Button>
                    </Col>

                    <Col xs={12} sm={6} className="field-item pl-3 pr-3">
                        <Button
                            className="btn  bg-white hover-primary w-100" size="large">
                            Ստանալ առաջարկներ
                        </Button>
                    </Col>

                    <Col xs={12} sm={4} className="field-item pl-3 pr-3">
                        <Button
                            className="btn  bg-gray-800 text-white  w-100" size="large">
                            Պատվիրել զանգ
                        </Button>
                    </Col>
                </Row>
            </Form>

        </>
    );

}
