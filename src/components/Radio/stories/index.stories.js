import React from "react";
import { Wrapper, Block } from "layout";
import DefaultDemo from "./DefaultDemo";
import SizeDemo from "./SizeDemo";

const document = () => (
    <>
        <p>單選元件。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Default" demo={DefaultDemo} />
        <Block title="Size" description={`尺寸有兩種：big（預設）、small`} demo={SizeDemo} />
    </>
);

export default { title: "Data Entry|Radio" };
export const View = () => <Wrapper title="Radio" document={document} examples={examples} />;
