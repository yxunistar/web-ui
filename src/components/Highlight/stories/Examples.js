import React from "react";
import { Block, Row } from "layout";
import Highlight from "Highlight";

const Examples = () => {
    return (
        <>
            <Block title="Default">
                <Row>
                    這段文字<Highlight>高調顯示</Highlight>的模樣。
                </Row>
            </Block>
        </>
    );
};

export default Examples;
