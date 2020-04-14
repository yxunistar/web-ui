import React from "react";
import { Block, Row } from "layout";
import Layout from "components/Layout";
import Divider from "Divider";
import Form from "Form";

const Examples = () => {
    return (
        <>
            <Block title="Default">
                <Row>
                    <Layout className="outer">
                        <Layout.Section>
                            <div className="inner block">Section A</div>
                        </Layout.Section>
                        <Layout.Section>
                            <div className="inner block">Section B</div>
                        </Layout.Section>
                    </Layout>
                </Row>
            </Block>
            <Block title="Contains Divider and Form">
                <Row>
                    <Layout className="outer">
                        <Layout.Section>
                            <Form>
                                <Form.Row>
                                    <Form.Item label="充值金额">
                                        <input />
                                    </Form.Item>
                                    <Form.Item label="充值金额">
                                        <input />
                                    </Form.Item>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Item label="充值金额">
                                        <input />
                                    </Form.Item>
                                </Form.Row>
                            </Form>
                        </Layout.Section>
                        <Layout.Section>
                            <div className="inner block">Section A</div>
                        </Layout.Section>
                        <Divider />
                        <Layout.Section>
                            <div className="inner block">Section B</div>
                        </Layout.Section>
                    </Layout>
                </Row>
            </Block>
        </>
    );
};

export default Examples;
