import React from "react";
import Button from "Button";
import { Row } from "layout";

const LinkDemo = () => {
    return (
        <>
            <Row>
                <Button type="link">Link</Button>
            </Row>
            <Row>
                <Button type="link" href={"http://www.google.com"}>
                    Link with href
                </Button>
            </Row>
        </>
    );
};

export default LinkDemo;
