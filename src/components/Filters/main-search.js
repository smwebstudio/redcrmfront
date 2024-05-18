import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function MainSearch(props) {
    const [form] = Form.useForm()
    const router = useRouter()

    const onFinish = values => {
        const queryData = Object.entries(values)
        let query = {}

        queryData.forEach(function (param) {
            query['text_search'] = param[1]
        })

        router.push({
            pathname: '/search',
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
                <Row>
                    <Col span={20} className=" ">
                        <Form.Item name="search_query" wrapperCol={{ sm: 22 }}>
                            <Input
                                placeholder={'Հասցե, կոդ'}
                                size="large"
                                bordered={false}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={4} className="field-item   ">
                        <Button
                            htmlType="submit"
                            className="btn btn-main w-100"
                            size="large">
                            Փնտրել
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
