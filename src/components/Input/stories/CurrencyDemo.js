import React from "react";
import { Row } from "layout";
import Input from "Input";

const CurrencyDemo = () => {
    return (
        <>
            <Row>
                <Input.Currency />
            </Row>
        </>
    );
};

export default CurrencyDemo;
