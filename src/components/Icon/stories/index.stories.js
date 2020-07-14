import React from "react";
import { Wrapper, Block } from "/src/layout";
import DefaultDemo from "./DefaultDemo";

const document = () => (
    <>
        <p>SVG常用圖示。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" demo={DefaultDemo} />
    </>
);

export default { title: "General/Icon" };
export const View = () => <Wrapper title="Icon" document={document} examples={examples} />;
