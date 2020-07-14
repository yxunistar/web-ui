import React from "react";
import Radio from "./components/Radio";
import { Row, Column } from "/src/layout";

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
