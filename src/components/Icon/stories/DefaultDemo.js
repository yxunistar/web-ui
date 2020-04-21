import React from "react";
import { Row, Column } from "layout";
import Icon from "Icon";

const DefaultDemo = () => {
    return (
        <>
            <Row>
                <Column>
                    <Icon.Exclamation />
                </Column>
                <Column>
                    <Icon.Error />
                </Column>
                <Column>
                    <Icon.Success />
                </Column>
                <Column>
                    <Icon.Calendar />
                </Column>
            </Row>
        </>
    );
};

export default DefaultDemo;
