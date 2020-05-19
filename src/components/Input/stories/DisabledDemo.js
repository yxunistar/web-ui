import React from "react";
import { Row } from "layout";
import Input from "Input";

const DisabledDemo = () => {
    return (
        <>
            <Row>
                <Input type="text" placeholder="Disabled usage" disabled={true} />
            </Row>
        </>
    );
};

export default DisabledDemo;
