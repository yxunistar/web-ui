import React, { useState } from "react";
import { Row } from "layout";
import Input from "Input";

const DefaultDemo = () => {
    const [text, setText] = useState("");
    return (
        <>
            <Row>
                <Input
                    type="text"
                    value={text}
                    placeholder="Basic usage"
                    onChange={e => setText(e.target.value)}
                    onKeyDown={e => setText(e.target.value)}
                />
            </Row>
        </>
    );
};

export default DefaultDemo;
