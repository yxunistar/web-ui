import React from "react";
import { Block, Row } from "layout";
import { default as DefaultInstance } from "./Default";
import demo from "./demo.md";

const Default = () => {
    return (
        <Block title="Default" code={demo} markdown={true}>
            <Row>
                <DefaultInstance />
            </Row>
        </Block>
    );
};

export default Default;
