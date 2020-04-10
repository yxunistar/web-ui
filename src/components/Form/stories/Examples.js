import React from "react";
import { Block, Row } from "layout";
import Form from "Form";

const Examples = () => {
    return (
        <>
            <Block title="Default">
                <Row>
                    <Form.Item label="充值金额">
                        <input />
                    </Form.Item>
                </Row>
            </Block>
        </>
    );
};

export default Examples;
