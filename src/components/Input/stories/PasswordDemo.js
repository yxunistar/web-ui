import React, { useState } from "react";
import { Row } from "layout";
import Input from "Input";

const PasswordDemo = () => {
    const [password, setPassword] = useState("");
    return (
        <>
            <Row>
                <Input
                    type="password"
                    autocomplete="new-password"
                    value={password}
                    placeholder="Password usage"
                    onChange={e => setPassword(e.target.value)}
                />
            </Row>
        </>
    );
};

export default PasswordDemo;
