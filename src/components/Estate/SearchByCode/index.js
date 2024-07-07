import { Button, Col, Form, Input, Row } from 'antd'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { objectToQueryParams } from '@/lib/helper'

export default function SearchByCode(props) {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onFinish = values => {
        setLoading(true)
        const queryData = Object.entries(values)
        let query = {}
        queryData.forEach(function (param) {
            query[param[0]] = param[1]
        })

        const queryString = objectToQueryParams(query)

        const updateLink = '/estates?' + queryString
        router.push(updateLink)
    }

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                className="bg-white text-gray-50 ">
                <Row className={'pl-4 pt-10 pb-10'}>
                    <Col span={20} className=" ">
                        <Form.Item name="code" wrapperCol={{ sm: 22 }}>
                            <Input placeholder={'Հասցե, կոդ'} size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={4} className="field-item   ">
                        <Button
                            htmlType="submit"
                            className="btn btn-main w-100"
                            loading={loading}
                            size="large">
                            Փնտրել
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
