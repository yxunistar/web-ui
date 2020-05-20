import React from "react";
import { Row } from "layout";
import Dice from "Dice";

const ActiveDemo = () => {
    return (
        <>
            <Row>
                <Dice active={true} />
            </Row>
        </>
    );
};

export default ActiveDemo;
