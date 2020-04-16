import React from "react";
import Form from "Form";

const HorizontalLayoutDemo = () => {
    return (
        <Form className="outer">
            <Form.Row>
                <Form.Item label="充值金额" className="inner">
                    <input />
                </Form.Item>
                <Form.Item label="充值金额" className="inner">
                    <input />
                </Form.Item>
            </Form.Row>
        </Form>
    );
};

export default HorizontalLayoutDemo;
