import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select } from "antd";

<Form.Item
    name="password"
    label="Password"
    rules={[
        {
            required: true,
            message: "Please input your password!"
        }
    ]}
    hasFeedback
>
    <Input.Password />
</Form.Item>

<Form.Item
    name="confirm"
    label="Confirm Password"
    dependencies={["password"]}
    hasFeedback
    rules={[
        {
            required: true,
            message: "Please confirm your password!"
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match!"));
            }
        })
    ]}
>
    <Input.Password />
</Form.Item>


<Form.Item
    name="residence"
    label="Habitual Residence"
    rules={[
        {
            type: "array",
            required: true,
            message: "Please select your habitual residence!"
        }
    ]}
>
    <Cascader options={residences} />
</Form.Item>


<Form.Item
    name="donation"
    label="Donation"
    rules={[
        {
            required: true,
            message: "Please input donation amount!"
        }
    ]}
>
    <InputNumber
        addonAfter={suffixSelector}
        style={{
            width: "100%"
        }}
    />
</Form.Item>

<Form.Item
    name="website"
    label="Website"
    rules={[
        {
            required: true,
            message: "Please input website!"
        }
    ]}
>
    <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
        <Input />
    </AutoComplete>
</Form.Item>

<Form.Item
    name="intro"
    label="Intro"
    rules={[
        {
            required: true,
            message: "Please input Intro"
        }
    ]}
>
    <Input.TextArea showCount maxLength={100} />
</Form.Item>

<Form.Item
    name="gender"
    label="Gender"
    rules={[
        {
            required: true,
            message: "Please select gender!"
        }
    ]}
>
    <Select placeholder="select your gender">
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
        <Option value="other">Other</Option>
    </Select>
</Form.Item>

<Form.Item label="Captcha" extra="We must make sure that your are a human.">
    <Row gutter={8}>
        <Col span={12}>
            <Form.Item
                name="captcha"
                noStyle
                rules={[
                    {
                        required: true,
                        message: "Please input the captcha you got!"
                    }
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
        <Col span={12}>
            <Button>Get captcha</Button>
        </Col>
    </Row>
</Form.Item>

<Form.Item
    name="agreement"
    valuePropName="checked"
    rules={[
        {
            validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement"))
        }
    ]}
    {...tailFormItemLayout}
>
    <Checkbox>
        I have read the <a href="">agreement</a>
    </Checkbox>
</Form.Item>
<Form.Item {...tailFormItemLayout}>
    <Button type="primary" htmlType="submit">
        Register
    </Button>
</Form.Item>
