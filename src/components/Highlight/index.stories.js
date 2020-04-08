import React from "react";
import Highlight from "Highlight";
import { ThemeProvider } from "Theme";
import { Wrapper, Block, Row } from "layout";

export default { title: "Other/Highlight" };

export const View = () => (
    <ThemeProvider>
        <Wrapper>
            <Block title="Default">
                <Row>
                    這段文字<Highlight>高調顯示</Highlight>的模樣。
                </Row>
            </Block>
        </Wrapper>
    </ThemeProvider>
);
