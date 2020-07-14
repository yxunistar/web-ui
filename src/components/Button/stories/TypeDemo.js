import React from "react";
import { Column, Row } from "/src/layout";
import Button from "../";

const TypeDemo = () => {
    return (
        <Row>
            <Column>
                <Button type="primary">Primary (Default)</Button>
            </Column>
            <Column>
                <Button type="secondary">Secondary</Button>
            </Column>
            <Column>
                <Button type="important">Important</Button>
            </Column>
            <Column>
                <Button type="custom">Custom</Button>
            </Column>
            <Column>
                <Button type="link">Link</Button>
            </Column>
        </Row>
    );
};

export default TypeDemo;
