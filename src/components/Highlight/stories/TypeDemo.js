import React from "react";
import { Row } from "layout";
import Highlight from "Highlight";

const TypeDemo = () => {
    return (
        <>
            <Row>
                這段文字<Highlight>高調顯示(red: Default)</Highlight>的模樣。
            </Row>
            <Row>
                這段文字<Highlight type="green">高調顯示(green)</Highlight>的模樣。
            </Row>
        </>
    );
};

export default TypeDemo;
