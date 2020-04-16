import React from "react";
import { Wrapper, Block } from "layout";
import TypeDemo from "./TypeDemo";

const document = () => (
    <>
        <p>日夜版顏色一致。</p>
    </>
);

const examples = () => (
    <>
        <Block title="Type" demo={TypeDemo} />
    </>
);

export default { title: "Other|Highlight" };
export const View = () => <Wrapper title="Highlight" document={document} examples={examples} />;
