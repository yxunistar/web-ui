import React from "react";
import { default as DefaultDemo } from "./Default/Default.demo";
import { Block } from "layout";

const Examples = () => {
    return (
        <>
            <Block title="Default" demo={DefaultDemo}>
                <DefaultDemo />
            </Block>
        </>
    );
};

export default Examples;
