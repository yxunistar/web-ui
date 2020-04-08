import React from "react";
import Button from "Button";
import { ThemeProvider } from "Theme";
import { Wrapper, Block, Column, Row } from "layout";

export default { title: "General/Button" };

export const View = () => (
    <ThemeProvider>
        <Wrapper>
            <Block title="Basic">
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
        </Wrapper>
    </ThemeProvider>
);
