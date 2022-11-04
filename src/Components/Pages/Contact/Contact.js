import React from 'react';
import { Button, Form, Input, Select, } from 'antd';

const { Option } = Select;
const { TextArea } = Input;


const Contact = () => {

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className="block contactPage">
            <div className="container">
                <h2>Contact</h2>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    layout='vertical'
                    size='large'
                >
                    <Form.Item
                        label="FullName"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        name="Message"
                        label="message"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>



                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Contact;