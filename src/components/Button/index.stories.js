import React from "react";
import Button from "Button";
import { ThemeProvider } from "Theme";
import { Block, Column, Row } from "layout";

export default { title: "General/Button" };

export const View = () => (
    <ThemeProvider>
        <Block title="Default">
            <Row>
                <Column>
                    <Button type="primary">Primary (Default)</Button>
                </Column>
                <Column>
                    <Button type="secondary">Secondary</Button>
                </Column>
                <Column>
                    <Button type="important">Important</Button>
                </Column>
                <Column>
                    <Button type="custom">Custom</Button>
                </Column>
            </Row>
        </Block>
        <Block title="Active">
            <Row>
                <Column>
                    <Button type="primary" active={true}>
                        Primary (Default)
                    </Button>
                </Column>
                <Column>
                    <Button type="secondary" active={true}>
                        Secondary
                    </Button>
                </Column>
                <Column>
                    <Button type="important" active={true}>
                        Important
                    </Button>
                </Column>
                <Column>
                    <Button type="custom" active={true}>
                        Custom
                    </Button>
                </Column>
            </Row>
        </Block>
        <Block title="Disabled">
            <Row>
                <Column>
                    <Button type="primary" disabled={true}>
                        Primary (Default)
                    </Button>
                </Column>
                <Column>
                    <Button type="secondary" disabled={true}>
                        Secondary
                    </Button>
                </Column>
                <Column>
                    <Button type="important" disabled={true}>
                        Important
                    </Button>
                </Column>
                <Column>
                    <Button type="custom" disabled={true}>
                        Custom
                    </Button>
                </Column>
            </Row>
        </Block>
    </ThemeProvider>
);
