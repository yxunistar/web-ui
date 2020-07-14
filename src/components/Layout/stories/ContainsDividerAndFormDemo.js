import React from "react";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Divider from "./components/Divider";

const ContainsDividerAndFormDemo = () => {
    return (
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
    );
};

export default ContainsDividerAndFormDemo;
