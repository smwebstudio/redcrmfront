'use client'
import {
    Affix,
    Button,
    Cascader,
    Checkbox,
    Col,
    Divider,
    Form,
    Input,
    Radio,
    Row,
    Select,
    Steps,
} from 'antd'
import React, { useEffect, useState } from 'react'
import UploadBlock from '@/components/Uploader/uploadBlock'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useTranslation } from '@/app/i18n/client'
import ContainerBoxed from '@/components/Containers/ContainerBoxed'
import DarkHeading1 from '@/components/Typography/Heading1/DarkHeading1'
import DarkHeading2 from '@/components/Typography/Heading2t/DarkHeading2'

const { Option } = Select

const filter = (inputValue, path) =>
    path.some(
        option =>
            option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
    )

const AddProperty = ({ lng, evaluationData }) => {
    const { t } = useTranslation(lng, 'common')

    const locationOptions = []

    let buildingOptionsData = []
    const [form] = Form.useForm()
    const [location, setLocation] = useState([locationOptions])
    const [estateOptions, setEstateOptions] = useState(
        evaluationData.estateOptionsData,
    )
    const [buildingOptions, setBuildingOptions] = useState([])
    useEffect(() => {
        console.log('evaluationData')
        console.log(evaluationData)
        evaluationData.locationData.forEach(value => {
            locationOptions.push({
                value: value.id,
                label: value.label,
                children: value.cities,
            })
        })

        buildingOptionsData = Object.entries(
            evaluationData.buildingOptionsData,
        ).map(([name, values]) => ({
            name,
            values,
        }))

        let buildingLists = []

        buildingOptionsData.forEach(list => {
            console.error('value')
            console.error(list)

            buildingLists.push({
                name: list.name,
                options: list.values,
            })
        })

        setLocation([...locationOptions])
        setBuildingOptions([...buildingLists])
    }, [])

    const onFinish = values => {
        console.log('Received values of form: ', values)
    }

    const [current, setCurrent] = useState(0)
    const onStepChange = value => {
        setCurrent(value)
    }

    return (
        <ContainerBoxed className={'mt-5 mb-5'}>
            <Row>
                <DarkHeading1>{t('label.addNewAnnouncement')}</DarkHeading1>
            </Row>

            <Row gutter={32}>
                <Col xs={24} xl={18} className={'add_property_wrapper mt-2'}>
                    <Form
                        form={form}
                        name="register"
                        layout="vertical"
                        onFinish={onFinish}
                        style={{}}
                        scrollToFirstError>
                        <Row gutter={32}>
                            <Col xs={24} className={'mb-4'}>
                                <DarkHeading2>
                                    {t('label.newAnouncTitle1')}
                                </DarkHeading2>
                            </Col>
                            <Col xs={24} sm={8}>
                                <Form.Item
                                    name="full_name"
                                    label={t('label.firstNameConact')}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item
                                    name="phone"
                                    label={t('label.yourPhone')}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Input
                                        addonBefore={'+' + 374}
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Form.Item
                                    name="email"
                                    label={t('label.email.address')}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Divider />
                        </Row>

                        <Row>
                            <Col span={24}>
                                <h4 className={'mb-3 font-bold font-size-13'}>
                                    {t('label.estateType')}
                                </h4>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="estate_type"
                                    label=""
                                    wrapperCol={{ sm: 24 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Radio.Group
                                        buttonStyle="solid"
                                        size="large"
                                        style={{ width: '100%' }}>
                                        <Radio.Button
                                            value="a"
                                            style={{
                                                width: '25%',
                                                textAlign: 'center',
                                            }}>
                                            {t('label.apartment')}
                                        </Radio.Button>
                                        <Radio.Button
                                            value="b"
                                            style={{
                                                width: '25%',
                                                textAlign: 'center',
                                            }}>
                                            {t('label.house')}
                                        </Radio.Button>
                                        <Radio.Button
                                            value="c"
                                            style={{
                                                width: '25%',
                                                textAlign: 'center',
                                            }}>
                                            {t('label.commercial')}
                                        </Radio.Button>
                                        <Radio.Button
                                            value="d"
                                            style={{
                                                width: '25%',
                                                textAlign: 'center',
                                            }}>
                                            {t('label.land')}
                                        </Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>

                            <Divider />
                        </Row>

                        <Row>
                            <Col span={24}>
                                <h4 className={'mb-3 font-bold font-size-13'}>
                                    {t('label.contract')}
                                </h4>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="contract_type"
                                    label=""
                                    wrapperCol={{ sm: 24 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Radio.Group
                                        buttonStyle="solid"
                                        size="large"
                                        style={{ width: '100%' }}>
                                        <Radio.Button
                                            value="aa"
                                            style={{
                                                width: '33%',
                                                textAlign: 'center',
                                            }}>
                                            {t('button.sale')}
                                        </Radio.Button>
                                        <Radio.Button
                                            value="bb"
                                            style={{
                                                width: '33%',
                                                textAlign: 'center',
                                            }}>
                                            {t('button.rent')}
                                        </Radio.Button>
                                        <Radio.Button
                                            value="cc"
                                            style={{
                                                width: '33%',
                                                textAlign: 'center',
                                            }}>
                                            {t('label.title.fee.normal')}
                                        </Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>

                            <Divider />
                        </Row>

                        <Row gutter={24}>
                            <Col span={24}>
                                <DarkHeading2
                                    className={'mb-3 font-bold font-size-13'}>
                                    {t('label.general')}
                                </DarkHeading2>
                            </Col>
                            <Col span={24}>
                                <Form.Item
                                    name="residence"
                                    label={t('label.address')}
                                    wrapperCol={{ sm: 24 }}
                                    rules={[
                                        {
                                            type: 'array',
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Cascader
                                        options={location}
                                        showSearch={{ filter }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Item
                                    name="building"
                                    label={t('label.building')}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Item
                                    name="apartment"
                                    label={t('label.apartment')}
                                    rules={[
                                        {
                                            required: true,
                                            message: t('notification.required'),
                                        },
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Item
                                    name="floor"
                                    label={t('label.floor')}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Item
                                    name="floor_count"
                                    label={t('label.buildingFloorCount')}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Item
                                    name="ceil_height"
                                    label={t('label.ceilingHeight')}>
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Form.Item
                                    name="area"
                                    wrapperCol={24}
                                    label={t('label.area')}>
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Divider />
                        </Row>

                        <Row>
                            <Col span={24}>
                                <h4 className={'mb-3 font-bold font-size-13'}>
                                    {t('label.images')}
                                </h4>
                            </Col>
                            <Col span={24}>
                                <UploadBlock />
                            </Col>
                            <Divider />
                        </Row>

                        <Row gutter={24}>
                            <Col span={24}>
                                <h4 className={'mb-3 font-bold font-size-13'}>
                                    {t('label.buildingApartment')}
                                </h4>
                            </Col>

                            {buildingOptions.map((item, index) => (
                                <Col sm={8} xs={12} key={index}>
                                    <Form.Item
                                        name={item.name}
                                        wrapperCol={24}
                                        label={t('label.' + item.name)}>
                                        <Select options={item.options} />
                                    </Form.Item>
                                </Col>
                            ))}
                            <Divider />
                        </Row>

                        <Row>
                            <Col span={24}>
                                <h4 className={'mb-3 font-bold font-size-13'}>
                                    {t('label.other')}
                                </h4>
                            </Col>
                            <Col span={24}>
                                <Checkbox.Group options={estateOptions} />
                            </Col>
                            <Divider />
                        </Row>

                        <Row>
                            <Col span={4} offset={20}>
                                <Form.Item wrapperCol={{ sm: 24 }}>
                                    <Button type="primary" htmlType="submit">
                                        {t('button.send')}
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col xs={0} xl={6} className={'pt-5 shadow'}>
                    <Affix offsetTop={150}>
                        <Steps
                            direction="vertical"
                            onChange={onStepChange}
                            current={current}
                            items={[
                                {
                                    title: t(
                                        'label.newAnnouncement.personalInfo',
                                    ),
                                    icon: <CheckCircleOutlined />,
                                },
                                {
                                    title: t('common:label.estateType'),
                                    icon: <CheckCircleOutlined />,
                                    status: 'finish',
                                },
                                {
                                    title: t('common:label.contract'),
                                    icon: <CheckCircleOutlined />,
                                },
                                {
                                    title: t('common:label.general'),
                                    icon: <CheckCircleOutlined />,
                                },
                                {
                                    title: t('common:label.buildingApartment'),
                                    icon: <CheckCircleOutlined />,
                                },
                                {
                                    title: t('common:label.other'),
                                    icon: <CheckCircleOutlined />,
                                },
                            ]}
                        />
                        <Button className={'mt-5'} style={{ width: '100%' }}>
                            {t('common:button.reset')}
                        </Button>
                    </Affix>
                </Col>
            </Row>
        </ContainerBoxed>
    )
}
export default AddProperty
