import React from "react";
import Divider from "Divider";
import { ThemeProvider } from "Theme";
import { Block, Row } from "layout";

export default { title: "Other/Divider" };

export const View = () => (
    <ThemeProvider>
        <Block title="Default">
            <Row>
                <Divider />
            </Row>
        </Block>
    </ThemeProvider>
);
