import React from "react";
import { Row, Column } from "layout";
import Dice from "Dice";

const DefaultDemo = () => {
    return (
        <>
            <Row>
                <Column>
                    <Dice />
                </Column>
                <Column>
                    <Dice dot={2} />
                </Column>
                <Column>
                    <Dice dot={3} />
                </Column>
                <Column>
                    <Dice dot={4} />
                </Column>
                <Column>
                    <Dice dot={5} />
                </Column>
                <Column>
                    <Dice dot={6} />
                </Column>
            </Row>
        </>
    );
};

export default DefaultDemo;
