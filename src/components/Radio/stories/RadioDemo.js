import React from "react";
import Radio from "../Radio";
import { Column, Row } from "../../../layout";

const RadioDemo = () => {
    return (
        <Row>
            <Column>
                <Radio value="Peggy">Peggy</Radio>
            </Column>
            <Column>
                <Radio value="Wade" checked>
                    Wade
                </Radio>
            </Column>
        </Row>
    );
};

export default RadioDemo;
