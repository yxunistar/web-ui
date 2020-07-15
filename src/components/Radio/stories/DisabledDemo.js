import React, { useState } from "react";
import Radio from "../Radio";
import Form from "../../Form";

const DisabledDemo = () => {
    const [smallValue, setSmallValue] = useState("Peggy");
    const [bigValue, setBigValue] = useState("Peggy");
    return (
        <Form>
            <Form.Row>
                <Form.Item label={`small size:`}>
                    <Radio.Group size={`small`} value={smallValue} onChange={e => setSmallValue(e.target.value)} disabled>
                        <Radio value="Peggy" key="small Peggy">
                            Peggy
                        </Radio>
                        <Radio value="Wade" key="small Wade">
                            Wade
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form.Row>
            <Form.Row>
                <Form.Item label={`big size:`}>
                    <Radio.Group value={bigValue} onChange={e => setBigValue(e.target.value)} disabled>
                        <Radio value="Peggy" key="big Peggy">
                            Peggy
                        </Radio>
                        <Radio value="Wade" key="big Wade">
                            Wade
                        </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form.Row>
        </Form>
    );
};

export default DisabledDemo;
