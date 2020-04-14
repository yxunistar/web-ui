import React from "react";
import { Block, Row } from "layout";
import Highlight from "Highlight";

const Examples = () => {
    return (
        <>
            <Block title="Type">
                <>
                    <Row>
                        這段文字<Highlight>高調顯示(red: Default)</Highlight>的模樣。
                    </Row>
                    <Row>
                        這段文字<Highlight type="green">高調顯示(green)</Highlight>的模樣。
                    </Row>
                </>
            </Block>
        </>
    );
};

export default Examples;
