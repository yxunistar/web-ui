import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import CurrencyDemo from "./CurrencyDemo";

const document = () => (
    <>
        <p>Input</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" demo={DefaultDemo} />
        <Block title="Currency" demo={CurrencyDemo} />
    </>
);

export default { title: "General/Input" };
export const View = () => <Wrapper title="Input" document={document} examples={examples} />;
