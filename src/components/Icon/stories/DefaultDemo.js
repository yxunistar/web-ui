import React from "react";
import { Column, Row } from "../../../layout";
import Icon from "../index";

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
