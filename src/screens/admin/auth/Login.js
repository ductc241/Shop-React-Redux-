import React from 'react'
import { Form, Input, Button } from 'antd';

import { login } from '../../../api/user';

export default function Login() {
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 19 },
    };
  

    const onFinish = async (user) => {
        const response = await login(user)
        console.log(response)
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "90vh" }}>
            <Form name="login" {...layout}
                onFinish={onFinish}
                autoComplete="off"
                style={{ width:"30%", margin: "0 auto" }}
            >
                <h1>Login</h1>
                <Form.Item 
                    wrapperCol={{offset: 1}}
                    label="Username"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        }
                    ]}
                >
                <   Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{offset: 1}}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 10,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
