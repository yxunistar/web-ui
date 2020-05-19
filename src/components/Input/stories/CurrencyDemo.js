import React, { useState } from "react";
import { Row } from "layout";
import Input from "Input";

const CurrencyDemo = () => {
    const [amount, setAmount] = useState(2000);
    return (
        <>
            <Row>
                <Input.Currency amount={amount} onChange={e => setAmount(e.target.value)} />
            </Row>
        </>
    );
};

export default CurrencyDemo;
