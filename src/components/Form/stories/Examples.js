import React from "react";
import { Block, Row } from "layout";
import Form from "Form";

const Examples = () => {
    return (
        <>
            <Block title="Horizontal Layout">
                <Row>
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
                </Row>
            </Block>
            <Block title="Vertical Layout">
                <Row>
                    <Form className="outer">
                        <Form.Row>
                            <Form.Item label="充值金额" className="inner">
                                <input />
                            </Form.Item>
                        </Form.Row>
                        <Form.Row>
                            <Form.Item label="充值金额" className="inner">
                                <input />
                            </Form.Item>
                        </Form.Row>
                    </Form>
                </Row>
            </Block>
            <Block title="Mixed Layout">
                <Row>
                    <Form className="outer">
                        <Form.Row>
                            <Form.Item label="充值金额" className="inner">
                                <input />
                            </Form.Item>
                            <Form.Item label="充值金额" className="inner">
                                <input />
                            </Form.Item>
                        </Form.Row>
                        <Form.Row>
                            <Form.Item label="充值金额" className="inner">
                                <input />
                            </Form.Item>
                        </Form.Row>
                    </Form>
                </Row>
            </Block>
        </>
    );
};

export default Examples;
