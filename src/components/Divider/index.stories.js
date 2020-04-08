import React from "react";
import Divider from "Divider";
import { ThemeProvider } from "Theme";
import { Wrapper, Block, Row } from "layout";

export default { title: "Other/Divider" };

export const View = () => (
    <ThemeProvider>
        <Wrapper>
            <Block title="Default">
                <Row>
                    <Divider />
                </Row>
            </Block>
        </Wrapper>
    </ThemeProvider>
);
