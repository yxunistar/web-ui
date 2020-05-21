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
                <Column>
                    <Icon.Refresh />
                </Column>
                <Column>
                    <Icon.Down />
                </Column>
                <Column>
                    <Icon.Right />
                </Column>
            </Row>
        </>
    );
};

export default DefaultDemo;
