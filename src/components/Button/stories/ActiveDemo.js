import React from "react";
import { Column, Row } from "/src/layout";
import Button from "../";

const ActiveDemo = () => {
    return (
        <Row>
            <Column>
                <Button type="primary" active>
                    Primary(Default)
                </Button>
            </Column>
            <Column>
                <Button type="secondary" active>
                    Secondary
                </Button>
            </Column>
            <Column>
                <Button type="important" active>
                    Important
                </Button>
            </Column>
            <Column>
                <Button type="custom" active>
                    Custom
                </Button>
            </Column>
            <Column>
                <Button type="link" active>
                    Link
                </Button>
            </Column>
        </Row>
    );
};

export default ActiveDemo;
