'use client'
import { Button, Col, Form, Row, Select } from 'antd'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/app/i18n/client'
import SmallParagraph from '@/components/Typography/paragraph/SmallParagraph'
import { OrderCall } from '@/components/Developers/OrderCall'
import { FilterSelect } from '@/components/common/Selects/FilterSelect'

export default function DeveloperFilters({ filtersData, lng }) {
    const [form] = Form.useForm()
    const router = useRouter()

    const { t } = useTranslation(lng, 'common')

    const [projects, setProjects] = useState(
        filtersData.data.map(item => ({
            value: item.id,
            label: item.title,
        })),
    )

    const data = [1, 2, 3, 4]
    const rooms = data.map(room => ({
        value: room,
        label: room,
    }))

    rooms.push({ value: '5+', label: '5+' })

    const onFinish = values => {
        const queryData = Object.entries(values)
        let query = {}

        queryData.forEach(function (param) {
            query[param[0]] = param[1]
        })

        router.push({
            pathname: '/estates',
            query: query,
        })
    }

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                action="/search"
                method="get"
                className="bg-white text-gray-50 ">
                <Row
                    className={'p-8'}
                    gutter={16}
                    align={'middle'}
                    justify={'space-between'}>
                    <Col>
                        <Row gutter={16}>
                            <Col>
                                <SmallParagraph className="pl-2">
                                    {t('label.projects')}
                                </SmallParagraph>
                                <Form.Item name="location_city_id">
                                    <FilterSelect
                                        showSearch
                                        placeholder={t('button.pick')}
                                        variant={'borderless'}
                                        popupMatchSelectWidth={false}
                                        options={projects}
                                    />
                                </Form.Item>
                            </Col>
                            <Col>
                                <SmallParagraph className="pl-2">
                                    {t('label.roomCount')}{' '}
                                </SmallParagraph>
                                <Form.Item name="prices">
                                    <Select
                                        placeholder={t('button.pick')}
                                        variant={'borderless'}
                                        options={rooms}
                                        allowClear
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row gutter={16}>
                            <Col>
                                <Button
                                    htmlType="submit"
                                    className="btn btn-main w-100"
                                    size="middle">
                                    {t('button.search')}
                                </Button>
                            </Col>

                            <Col>
                                <OrderCall lng={lng} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
