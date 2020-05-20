import React, { useState } from "react";
import { Row, Column } from "layout";
import Dice from "Dice";
import Button from "Button";

const AnimationDemo = () => {
    const [switchAnimation, setSwitchAnimation] = useState(false);

    const handleStartAnimation = () => {
        setSwitchAnimation(true);
    };
    const handleStopAnimation = () => {
        setSwitchAnimation(false);
    };
    return (
        <>
            <Row>
                <Column>
                    <Button onClick={handleStartAnimation}>Start</Button>
                </Column>
                <Column>
                    <Button onClick={handleStopAnimation}>Stop</Button>
                </Column>
            </Row>
            <Row></Row>
            <Row>
                <Dice switch={switchAnimation} />
            </Row>
        </>
    );
};

export default AnimationDemo;
