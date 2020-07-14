import React from "react";
import { Column, Row } from "/src/layout";
import Button from "../";

const DisabledDemo = () => {
    return (
        <Row>
            <Column>
                <Button type="primary" disabled>
                    Primary(Default)
                </Button>
            </Column>
            <Column>
                <Button type="secondary" disabled>
                    Secondary
                </Button>
            </Column>
            <Column>
                <Button type="important" disabled>
                    Important
                </Button>
            </Column>
            <Column>
                <Button type="custom" disabled>
                    Custom
                </Button>
            </Column>
        </Row>
    );
};

export default DisabledDemo;
