import React from "react";
import { Row } from "layout";
import Highlight from "Highlight";

const ColorDemo = () => {
    return (
        <>
            <Row>
                這段文字<Highlight>高調顯示</Highlight>的模樣。
            </Row>
            <Row>
                這段文字<Highlight color="green">高調顯示</Highlight>的模樣。
            </Row>
        </>
    );
};

export default ColorDemo;
