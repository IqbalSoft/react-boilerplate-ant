import { Button, Card, Form, Input } from "antd";
import React from "react";

import './styles.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <Card className="w-2/5 login-box">
        <div className="text-2xl mb-5">Login</div>

        <Form
          onFinish={() => { }}
          layout="vertical"
        >
          <Form.Item
            label="Personal Number"
            name="pn"
            rules={[
              {
                required: true,
                message: 'Personal Number is required!',
              },
            ]}
          >
            <Input placeholder="Personal Number" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Password is required!',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className="flex justify-end">
            <Button type="default" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;